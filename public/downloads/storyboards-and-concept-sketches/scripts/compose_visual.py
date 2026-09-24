#!/usr/bin/env python3
"""Compose exact DM Mono titles and descriptions around an equal-width image strip."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageDraw, ImageFont


FONT_PATH = Path(__file__).resolve().parents[1] / "assets" / "DMMono-Regular.ttf"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Compose exact DM Mono captions above or below an equal-width panel strip."
    )
    parser.add_argument("--image", required=True, type=Path)
    parser.add_argument("--captions", required=True, type=Path)
    parser.add_argument("--placement", choices=("above", "below"), required=True)
    parser.add_argument("--out", required=True, type=Path)
    parser.add_argument("--caption-height", type=int, default=0)
    parser.add_argument("--side-padding", type=int, default=0)
    return parser.parse_args()


def load_font(size: int) -> ImageFont.FreeTypeFont:
    if not FONT_PATH.exists():
        raise FileNotFoundError(f"Bundled DM Mono font is missing: {FONT_PATH}")
    return ImageFont.truetype(str(FONT_PATH), size=size)


def text_width(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont) -> float:
    return draw.textlength(text, font=font)


def wrap_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    font: ImageFont.ImageFont,
    max_width: int,
) -> list[str]:
    words = text.split()
    if not words:
        return []
    lines: list[str] = []
    current = words[0]
    for word in words[1:]:
        candidate = f"{current} {word}"
        if text_width(draw, candidate, font) <= max_width:
            current = candidate
        else:
            lines.append(current)
            current = word
    lines.append(current)
    return lines


def line_height(font: ImageFont.ImageFont, spacing: int = 0) -> int:
    box = font.getbbox("Ag")
    return box[3] - box[1] + spacing


def sentence_case_title(title: str) -> str:
    """Uppercase the first alphabetic character without altering approved proper nouns."""
    cleaned = " ".join(title.strip().split())
    for index, char in enumerate(cleaned):
        if char.isalpha():
            return cleaned[:index] + char.upper() + cleaned[index + 1 :]
    return cleaned


def validate_captions(raw: object) -> list[dict[str, str]]:
    if not isinstance(raw, list) or not raw:
        raise ValueError("Captions must be a non-empty JSON array.")
    captions: list[dict[str, str]] = []
    for index, item in enumerate(raw, start=1):
        if not isinstance(item, dict):
            raise ValueError(f"Caption {index} must be an object.")
        title = item.get("title")
        description = item.get("description")
        if not isinstance(title, str) or not title.strip():
            raise ValueError(f"Caption {index} needs a non-empty title.")
        if not isinstance(description, str) or not description.strip():
            raise ValueError(f"Caption {index} needs a non-empty description.")
        captions.append(
            {
                "title": sentence_case_title(title),
                "description": " ".join(description.strip().split()),
            }
        )
    return captions


def required_caption_height(
    draw: ImageDraw.ImageDraw,
    captions: Iterable[dict[str, str]],
    title_font: ImageFont.ImageFont,
    body_font: ImageFont.ImageFont,
    text_width_px: int,
    padding_y: int,
) -> int:
    title_step = line_height(title_font, spacing=6)
    body_step = line_height(body_font, spacing=7)
    maximum = 0
    for caption in captions:
        title_lines = wrap_text(draw, caption["title"], title_font, text_width_px)
        body_lines = wrap_text(draw, caption["description"], body_font, text_width_px)
        block = (
            len(title_lines) * title_step
            + 14
            + len(body_lines) * body_step
            + padding_y * 2
        )
        maximum = max(maximum, block)
    return maximum


def main() -> None:
    args = parse_args()
    captions = validate_captions(json.loads(args.captions.read_text(encoding="utf-8")))

    with Image.open(args.image) as source:
        strip = source.convert("RGB")

    panel_count = len(captions)
    panel_width = strip.width / panel_count
    side_padding = args.side_padding or max(18, round(panel_width * 0.065))
    text_width_px = max(100, round(panel_width - side_padding * 2))
    title_size = max(18, min(38, round(panel_width * 0.065)))
    body_size = max(14, min(27, round(panel_width * 0.044)))
    title_font = load_font(title_size)
    body_font = load_font(body_size)

    measure = Image.new("RGB", (strip.width, 10), "white")
    measure_draw = ImageDraw.Draw(measure)
    padding_y = max(18, round(body_size * 1.15))
    minimum_height = required_caption_height(
        measure_draw,
        captions,
        title_font,
        body_font,
        text_width_px,
        padding_y,
    )
    caption_height = max(args.caption_height, minimum_height)

    canvas = Image.new("RGB", (strip.width, strip.height + caption_height), "white")
    image_top = caption_height if args.placement == "above" else 0
    caption_top = 0 if args.placement == "above" else strip.height
    canvas.paste(strip, (0, image_top))
    draw = ImageDraw.Draw(canvas)

    title_color = (28, 28, 28)
    body_color = (94, 94, 94)
    title_step = line_height(title_font, spacing=6)
    body_step = line_height(body_font, spacing=7)

    for index, caption in enumerate(captions):
        left = round(index * panel_width) + side_padding
        top = caption_top + padding_y
        title_lines = wrap_text(draw, caption["title"], title_font, text_width_px)
        for line in title_lines:
            draw.text((left, top), line, fill=title_color, font=title_font)
            top += title_step
        top += 14
        body_lines = wrap_text(draw, caption["description"], body_font, text_width_px)
        for line in body_lines:
            draw.text((left, top), line, fill=body_color, font=body_font)
            top += body_step

    args.out.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(args.out, format="PNG", optimize=True)
    print(f"Wrote {args.out} ({canvas.width}x{canvas.height})")


if __name__ == "__main__":
    main()
