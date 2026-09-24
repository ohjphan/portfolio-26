---
name: storyboards-and-concept-sketches
description: Create consistent low-fidelity storyboards and product concept sketches from research, journeys, workflows, product ideas, onboarding concepts, developer experiences, before-and-after states, and persona-specific paths. Use when a user asks to visualize, sketch, storyboard, mock up, or make an experience tangible. Select storyboard mode for a human-centered narrative and concept-sketch mode for UI structure or interaction flow. Propose the panel or frame structure for approval before generating unless the user explicitly asks to proceed immediately.
---

# Storyboards and Concept Sketches

Turn complex experiences and product ideas into visuals teams can understand and discuss before detailed design or implementation.

## Required references

Read the reference for the selected mode completely before planning or generating:

- Storyboard mode: [references/storyboard-guide.md](references/storyboard-guide.md)
- Concept-sketch mode: [references/concept-sketch-guide.md](references/concept-sketch-guide.md)

Use the bundled storyboard images under `assets/` only as style and composition references. Do not copy their people, text, organizations, or exact scenes.

## Select the mode

Use **storyboard mode** when the request centers people, context, motivation, friction, decisions, consequences, or change over time.

Use **concept-sketch mode** when the request centers screens, product structure, UI states, navigation, interaction, onboarding, or workflow scope.

If both modes are plausible and the choice would materially change the result, ask one focused question. Do not produce both by default. If the user explicitly names a mode, use it.

## Shared workflow

### 1. Understand

Identify the audience, central idea, selected mode, source material, constraints, and desired output. Ask only questions whose answers would materially change the visual; otherwise state consequential assumptions briefly.

### 2. Propose

Recommend the fewest panels or frames needed. Draft, for each:

- narrative or interaction purpose;
- visible scene, state, or action;
- exact sentence-case title;
- one-sentence description or annotation.

Present the structure compactly and wait for explicit approval or requested changes. Skip this checkpoint only when the user explicitly asks to generate immediately.

### 3. Generate caption-free artwork

Use the image-generation tool. Generate the illustrations or UI frames without external titles, descriptions, or paragraph copy. Limit text inside the artwork to brief interface labels, handwritten notes, or annotations essential to the scene.

Keep panel dimensions, visual language, characters, environments, UI shells, and accent treatment consistent. Do not rely on image generation to reproduce exact captions or DM Mono.

### 4. Compose exact captions

Treat composition as a separate deterministic step. Use `scripts/compose_visual.py` with an ordered JSON array whose length matches the visible panel or frame count:

```json
[
  {
    "title": "A clear path appears",
    "description": "A focused checklist highlights one meaningful first action."
  }
]
```

For a storyboard, place captions below the artwork:

```bash
python <skill-directory>/scripts/compose_visual.py \
  --image <caption-free-strip.png> \
  --captions <captions.json> \
  --placement below \
  --out <final-storyboard.png>
```

For a concept sketch, place captions above the UI frames:

```bash
python <skill-directory>/scripts/compose_visual.py \
  --image <caption-free-strip.png> \
  --captions <captions.json> \
  --placement above \
  --out <final-concept-sketch.png>
```

The script uses the bundled DM Mono font for every external title and description. Use hierarchy through size, spacing, placement, and color rather than another typeface. Keep UI text inside the artwork visually distinct with a neutral sans-serif or hand-drawn treatment.

### 5. Deliver

Return:

1. one sentence stating the central message;
2. one finished composite PNG ready to share;
3. an ordered text transcript of titles and descriptions when useful for review, accessibility, or reuse;
4. individual panel images only when requested;
5. material assumptions only when they affect interpretation.

## Shared visual system

- Use a white or warm-white canvas with generous whitespace.
- Use monochrome graphite, ink, or hand-drawn wireframe linework.
- Use one restrained accent color only when it directs attention.
- Keep repeated panels, frames, borders, and caption placement consistent.
- Avoid polished production UI, marketing illustration, gradients, and decorative clutter.
- Keep titles to roughly 3–7 words and descriptions to one concise sentence.
- Preserve approved wording, capitalization of proper nouns, and exact panel order.
- Keep the visual legible at normal presentation size.

## Verify

Before delivery, confirm:

- the output is clearly one selected mode, not an ambiguous mixture;
- the central message is understandable after one pass;
- every panel or frame advances the narrative or interaction;
- people, environments, UI shells, and repeated components remain consistent;
- titles and descriptions match the approved wording and use sentence case;
- every external title and description is rendered in DM Mono;
- UI text remains visually distinct from the external caption layer;
- no captions are misspelled, omitted, truncated, clipped, or paired with the wrong panel;
- no unsupported claims, metrics, quotes, outcomes, or features were added;
- the result remains intentionally low fidelity and does not imply final design approval;
- the exported PNG is cleanly cropped and contains no stray artifacts.

Revise any generic, redundant, crowded, illegible, overly polished, disconnected, or unsupported panel before delivery.
