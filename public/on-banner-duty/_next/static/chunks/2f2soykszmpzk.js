(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44044,e=>{"use strict";var t=e.i(43476),a=e.i(18566),r=e.i(22905);let o="#1c1917",n="#c4bbb0",i=["M18 5.5 C25 3.2, 32.5 8, 32 16.5 C33.5 25, 27 33.2, 18 32 C10 33.6, 3.5 27, 5 17.5 C3.2 9.5, 10.5 3.4, 18 5.5","M17.2 4.6 C26 5.4, 32.2 10.5, 33 18 C32.2 26.4, 25.5 33, 17 32.2 C8.8 33.4, 3.6 26.2, 5.2 17.2 C4.2 8.6, 9 3.2, 17.2 4.6","M18.4 5 C26.2 3.6, 33.4 9.2, 32.2 17.4 C33.6 26, 26.4 33.4, 17.6 32.2 C9.2 33.8, 3.2 26.6, 4.8 17 C3.4 9, 10 3.2, 18.4 5","M17.6 5.2 C24.8 3.4, 32 7.6, 32.6 16 C34 24.6, 27.4 32.6, 18.2 32.4 C9.6 33.2, 4 27.4, 4.6 18.2 C3.6 10, 10.2 3.6, 17.6 5.2","M18 4.4 C26.4 4.8, 32.8 10, 32.4 17.8 C33.2 26.2, 26 33.6, 17.4 32.4 C9 33.4, 3.4 26.8, 5 17.4 C3.8 9.2, 9.6 3, 18 4.4","M17.4 5.4 C25.2 3.8, 33 8.8, 32.6 17 C33.8 25.4, 26.8 33, 17.8 32.6 C9.4 33.6, 3.8 26.4, 4.6 17.6 C3.4 9.4, 9.8 3.6, 17.4 5.4"];function s({n:e,tone:a="open",className:r=""}){let l="locked"===a?n:o,c="locked"===a?n:o;return(0,t.jsxs)("span",{className:`relative flex h-9 w-9 shrink-0 items-center justify-center ${r}`,children:[(0,t.jsx)("svg",{viewBox:"0 0 36 36",className:"absolute inset-0 h-full w-full","aria-hidden":"true",children:(0,t.jsx)("path",{d:i[e-1],fill:"current"===a?"#C8FF4A":"#f4f0e8",stroke:l,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,t.jsx)("span",{className:"relative z-10 text-sm font-bold leading-none",style:{color:c},children:e})]})}var l=e.i(68684),c=e.i(99855);let d=[{id:"team",label:"Your team"},{id:"vibe",label:"Your vibe"},{id:"prompt",label:"Your prompts"},{id:"print",label:"You're done"}],m=["M1 8 C16 4, 34 12, 52 7 S78 4, 99 9","M1 7 C18 12, 36 4, 54 9 S80 12, 99 6","M1 9 C20 5, 38 12, 56 7 S82 5, 99 8","M1 6 C14 11, 40 4, 60 9 S84 12, 99 7"];function h(){var e,o;let n=(0,a.usePathname)(),i=(0,a.useRouter)(),{draft:h,update:p}=(0,r.useDraft)(),u=(e=n,o=h.createStep,e.startsWith("/prompt")||e.startsWith("/finalize")?"prompt":e.startsWith("/print")?"print":o),g=d.findIndex(e=>e.id===u),f=h.teamName.trim().length>0&&!(0,c.isProfane)(h.teamName),y=(0,l.hasColor)(h),b=(0,l.isBriefComplete)(h);return(0,t.jsx)("nav",{"aria-label":"Progress",className:"mt-6 min-w-0",children:(0,t.jsx)("ol",{className:"grid w-full grid-cols-4 gap-1 sm:gap-3",children:d.map((e,a)=>{var r,o,c,x,v,T,w;let k=a===g,C=(r=e.id,o=u,c=f,x=y,v=(0,l.hasRoster)(h),T=b,w=h.furthest,r!==o&&("team"===r||("vibe"===r?c&&x&&v:"prompt"===r?T:"print"===w))),N=k?"current":a<g||C?"open":"locked";return(0,t.jsxs)("li",{className:"relative min-w-0",children:[a<d.length-1?(0,t.jsxs)("svg",{viewBox:"0 0 100 16",preserveAspectRatio:"none","aria-hidden":"true",className:"pointer-events-none absolute top-2.5 left-[calc(50%+1.125rem)] z-0 h-4 w-[calc(100%-2rem)] sm:w-[calc(100%-1.5rem)]",children:[(0,t.jsx)("path",{d:m[a],fill:"none",stroke:"#1c1917",strokeWidth:"1.7",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"}),(0,t.jsx)("path",{d:m[(a+2)%m.length],fill:"none",stroke:"#1c1917",strokeWidth:"0.9",strokeLinecap:"round",strokeOpacity:"0.4",vectorEffect:"non-scaling-stroke"})]}):null,(0,t.jsxs)("button",{type:"button",disabled:!C,"aria-current":k?"step":void 0,onClick:()=>(function(e){if("team"===e||"vibe"===e){p({createStep:e}),"/create"!==n&&i.push("/create");return}i.push("prompt"===e?"/prompt":"/print")})(e.id),className:"relative z-10 flex w-full min-w-0 cursor-pointer flex-col items-center gap-1.5 bg-transparent p-0 text-center font-inherit disabled:cursor-default disabled:opacity-100",children:[(0,t.jsx)(s,{n:a+1,tone:N}),(0,t.jsx)("span",{className:`block min-h-8 w-full text-[11px] font-semibold leading-tight sm:min-h-10 sm:text-sm ${"locked"===N?"text-muted":"text-foreground"}`,children:e.label})]})]},e.id)})})})}var p=e.i(45910);e.s(["FlowShell",0,function({children:e,footer:a}){let r="max-w-3xl";return(0,t.jsxs)("div",{className:`mx-auto flex w-full ${r} flex-col px-5 pt-6 ${a?"pb-56":"pb-16"}`,children:[(0,t.jsx)(p.Mark,{}),(0,t.jsx)(h,{}),(0,t.jsx)("div",{className:"mt-8",children:e}),a?(0,t.jsx)("div",{className:"fixed inset-x-0 bottom-0 z-20 border-t border-line bg-background/95 backdrop-blur",children:(0,t.jsx)("div",{className:`mx-auto flex w-full ${r} flex-col gap-3 px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]`,children:a})}):null]})}],44044)},65073,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(18566);let o=[1,2,3];function n({value:e,onChange:a}){return(0,t.jsx)("fieldset",{"aria-label":"Select concept",children:(0,t.jsx)("div",{className:"flex gap-2",children:o.map(r=>{let o=e===r;return(0,t.jsx)("button",{type:"button","aria-pressed":o,onClick:()=>a(r),className:`inline-flex h-12 w-12 items-center justify-center border-2 text-base font-semibold ${o?"border-foreground bg-foreground text-white":"border-foreground bg-card text-foreground"}`,children:r},r)})})})}var i=e.i(22905),s=e.i(44044),l=e.i(45910);async function c(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}var d=e.i(6999),m=e.i(68684),h=e.i(44283);function p({text:e,copyLabel:a,onCopy:r,compact:o=!1}){return(0,t.jsxs)("div",{className:"relative mt-4",children:[(0,t.jsx)("pre",{className:`${o?"max-h-16":"max-h-32"} overflow-auto rounded-2xl border border-line bg-card p-4 pr-14 text-sm leading-6 whitespace-pre-wrap text-foreground`,children:e}),(0,t.jsx)("button",{type:"button","aria-label":a,onClick:r,className:"absolute top-2 right-2 flex h-11 w-11 items-center justify-center text-foreground",children:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",className:"h-5 w-5","aria-hidden":"true",children:[(0,t.jsx)("rect",{x:"8",y:"8",width:"11",height:"11",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),(0,t.jsx)("path",{d:"M6 15.5V6.2C6 5.5 6.5 5 7.2 5H15",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})})]})}e.s(["PromptScreen",0,function(){let e,o,u,g,f,y,{draft:b,update:x}=(0,i.useDraft)(),v=(0,r.useRouter)(),[T,w]=(0,a.useState)(null);(0,a.useEffect)(()=>{if(!T)return;let e=window.setTimeout(()=>w(null),4500);return()=>window.clearTimeout(e)},[T]),(0,i.useAdvance)("prompt");let k=(e=b.teamName.trim(),u=(o=(0,h.vibesByIds)(b.vibes)).length?o.map(e=>`- ${e.label} — ${e.communicates}`).join("\n"):"not specified",g=b.notes.trim(),f=(0,d.secondaryColorDirection)(b)||"none",y="boys"===b.roster||"girls"===b.roster?b.roster:"not specified",`# CREATE A NEW IMAGE FROM SCRATCH

This is a TEXT-TO-IMAGE generation request.

Do not edit, transform, or reference an existing image.
Do not request a reference image, upload, blank canvas, template, or previous concept.

Generate ONE brand-new image containing THREE distinctly different concept explorations shown side by side.

---

# ROLE

You are an experienced sports brand designer and illustrator creating concept art for a real youth soccer team banner that will hang on the sideline.

Think like a creative director, not a logo generator.

The banner must read clearly:

- from across a soccer field
- in bright daylight
- in a phone photo
- amid the visual noise of a real game

The result should feel like a real youth club identity:

- confident
- original
- memorable
- age-appropriate
- specific to this team
- intentionally designed

It should feel DESIGNED, not GENERATED.

Do NOT make it feel like:

- a party decoration
- a generic sports template
- a stock mascot logo
- an esports logo
- AI-generated sports art
- a copy of a professional sports league identity

---

# TEAM

Team name: ${e}

Roster context: ${y}

Use roster information only as context for the design.

Do not add a gender word to the banner unless it is already part of the team name or explicitly requested.

Primary team color: ${(0,d.colorDirection)(b)}

Secondary team color: ${f}

Vibe:
${u}
${g?`
Optional parent direction:
${g}
`:""}
${function(e){let t=(0,m.playerNameCount)(e.playerNames);if(!e.includeNames||0===t||t>m.PLAYER_NAME_LIMIT)return"Do not add individual player names.\nThe team name is the only required wording.";let a=(0,m.parsedPlayerNames)(e.playerNames),r=Math.ceil(a.length/2),o=a.slice(0,r),n=a.slice(r);return["Include these player names on every concept, in this order, spelled exactly:",a.map((e,t)=>`${t+1}. ${e}`).join("\n"),"Do not add, drop, nickname, abbreviate, or reorder a name.\nThe team name stays the hero. It must read from across the field.\nPlayer names are clearly smaller supporting type. They must still be readable. Do not shrink them into decoration.\nGive every name comfortable margin. Do not let a name collide with the mascot, the team name, or the banner edge.\nThe three concepts must use three different name arrangements:",`1. Team name centered. Names on the left: ${o.join(", ")}. Names on the right: ${n.join(", ")||"none"}.`,"2. Team name on the left. Stack every player name on the right.\n3. Team name large across the top. Set the player names in a compact band underneath."].join("\n")}(b)}

---

# ASSIGNMENT

Create THREE distinctly different visual identities for this youth soccer team.

Each identity will be applied to a horizontal 5:3 soccer banner.

These are CONCEPT EXPLORATIONS ONLY.

Do not prepare a final print file.
Do not present the artwork as production-ready.

Design THREE identities — not three variations of one design.

Imagine three talented designers were independently given the same brief.

Their solutions should feel genuinely different in:

- creative idea
- typography
- composition
- illustration style
- visual references
- graphic language
- level of restraint
- overall personality

Do not simply change:

- the mascot pose
- the font
- the background
- decorative effects

The underlying idea must change.

---

# THINK SPECIFICALLY ABOUT THIS TEAM

Before designing, consider the actual:

- team name
- team colors
- selected vibes
- roster context
- parent direction

Ask internally:

What makes THIS team visually interesting?

What is the obvious interpretation?

What are two less-obvious interpretations?

What visual ideas could come from:

- the meaning of the team name
- movement
- behavior
- silhouette
- pattern
- texture
- symbolism
- habitat
- objects
- word associations
- visual metaphor
- personality
- cultural or historical references
- typography itself

Do not automatically choose the most literal interpretation.

For example, a team named after an animal does not automatically require a large illustrated animal mascot.

The name could instead inspire:

- movement
- pattern
- typography
- silhouette
- behavior
- environment
- symbolism
- wordplay
- an abstract graphic device

At least ONE of the three concepts must take a less-obvious interpretation of the team name or vibe.

The unexpected idea should still feel clear, intentional, kid-appropriate, and traceable back to the brief.

---

# CHOOSE THREE CREATIVE STRATEGIES

Before rendering, silently choose THREE distinctly different identity strategies that best fit THIS team.

Possible strategies include:

- character-led
- typography-led
- illustration-led
- symbol-led
- pattern-led
- object-led
- hand-lettered
- scene-led
- badge-led
- abstract graphic
- heritage / archival
- editorial
- folk / handmade
- experimental typography
- graphic storytelling
- photographic-inspired graphic treatment
- printmaking
- signage-inspired
- patch-inspired

These are possibilities, NOT required categories.

Do NOT automatically choose the same three strategies every time.

Do NOT automatically create:

1. mascot logo
2. crest
3. action illustration

A mascot is NOT required.

A crest is NOT required.

A soccer ball is NOT required in every concept.

Choose the three approaches that create the strongest and most distinct interpretations of THIS team.

---

# CHOOSE THREE DIFFERENT VISUAL WORLDS

Silently pair each concept with a different visual tradition or art-direction family.

Possible territories include:

- heritage athletic
- modern independent club
- hand-painted signage
- 90s sports graphics
- 70s rec league
- editorial poster
- comic illustration
- embroidered patch
- surf / skate
- minimal graphic
- storybook illustration
- street-sport
- folk / handmade
- printmaking
- vintage sporting goods
- archival community sports
- playful contemporary illustration
- experimental typography
- children's publishing
- vernacular signage
- modernist poster design
- screen-printed apparel
- local club ephemera

These are inspiration territories, not templates.

Choose directions based on the specific team.

Do not select the same visual worlds every time.

Avoid relying on cinematic rendering or visual effects as a substitute for a strong graphic idea.

---

# AUTHENTICITY + HUMAN CRAFT

The artwork should feel intentionally created by a real graphic designer or illustrator.

Favor AUTHORED DESIGN over visual spectacle.

Look toward the authenticity of:

- independent sports branding
- vintage youth and rec-league graphics
- screen-printed team apparel
- hand-painted athletic signage
- editorial illustration
- old sporting-goods graphics
- patches and embroidered ephemera
- skate and surf graphics
- community club identities
- handmade printmaking
- children's book illustration
- locally designed team merchandise

When appropriate, allow evidence of human craft:

- imperfect linework
- irregular shapes
- slightly uneven lettering
- hand-drawn marks
- simplified forms
- natural asymmetry
- restrained ink texture
- print texture
- imperfect registration
- screen-print character
- unusual cropping
- charming illustration quirks

These qualities should feel intentional, not messy.

Do not make every surface perfectly polished.

A simpler, more opinionated graphic idea is better than an impressive but generic rendering.

---

# AVOID THE "AI SPORTS ART" LOOK

Avoid:

- glossy 3D mascots
- hyper-detailed fur
- hyper-detailed feathers
- hyper-detailed scales
- exaggerated muscles
- dramatic rim lighting
- excessive glow
- smoke
- sparks
- lightning
- flames used only for drama
- energy trails
- lens flare
- arbitrary particles
- unnecessary depth effects
- overly smooth gradients
- fake metallic treatments
- chrome
- excessive highlights
- excessive shadows
- hyper-rendered environments
- symmetrical esports-logo compositions
- generic aggressive mascot poses
- fake intensity
- cinematic effects added merely to make the design feel "epic"

Do not confuse more rendering with better design.

The result should feel plausible as something a talented independent designer could actually have made for a real neighborhood youth soccer team.

---

# DIVERSITY RULE

The three concepts must differ substantially.

Each concept must differ from the other two in at least FOUR of these SIX dimensions:

1. typography family
2. fundamental composition
3. illustration or mascot treatment
4. graphic language
5. background treatment
6. era / visual tradition

No two concepts may use the same fundamental composition.

If two concepts would still look essentially the same after swapping:

- the colors
- the mascot
- the team name

then redesign one.

Also vary:

- visual density
- focal scale
- negative space
- symmetry vs. asymmetry
- illustration-to-type ratio

Do not make all three concepts equally busy.

One may be minimal.
One may be expressive.
One may be more illustrative.

The specific combination should be chosen based on the team.

---

# TYPOGRAPHY

Typography is a major part of the identity.

Do not automatically default to:

- varsity block
- condensed italic sports type
- brush script

Across the three concepts, use THREE meaningfully different typographic personalities.

Possible approaches include:

- rounded grotesk
- compressed slab
- hand-painted sign lettering
- geometric sans
- retro bubble lettering
- custom angular display lettering
- oversized editorial typography
- stitched or patch-inspired lettering
- playful hand-drawn lettering
- irregular vernacular lettering
- chunky 70s display type
- understated modern typography
- serif display lettering
- monospaced or technical lettering
- custom modular lettering

Treat the team name as a custom wordmark whenever appropriate.

The lettering should feel owned by this team rather than typed into a generic sports font.

---

# BRAND RULES

The TEAM NAME is the hero.

Prioritize readability from across a soccer field.

Spell the team name exactly:

${e}

You may change capitalization when appropriate, but every word must remain correct.

Use the primary team color as the dominant color.

Use the secondary color only as a supporting color.

Black, white, cream, gray, or other appropriate neutrals may be used.

Do not invent unrelated team colors.

If the team name suggests a mascot, character, object, or visual motif, interpret it originally.

Do not reproduce or strongly resemble copyrighted or trademarked characters.

---

# CHARACTERS + MASCOTS

If a character or mascot is appropriate to a chosen concept, it should feel:

- confident
- energetic
- age-appropriate
- memorable
- easy for kids to love
- specific to this identity

It does NOT need to look aggressive.

Avoid generic:

- roaring
- snarling
- flexing
- charging-at-camera
- clenched-fist
- "extreme sports mascot"

poses unless there is a strong conceptual reason.

Personality is more valuable than aggression.

Never make the character:

- frightening
- violent
- sexualized
- adult

---

# SOCCER

Soccer should appear naturally when it strengthens the identity.

Possible cues include:

- soccer ball
- pitch markings
- goal geometry
- movement
- jersey details
- field geometry
- match-day ephemera
- scorecard references
- pennants
- sideline markings
- stitching
- formation diagrams

Do not force soccer imagery into every concept.

The TEAM IDENTITY should lead.

Soccer is the context, not the entire concept.

---

# CRAFT

Each concept should have:

- one clear focal idea
- a strong silhouette
- strong contrast
- a limited palette
- intentional hierarchy
- comfortable safe space around important elements
- readable typography
- a memorable visual hook

Avoid:

- muddy textures
- overly busy backgrounds
- tiny decorative details
- clip art
- generic stock mascot poses
- duplicated visual motifs
- unnecessary shields
- unnecessary crests
- meaningless stars
- meaningless flames
- decorative elements with no conceptual purpose

Every element should earn its place.

---

# SPECIFICITY TEST

Before finalizing EACH concept, ask internally:

"Could this exact design easily be reused for ten unrelated youth teams simply by changing the mascot, name, and color?"

If YES, the concept is too generic.

Make the idea more specific to this team's:

- name
- personality
- selected vibes
- color
- visual story

Each concept should contain at least ONE memorable design decision that feels particular to this team.

---

# SURPRISE TEST

At least one concept should create a small moment of:

"I wouldn't have thought of that — but it makes sense."

Unexpected does NOT mean random.

The idea should be traceable back to the team's:

- name
- personality
- vibe
- visual story

Do not add strange elements simply to make a concept different.

---

# FINAL CREATIVE-DIRECTOR CHECK

Before rendering, inspect the three concepts as a set.

Confirm:

- all three typography styles are meaningfully different
- no two concepts use the same fundamental composition
- illustration styles are meaningfully different
- graphic languages are meaningfully different
- no two concepts rely on the same sports-logo formula
- at least one concept challenges the obvious interpretation
- none feels like a generic template with the team name swapped in
- the primary team color remains dominant
- the team name is spelled correctly
- important elements have comfortable safe margins
- hands, paws, limbs, anatomy, and soccer-ball geometry are correct where relevant
- the banners remain readable from a distance

Then imagine all three concepts converted into simple black-and-white silhouettes with the team names removed.

If they still feel structurally similar, REDESIGN the weakest concept.

Finally ask:

"Do these look like three ideas from three different designers, or three outputs from the same generator?"

If they feel like outputs from the same visual system, increase the differences before rendering.

---

# OUTPUT

Generate ONE new comparison image.

Draw all THREE concepts side by side in that ONE image so they can be easily compared.

Each concept must appear as its own complete horizontal 5:3 banner.

Show the FLAT ARTWORK ITSELF.

Do NOT:

- place it on a fence
- hang it on a wall
- put it in a stadium
- add grommets
- photograph it as a physical banner
- present it as merchandise
- show people holding it
- show a print-production mockup

Use simple neutral spacing between concepts so each banner is easy to evaluate.

Do not add concept labels unless necessary.

These are concept explorations only.

Do not claim they are:

- production-resolution
- print-ready
- final artwork

Generate the three concepts now.`),C=function(e){var t;let a,r,o=e.teamName.trim();return[1===e.concept||2===e.concept||3===e.concept?(t=e.concept,`The previous image shows three banner concepts.
They may sit side by side, or they may be stacked from top to bottom.
Use concept ${t} only, ${1===t?"the left one when the three sit in a row, or the top one when they are stacked":2===t?"the center one when the three sit in a row, or the middle one when they are stacked":"the right one when the three sit in a row, or the bottom one when they are stacked"}.
Do not use the other two concepts.
That selected concept is the approved design.`):"Use this exact approved banner design as the basis for the final artwork.","Do not redesign the concept or introduce a new creative direction.",[`Team name, spelled exactly: ${o}`,function(e){if("boys"!==e.roster&&"girls"!==e.roster)return"";let t="boys"===e.roster?"boys":"girls";return`This is a ${t} youth soccer team.
Use this only as context for the image.
Do not add a gender word to the banner unless it is already part of the team name.`}(e),function(e){let t=(0,m.playerNameCount)(e.playerNames);if(!e.includeNames||0===t||t>m.PLAYER_NAME_LIMIT)return"Do not introduce individual player names.";let a=(0,m.parsedPlayerNames)(e.playerNames);return`Keep the approved arrangement of the player names.
Spell every player name exactly, in this order: ${a.join(", ")}.
Do not add or remove a name.`}(e),(a=[`Primary team color: ${(0,d.colorDirection)(e)}`],(r=(0,d.secondaryColorDirection)(e))&&a.push(`Secondary team color: ${r}`),a.join("\n")),!e.secondaryColorId?"The team color is dominant. Support it with black, white, or a neutral. Do not invent a second team color.":"The primary color is dominant. Use the secondary color as a clear supporting hit in the mascot, lettering, or a stripe. Neutrals can do the rest. Do not add extra team colors."].filter(Boolean).join("\n"),"Prepare the artwork for a horizontal 5 ft × 3 ft soccer banner.","Final aspect ratio: 5:3","Keep the team name highly legible and preserve the approved colors, mascot, composition, typography, and overall visual direction.","Ensure important text and mascot details have comfortable safe margins from the edges.",(0,m.isLongName)(o)?"The team name is long. Keep the condensed athletic typography and the 2–3 line break from the approved design.":"","Generate the highest-quality master artwork you can. This master is the approved design at the best resolution you can produce. Do not claim the image file itself is already 6000 × 3600 pixels.","The final production target, handled as a separate print file, is a 6000 × 3600 px PNG. That size is about 100 PPI at 60 × 36 inches.","Before considering the artwork final, check for common image errors: malformed hands, paws, claws, or limbs; duplicated elements; broken soccer-ball geometry; and misspelled typography. The team name must match the spelling above."].filter(Boolean).join("\n\n")}(b),N=1===b.concept||2===b.concept||3===b.concept,E=[b.teamName.trim(),(0,d.colorLabel)(b),(0,h.vibesByIds)(b.vibes).map(e=>e.label).join(", ")].filter(Boolean).join(" · ");function j(e){e&&window.open(`https://chatgpt.com/?q=${encodeURIComponent(k)}`,"_blank","noopener,noreferrer"),c(k).then(t=>{e?w({text:t?"ChatGPT is opening with your brief filled in. A copy is on your clipboard too.":"ChatGPT is opening with your brief filled in.",at:Date.now()}):w({text:t?"Copied.":"Select the brief below and copy it.",at:Date.now()})})}async function S(){if(!N)return;let e=await c(C);x(e=>({furthest:(0,m.furtherStep)(e.furthest,"finalize")})),w({text:e?"Copied. Paste it into the same ChatGPT chat.":"Select the prompt above and copy it, then paste it into the same chat.",at:Date.now()})}return(0,t.jsxs)(s.FlowShell,{children:[(0,t.jsx)("h1",{className:"font-display text-3xl leading-tight tracking-tight min-[380px]:text-4xl",children:"Make it in ChatGPT"}),(0,t.jsx)("p",{className:"mt-3 text-lg leading-7 text-muted",children:"Same chat, in this order."}),(0,t.jsx)("p",{className:"mt-4 text-sm font-semibold text-foreground",children:E}),(0,t.jsxs)("ol",{className:"mt-10 flex flex-col gap-12",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("h2",{className:"font-sans text-2xl font-semibold leading-tight",children:"1. Copy prompt to generate"}),(0,t.jsx)("p",{className:"mt-2 text-lg leading-7 text-muted",children:"This asks for three different banners."}),(0,t.jsx)(p,{text:k,copyLabel:"Copy prompt to generate",compact:!0,onCopy:()=>j(!1)}),(0,t.jsx)("button",{type:"button",className:`${l.primaryClass} mt-4`,onClick:()=>void j(!0),children:"Copy prompt & open ChatGPT"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("h2",{className:"font-sans text-2xl font-semibold leading-tight",children:"2. Select concept"}),(0,t.jsx)("p",{className:"mt-2 text-lg leading-7 text-muted",children:"When the three banners show up, pick the one to print."}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(n,{value:b.concept,onChange:function(e){x({concept:e})}})})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("h2",{className:"font-sans text-2xl font-semibold leading-tight",children:"3. Copy prompt to finalize"}),(0,t.jsx)("p",{className:"mt-2 text-lg leading-7 text-muted",children:"Paste this into the same chat. This preps your selected content to be a 5x3ft print ready PNG."}),N?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p,{text:C,copyLabel:"Copy prompt to finalize",compact:!0,onCopy:()=>void S()}),(0,t.jsx)("button",{type:"button",className:`${l.primaryClass} mt-4`,onClick:()=>void S(),children:"Copy prompt to finalize"})]}):(0,t.jsx)("p",{className:"mt-4 text-base text-muted",children:"Pick 1, 2, or 3 first."})]})]}),(0,t.jsx)("p",{className:"mt-12 text-lg leading-7 text-muted",children:"My banner is ready. I've checked the name, color, mascot, and edges."}),(0,t.jsx)("button",{type:"button",className:`${l.primaryClass} mt-4`,onClick:()=>{x(e=>({furthest:(0,m.furtherStep)(e.furthest,"print")})),v.push("/print")},children:"Show me where to print"}),T?(0,t.jsx)("p",{role:"status",className:"fixed top-5 left-1/2 z-50 w-[min(22rem,calc(100%-2.5rem))] -translate-x-1/2 bg-[#141210] px-4 py-3 text-center text-sm font-semibold text-[#C8FF4A] md:top-auto md:right-6 md:bottom-6 md:left-auto md:translate-x-0 md:text-left",children:T.text}):null]})}],65073)},25917,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(18566),o=e.i(22905),n=e.i(45910),i=e.i(68684);e.s(["RequireBrief",0,function({children:e}){let{draft:s,ready:l}=(0,o.useDraft)(),c=(0,r.useRouter)(),d=(0,i.isBriefComplete)(s);return((0,a.useEffect)(()=>{l&&(d||c.replace("/create"))},[d,l,c]),l&&d)?e:(0,t.jsx)(n.Loading,{})}])},18566,(e,t,a)=>{t.exports=e.r(76562)}]);