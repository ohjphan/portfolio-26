# Storyboard Mode Guide

## Contents

- [Narrative arcs](#narrative-arcs)
- [Panel writing](#panel-writing)
- [Visual grammar](#visual-grammar)
- [Image-generation prompt](#image-generation-prompt)
- [Human-centered standards](#human-centered-standards)
- [Quality rubric](#quality-rubric)

## Narrative arcs

Select one fitting arc instead of combining them mechanically. Default to 6–8 panels, using fewer only when a simple story is complete with fewer beats.

### Problem or current state

1. Establish the person, context, and goal.
2. Show the triggering need.
3. Reveal the primary friction.
4. Show how the friction compounds.
5. Show the human or organizational consequence.
6. End with the unmet need or opportunity.

Do not introduce a solution unless the user asks for one.

### Concept or future state

1. Establish the person and goal.
2. Show the existing challenge.
3. Introduce the intervention.
4. Show the pivotal interaction.
5. Demonstrate a credible improvement.
6. End with meaningful impact or a clear next possibility.

Do not portray the product as magic. Show the action or decision that produces the improvement.

### Before and after

Use mirrored scenes to make change visible: the same person, goal, and context with a different process and outcome. Spend enough panels on the before state to make the change meaningful.

### Workflow or use case

1. Starting condition.
2. First important action.
3. System or team response.
4. Decision, handoff, or pivotal moment.
5. Completed task.
6. Outcome.

## Panel writing

Use sentence-case titles of roughly 3–7 words and one-sentence descriptions of roughly 12–25 words. Preserve proper nouns and approved terminology.

Write titles as story beats or insights:

- Searching across too many tools
- The data still does not align
- Finding the signal that matters
- A clear next step emerges

Avoid generic labels such as “User searches,” “Panel three,” “Using the product,” or “The solution.”

Make descriptions add context, consequence, or significance that the picture alone cannot show. Use direct language and active voice. Do not invent quotes, metrics, reactions, or promotional claims.

## Visual grammar

- Use expressive graphite pencil and fine ink.
- Show realistic but simplified people with loose construction lines.
- Use white or very light gray backgrounds and soft gray panel borders.
- Show grayscale UI wireframes and work artifacts only when they clarify the experience.
- Use one restrained yellow highlight per panel when emphasis is helpful.
- Keep the protagonist, clothing, environment, and interface language consistent.
- Show posture, gaze, hands, and facial expression without melodrama.
- Vary close, medium, and environmental framing when it helps the sequence.

Avoid photorealism, polished production UI, saturated color, corporate clip art, heavy shading, decorative clutter, comic-book spectacle, dense embedded copy, watermarks, and illegible pseudo-text.

## Image-generation prompt

Adapt this scaffold to the approved panel plan:

```text
Use case: illustration-story
Asset type: landscape product storyboard
Primary request: Create a cohesive <panel count>-panel storyboard communicating <central message>.
Story beats:
1. <visible action and context>
2. <visible action and context>
...
Subject continuity: Keep <protagonist description> recognizably consistent, including face, hair, clothing, age, and proportions.
Style and medium: expressive graphite pencil and fine ink; realistic but simplified human figures; loose construction lines; grayscale low-fidelity UI and work artifacts.
Composition: equal landscape panels in a left-to-right sequence; one focal action per panel; generous whitespace.
Color: white, graphite gray, soft gray, black, and restrained yellow emphasis.
Text: Do not render external panel titles, descriptions, or paragraph copy. Only brief interface labels or annotations essential to the scene.
Avoid: photorealism, polished marketing art, saturated color, dense text, generic stock scenes, caricature, clutter, decorative icons, and redundant panels.
```

Generate the caption-free strip. Add the exact titles and descriptions afterward with `scripts/compose_visual.py --placement below`.

## Human-centered standards

- Center the person’s goal, behavior, decision, and consequences rather than the product.
- Make the user’s change visible rather than ending on a generic success pose.
- Show credible effects on time, confidence, access, workload, collaboration, or outcomes.
- Represent people inclusively and respectfully without stereotypes or caricatures.
- Use fictional names and non-sensitive data unless the user supplies approved content.
- Avoid implying that automation eliminates human judgment when the scenario depends on it.
- Make improved outcomes proportional to the intervention shown.

## Quality rubric

1. Can a viewer identify the protagonist and goal within the first panel?
2. Does every panel add a distinct beat?
3. Can the sequence be understood before reading captions?
4. Do captions explain significance rather than narrate the obvious?
5. Are UI, documents, and data simple enough to scan?
6. Are character identity and visual rules consistent?
7. Is the outcome or unmet need credible and clear?
8. Would the storyboard remain legible on a presentation slide?
9. Is the story respectful, non-stereotypical, and free of sensitive information?
10. Are all external titles and descriptions exact and typeset in DM Mono?
