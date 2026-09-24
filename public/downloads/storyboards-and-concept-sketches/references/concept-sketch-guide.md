# Concept Sketch Mode Guide

## Contents

- [Choose the structure](#choose-the-structure)
- [Propose the frames](#propose-the-frames)
- [Visual rules](#visual-rules)
- [Image-generation prompt](#image-generation-prompt)
- [Annotation writing](#annotation-writing)
- [Quality rubric](#quality-rubric)

## Choose the structure

Use the fewest frames needed to make the product idea understandable. Default to 3–6 frames and focus each frame on one meaningful state or transition rather than every click.

### Linear flow

Use equal-size frames in a left-to-right sequence.

### Before and after

Use two equal-size primary frames. Add a third change frame only when it materially improves comprehension.

### Parallel personas

Create one row per persona or clearly separated lanes. Keep equal-size UI frames within and across lanes, and preserve shared steps.

### Branching flow

Show the common starting state first, then split into clearly labeled branches. Prefer spatial separation to tangled connectors.

### Single-screen concept

Use one large frame with 2–4 short external annotations. Do not fabricate extra screens to fill space.

## Propose the frames

Use a compact table before generation:

| Frame | UI moment | Description or annotation |
| --- | --- | --- |
| 1 | What the user sees or does | What this moment communicates |
| 2 | Next meaningful state | Why the transition matters |

Then name the overall pattern: linear, before and after, parallel personas, branching, or single screen.

## Visual rules

- Use a pure white board background and white UI surfaces.
- Use monochrome black and gray fine-liner or graphite linework.
- Keep every UI frame in a sequence exactly the same width and height.
- Align UI frames to the same baseline and preserve repeated browser or application shells.
- Use desktop UI unless the user explicitly requests mobile, responsive, or mixed-device behavior.
- Use thin imperfect outlines, subtle stroke variation, and sparse light-gray hatching.
- Show the minimum UI needed to explain the concept.
- Use simple arrows only when sequence or branching is not already obvious.
- Keep people and decorative scenes out unless they are necessary to explain the concept.
- Do not add key-benefit footers, gradients, shadows, brand polish, or unrelated functionality.
- Keep interface labels brief and readable at presentation size.

Generate UI frames without their external titles or descriptions. Add the approved title and description above each corresponding frame with `scripts/compose_visual.py --placement above`.

## Image-generation prompt

Adapt this scaffold to the approved frame plan:

```text
Use case: product concept sketch
Asset type: wide low-fidelity UI flow
Primary request: Create a <frame count>-frame concept sketch communicating <central idea>.
Frames:
1. <visible UI state and action>
2. <visible UI state and action>
...
Style and medium: monochrome hand-drawn fine-liner wireframe; thin imperfect black and gray lines; subtle natural stroke texture; sparse light-gray hatching.
Composition: pure white background; equal-size desktop UI frames; consistent shells and navigation; one baseline; simple arrows only when necessary.
Text: Do not render external frame titles or descriptions. Use only short neutral-sans or hand-drawn UI labels needed to understand the interaction.
Avoid: people unless requested, colors, gradients, polished visual design, decorative scenes, dense filler text, inconsistent frame sizes, and unrequested features.
```

## Annotation writing

Explain intent rather than implementation details.

Good:

- Only ask for organization details when required.
- The invited developer skips setup and reaches first value.
- The prompt assembles as the user answers.

Avoid long specifications, acceptance criteria, engineering notes, and promotional claims. Keep each annotation to one sentence.

Use this disclaimer when useful:

> These are low-fidelity concept sketches created to communicate ideas. They are not proposed designs or final product experiences. Impact and effort may vary based on the specificity of the solution.

Place the note outside the UI frames.

## Quality rubric

1. Does every frame represent a meaningful state or transition?
2. Are repeated shells, navigation, and components consistent?
3. Are all frames equal size and aligned within the same flow?
4. Is the interaction understandable without detailed specifications?
5. Does the sketch show only the UI needed to explain the concept?
6. Are arrows and branches simple and unambiguous?
7. Does the result remain unmistakably low fidelity?
8. Are all external titles and descriptions exact and typeset in DM Mono?
