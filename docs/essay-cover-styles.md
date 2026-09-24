# Essay cover styles by category

Editorial covers for Writing essays. Each category has one locked visual system so cards and article headers feel related at a glance. Subject matter changes per essay; style does not.

Canonical reference images live in `public/images/writing/covers/`. Always pass the category’s reference when regenerating.

Aspect ratio: **4:3**. No text, logos, brand marks, or readable labels.

---

## Life

**Canonical:** `theres-never-a-good-time-to-leave.jpg`

Emotional, personal, transitional — torn collage meeting open space.

| Token | Spec |
| --- | --- |
| Layout | Vertical split: dense B&W photo collage on one side, large textured solid color field on the other |
| Palette | High-contrast black-and-white photos + one hero field color (cobalt/royal blue in the canonical); small sharp accent bars in orange-red and deep purple |
| Photo treatment | Grainy metaphorical B&W fragments with jagged torn-paper edges (hands, keys, paths, homes, figures) |
| Figure | Small full-body silhouette stepping from the collage edge into the open color field |
| Texture | Paper grain, analog scrapbook feel across collage and color field |
| Mood | Leaving, choice, serendipity — busy past → open unknown |
| Avoid | Soft cream product-shot lighting; clean tiled Product blocks; busy full-bleed collage with no open field; chalk-X / magenta zine look |

**Prompt lock (append to subject description):**

> Match the Life cover system from the reference: jagged torn-edge vertical split between a dense high-contrast B&W photo collage and a large textured solid color field; small figure walking from collage into open space; sharp orange-red and purple accent bars; paper grain. No tiled Product collage; no full-bleed zine without the open field.

---

## Product

**Canonical:** `how-to-build-your-product-intuition.jpg`

Systems, craft, shipping — experience compressed into a clear move.

| Token | Spec |
| --- | --- |
| Layout | Horizontal torn-paper strata: dense research/experience layers below, clean workspace result above |
| Palette | Grayscale / beige paper with one hero accent path in saturated blue |
| Photo treatment | Grainy B&W fragments (people, places, eyes, desks) + diagrams, maps, wireframes inside the layers |
| Focal action | Hand placing a simple sketch/wireframe scrap on a quiet surface; blue path/arrow rising from complexity to that result |
| Texture | Layered paper tears, mug/desk still-life grit |
| Mood | Intuition as compressed experience — synthesis, not decoration |
| Avoid | Flat yellow/green/red tiled blocks with violet circles; Life cobalt open-field leave metaphor; Design maze→room split |

**Prompt lock:**

> Match the Product cover system from the reference: stacked torn-paper layers of B&W research imagery and diagrams beneath a clean desk surface; hand placing a simple wireframe; one bright blue path connecting complexity to the result; grayscale + blue accent. No tiled color-block collage.

---

## Design

**Canonical:** `simplicity-is-the-highest-form-of-taste.jpg`

Form, space, taste — complexity giving way to restraint.

| Token | Spec |
| --- | --- |
| Layout | Jagged torn-edge vertical split: dense architectural maze on one side, sparse quiet interior on the other |
| Palette | Monochrome stone/paper greys with sharp primary accents (red, yellow); one hero saturated blue doorway on the calm side |
| Forms | Impossible stairs, doors, corridors (complexity) vs empty room, single doorway, optional sphere on plinth (simplicity) |
| Texture | Rough paper / collage grain; hard architectural edges |
| Mood | Taste as editing — cutting through noise into clarity |
| Avoid | Soft teal/peach isometric still life; Product violet overlays; Life cobalt full-bleed field without architectural metaphor |

**Prompt lock:**

> Match the Design cover system from the reference: jagged split between a chaotic Escher-like maze of stairs/doors and a bright minimal room with one open blue doorway; monochrome maze + primary accents; paper collage grain. Complexity → simplicity.

---

## Workflow

1. Pick the category prompt lock + canonical reference path.
2. Describe only the **subject metaphor** for this essay (what’s in the photo panels / geometry).
3. Generate 4:3 with `reference_image_paths` pointing at the canonical cover.
4. Save to `public/images/writing/covers/<essay-slug>.jpg` and set `cover` / `coverAlt` in the MDX frontmatter.
