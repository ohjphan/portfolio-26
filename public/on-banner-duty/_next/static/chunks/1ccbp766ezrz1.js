(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44044,e=>{"use strict";var t=e.i(43476),r=e.i(18566),n=e.i(22905);let a="#1c1917",o="#c4bbb0",i=["M18 5.5 C25 3.2, 32.5 8, 32 16.5 C33.5 25, 27 33.2, 18 32 C10 33.6, 3.5 27, 5 17.5 C3.2 9.5, 10.5 3.4, 18 5.5","M17.2 4.6 C26 5.4, 32.2 10.5, 33 18 C32.2 26.4, 25.5 33, 17 32.2 C8.8 33.4, 3.6 26.2, 5.2 17.2 C4.2 8.6, 9 3.2, 17.2 4.6","M18.4 5 C26.2 3.6, 33.4 9.2, 32.2 17.4 C33.6 26, 26.4 33.4, 17.6 32.2 C9.2 33.8, 3.2 26.6, 4.8 17 C3.4 9, 10 3.2, 18.4 5","M17.6 5.2 C24.8 3.4, 32 7.6, 32.6 16 C34 24.6, 27.4 32.6, 18.2 32.4 C9.6 33.2, 4 27.4, 4.6 18.2 C3.6 10, 10.2 3.6, 17.6 5.2","M18 4.4 C26.4 4.8, 32.8 10, 32.4 17.8 C33.2 26.2, 26 33.6, 17.4 32.4 C9 33.4, 3.4 26.8, 5 17.4 C3.8 9.2, 9.6 3, 18 4.4","M17.4 5.4 C25.2 3.8, 33 8.8, 32.6 17 C33.8 25.4, 26.8 33, 17.8 32.6 C9.4 33.6, 3.8 26.4, 4.6 17.6 C3.4 9.4, 9.8 3.6, 17.4 5.4"];function s({n:e,tone:r="open",className:n=""}){let l="locked"===r?o:a,c="locked"===r?o:a;return(0,t.jsxs)("span",{className:`relative flex h-9 w-9 shrink-0 items-center justify-center ${n}`,children:[(0,t.jsx)("svg",{viewBox:"0 0 36 36",className:"absolute inset-0 h-full w-full","aria-hidden":"true",children:(0,t.jsx)("path",{d:i[e-1],fill:"current"===r?"#C8FF4A":"#f4f0e8",stroke:l,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,t.jsx)("span",{className:"relative z-10 text-sm font-bold leading-none",style:{color:c},children:e})]})}var l=e.i(68684),c=e.i(99855);let d=[{id:"team",label:"Your team"},{id:"vibe",label:"Your vibe"},{id:"prompt",label:"Your prompts"},{id:"print",label:"You're done"}],u=["M1 8 C16 4, 34 12, 52 7 S78 4, 99 9","M1 7 C18 12, 36 4, 54 9 S80 12, 99 6","M1 9 C20 5, 38 12, 56 7 S82 5, 99 8","M1 6 C14 11, 40 4, 60 9 S84 12, 99 7"];function p(){var e,a;let o=(0,r.usePathname)(),i=(0,r.useRouter)(),{draft:p,update:h}=(0,n.useDraft)(),m=(e=o,a=p.createStep,e.startsWith("/prompt")||e.startsWith("/finalize")?"prompt":e.startsWith("/print")?"print":a),f=d.findIndex(e=>e.id===m),g=p.teamName.trim().length>0&&!(0,c.isProfane)(p.teamName),y=(0,l.hasColor)(p),b=(0,l.isBriefComplete)(p);return(0,t.jsx)("nav",{"aria-label":"Progress",className:"mt-6 min-w-0",children:(0,t.jsx)("ol",{className:"grid w-full grid-cols-4 gap-1 sm:gap-3",children:d.map((e,r)=>{var n,a,c,x,v,w,k;let T=r===f,C=(n=e.id,a=m,c=g,x=y,v=(0,l.hasRoster)(p),w=b,k=p.furthest,n!==a&&("team"===n||("vibe"===n?c&&x&&v:"prompt"===n?w:"print"===k))),E=T?"current":r<f||C?"open":"locked";return(0,t.jsxs)("li",{className:"relative min-w-0",children:[r<d.length-1?(0,t.jsxs)("svg",{viewBox:"0 0 100 16",preserveAspectRatio:"none","aria-hidden":"true",className:"pointer-events-none absolute top-2.5 left-[calc(50%+1.125rem)] z-0 h-4 w-[calc(100%-2rem)] sm:w-[calc(100%-1.5rem)]",children:[(0,t.jsx)("path",{d:u[r],fill:"none",stroke:"#1c1917",strokeWidth:"1.7",strokeLinecap:"round",vectorEffect:"non-scaling-stroke"}),(0,t.jsx)("path",{d:u[(r+2)%u.length],fill:"none",stroke:"#1c1917",strokeWidth:"0.9",strokeLinecap:"round",strokeOpacity:"0.4",vectorEffect:"non-scaling-stroke"})]}):null,(0,t.jsxs)("button",{type:"button",disabled:!C,"aria-current":T?"step":void 0,onClick:()=>(function(e){if("team"===e||"vibe"===e){h({createStep:e}),"/create"!==o&&i.push("/create");return}i.push("prompt"===e?"/prompt":"/print")})(e.id),className:"relative z-10 flex w-full min-w-0 cursor-pointer flex-col items-center gap-1.5 bg-transparent p-0 text-center font-inherit disabled:cursor-default disabled:opacity-100",children:[(0,t.jsx)(s,{n:r+1,tone:E}),(0,t.jsx)("span",{className:`block min-h-8 w-full text-[11px] font-semibold leading-tight sm:min-h-10 sm:text-sm ${"locked"===E?"text-muted":"text-foreground"}`,children:e.label})]})]},e.id)})})})}var h=e.i(45910);e.s(["FlowShell",0,function({children:e,footer:r}){let n="max-w-3xl";return(0,t.jsxs)("div",{className:`mx-auto flex w-full ${n} flex-col px-5 pt-6 ${r?"pb-56":"pb-16"}`,children:[(0,t.jsx)(h.Mark,{}),(0,t.jsx)(p,{}),(0,t.jsx)("div",{className:"mt-8",children:e}),r?(0,t.jsx)("div",{className:"fixed inset-x-0 bottom-0 z-20 border-t border-line bg-background/95 backdrop-blur",children:(0,t.jsx)("div",{className:`mx-auto flex w-full ${n} flex-col gap-3 px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]`,children:r})}):null]})}],44044)},65073,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(18566);let a=[1,2,3];function o({value:e,onChange:r}){return(0,t.jsx)("fieldset",{"aria-label":"Select concept",children:(0,t.jsx)("div",{className:"flex gap-2",children:a.map(n=>{let a=e===n;return(0,t.jsx)("button",{type:"button","aria-pressed":a,onClick:()=>r(n),className:`inline-flex h-12 w-12 items-center justify-center border-2 text-base font-semibold ${a?"border-foreground bg-foreground text-white":"border-foreground bg-card text-foreground"}`,children:n},n)})})})}var i=e.i(22905),s=e.i(44044),l=e.i(45910);async function c(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}var d=e.i(6999),u=e.i(68684),p=e.i(44283);function h({text:e,copyLabel:r,onCopy:n,compact:a=!1}){return(0,t.jsxs)("div",{className:"relative mt-4",children:[(0,t.jsx)("pre",{className:`${a?"max-h-16":"max-h-32"} overflow-auto rounded-2xl border border-line bg-card p-4 pr-14 text-sm leading-6 whitespace-pre-wrap text-foreground`,children:e}),(0,t.jsx)("button",{type:"button","aria-label":r,onClick:n,className:"absolute top-2 right-2 flex h-11 w-11 items-center justify-center text-foreground",children:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",className:"h-5 w-5","aria-hidden":"true",children:[(0,t.jsx)("rect",{x:"8",y:"8",width:"11",height:"11",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),(0,t.jsx)("path",{d:"M6 15.5V6.2C6 5.5 6.5 5 7.2 5H15",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})})]})}e.s(["PromptScreen",0,function(){let e,a,m,f,g,y,{draft:b,update:x}=(0,i.useDraft)(),v=(0,n.useRouter)(),[w,k]=(0,r.useState)(null);(0,r.useEffect)(()=>{if(!w)return;let e=window.setTimeout(()=>k(null),4500);return()=>window.clearTimeout(e)},[w]),(0,i.useAdvance)("prompt");let T=(e=b.teamName.trim(),m=(a=(0,p.vibesByIds)(b.vibes)).length?a.map(e=>`- ${e.label} — ${e.communicates}`).join("\n"):"not specified",f=b.notes.trim(),g=(0,d.secondaryColorDirection)(b)||"none",y="boys"===b.roster||"girls"===b.roster?b.roster:"not specified",`# CREATE A NEW IMAGE FROM SCRATCH

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

Secondary team color: ${g}

Vibe:
${m}
${f?`
Optional parent direction:
${f}
`:""}
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

Generate the three concepts now.`),C=function(e){var t;let r,n,a=e.teamName.trim();return[1===e.concept||2===e.concept||3===e.concept?(t=e.concept,`The previous image shows three banner concepts.
They may sit side by side, or they may be stacked from top to bottom.
Use concept ${t} only, ${1===t?"the left one when the three sit in a row, or the top one when they are stacked":2===t?"the center one when the three sit in a row, or the middle one when they are stacked":"the right one when the three sit in a row, or the bottom one when they are stacked"}.
Do not use the other two concepts.
That selected concept is the approved design.`):"Use this exact approved banner design as the basis for the final artwork.","Do not redesign the concept or introduce a new creative direction.",[`Team name, spelled exactly: ${a}`,function(e){if("boys"!==e.roster&&"girls"!==e.roster)return"";let t="boys"===e.roster?"boys":"girls";return`This is a ${t} youth soccer team.
Use this only as context for the image.
Do not add a gender word to the banner unless it is already part of the team name.`}(e),(r=[`Primary team color: ${(0,d.colorDirection)(e)}`],(n=(0,d.secondaryColorDirection)(e))&&r.push(`Secondary team color: ${n}`),r.join("\n")),!e.secondaryColorId?"The team color is dominant. Support it with black, white, or a neutral. Do not invent a second team color.":"The primary color is dominant. Use the secondary color as a clear supporting hit in the mascot, lettering, or a stripe. Neutrals can do the rest. Do not add extra team colors."].filter(Boolean).join("\n"),"Prepare the artwork for a horizontal 5 ft × 3 ft soccer banner.","Final aspect ratio: 5:3","Keep the team name highly legible and preserve the approved colors, mascot, composition, typography, and overall visual direction.","Ensure important text and mascot details have comfortable safe margins from the edges.",(0,u.isLongName)(a)?"The team name is long. Keep the condensed athletic typography and the 2–3 line break from the approved design.":"","Generate the highest-quality master artwork you can. This master is the approved design at the best resolution you can produce. Do not claim the image file itself is already 6000 × 3600 pixels.","The final production target, handled as a separate print file, is a 6000 × 3600 px PNG. That size is about 100 PPI at 60 × 36 inches.","Before considering the artwork final, check for common image errors: malformed hands, paws, claws, or limbs; duplicated elements; broken soccer-ball geometry; and misspelled typography. The team name must match the spelling above."].filter(Boolean).join("\n\n")}(b),E=1===b.concept||2===b.concept||3===b.concept,j=[b.teamName.trim(),(0,d.colorLabel)(b),(0,p.vibesByIds)(b.vibes).map(e=>e.label).join(", ")].filter(Boolean).join(" · ");function N(e){e&&window.open(`https://chatgpt.com/?q=${encodeURIComponent(T)}`,"_blank","noopener,noreferrer"),c(T).then(t=>{e?k({text:t?"ChatGPT is opening with your brief filled in. A copy is on your clipboard too.":"ChatGPT is opening with your brief filled in.",at:Date.now()}):k({text:t?"Copied.":"Select the brief below and copy it.",at:Date.now()})})}async function S(){if(!E)return;let e=await c(C);x(e=>({furthest:(0,u.furtherStep)(e.furthest,"finalize")})),k({text:e?"Copied. Paste it into the same ChatGPT chat.":"Select the prompt above and copy it, then paste it into the same chat.",at:Date.now()})}return(0,t.jsxs)(s.FlowShell,{children:[(0,t.jsx)("h1",{className:"font-display text-3xl leading-tight tracking-tight min-[380px]:text-4xl",children:"Make it in ChatGPT"}),(0,t.jsx)("p",{className:"mt-3 text-lg leading-7 text-muted",children:"Same chat, in this order."}),(0,t.jsx)("p",{className:"mt-4 text-sm font-semibold text-foreground",children:j}),(0,t.jsxs)("ol",{className:"mt-10 flex flex-col gap-12",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("h2",{className:"font-sans text-2xl font-semibold leading-tight",children:"1. Copy prompt to generate"}),(0,t.jsx)("p",{className:"mt-2 text-lg leading-7 text-muted",children:"This asks for three different banners."}),(0,t.jsx)(h,{text:T,copyLabel:"Copy prompt to generate",compact:!0,onCopy:()=>N(!1)}),(0,t.jsx)("button",{type:"button",className:`${l.primaryClass} mt-4`,onClick:()=>void N(!0),children:"Copy prompt & open ChatGPT"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("h2",{className:"font-sans text-2xl font-semibold leading-tight",children:"2. Select concept"}),(0,t.jsx)("p",{className:"mt-2 text-lg leading-7 text-muted",children:"When the three banners show up, pick the one to print."}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(o,{value:b.concept,onChange:function(e){x({concept:e})}})})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("h2",{className:"font-sans text-2xl font-semibold leading-tight",children:"3. Copy prompt to finalize"}),(0,t.jsx)("p",{className:"mt-2 text-lg leading-7 text-muted",children:"Paste this into the same chat. This preps your selected content to be a 5x3ft print ready PNG."}),E?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{text:C,copyLabel:"Copy prompt to finalize",compact:!0,onCopy:()=>void S()}),(0,t.jsx)("button",{type:"button",className:`${l.primaryClass} mt-4`,onClick:()=>void S(),children:"Copy prompt to finalize"})]}):(0,t.jsx)("p",{className:"mt-4 text-base text-muted",children:"Pick 1, 2, or 3 first."})]})]}),(0,t.jsx)("p",{className:"mt-12 text-lg leading-7 text-muted",children:"My banner is ready. I've checked the name, color, mascot, and edges."}),(0,t.jsx)("button",{type:"button",className:`${l.primaryClass} mt-4`,onClick:()=>{x(e=>({furthest:(0,u.furtherStep)(e.furthest,"print")})),v.push("/print")},children:"Show me where to print"}),w?(0,t.jsx)("p",{role:"status",className:"fixed top-5 left-1/2 z-50 w-[min(22rem,calc(100%-2.5rem))] -translate-x-1/2 bg-[#141210] px-4 py-3 text-center text-sm font-semibold text-[#C8FF4A] md:top-auto md:right-6 md:bottom-6 md:left-auto md:translate-x-0 md:text-left",children:w.text}):null]})}],65073)},25917,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(18566),a=e.i(22905),o=e.i(45910),i=e.i(68684);e.s(["RequireBrief",0,function({children:e}){let{draft:s,ready:l}=(0,a.useDraft)(),c=(0,n.useRouter)(),d=(0,i.isBriefComplete)(s);return((0,r.useEffect)(()=>{l&&(d||c.replace("/create"))},[d,l,c]),l&&d)?e:(0,t.jsx)(o.Loading,{})}])},45910,e=>{"use strict";var t=e.i(43476),r=e.i(22016);let n="text-center font-mono text-[12px] font-medium uppercase tracking-[1px]",a=`inline-flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-[#141210] px-8 ${n} text-white hover:bg-black disabled:cursor-not-allowed disabled:opacity-40`,o=`inline-flex h-14 w-full cursor-pointer items-center justify-center rounded-full border-2 border-[#141210] bg-transparent px-8 ${n} text-[#141210] hover:bg-[#141210]/5 disabled:cursor-not-allowed disabled:opacity-40`;e.s(["ColorPickerIcon",0,function({className:e="h-6 w-6"}){return(0,t.jsx)("svg",{viewBox:"0 -960 960 960",className:e,"aria-hidden":"true",children:(0,t.jsx)("path",{fill:"currentColor",d:"M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z"})})},"Loading",0,function(){return(0,t.jsx)("p",{className:"px-5 py-24 text-center text-muted",role:"status",children:"Loading your banner…"})},"Mark",0,function({tone:e="ink"}){let n="paper"===e,a=n?"#f4f0e8":"#1c1917";return(0,t.jsxs)(r.default,{href:"/",className:`inline-flex h-11 min-w-0 items-center gap-2 font-display text-sm whitespace-nowrap min-[380px]:text-base sm:gap-2.5 sm:text-lg ${n?"text-[#f4f0e8]":"text-foreground"}`,children:[(0,t.jsxs)("svg",{viewBox:"-16 -16 32 32",className:"h-8 w-8 shrink-0 sm:h-9 sm:w-9","aria-hidden":"true",children:[(0,t.jsx)("circle",{r:"14.5",fill:n?"#141210":"#f7f3ea",stroke:a,strokeWidth:"1.7"}),(0,t.jsx)("path",{d:"M0 -6 L5.6 -1.8 L3.4 5 L-3.4 5 L-5.6 -1.8 Z",fill:a}),(0,t.jsx)("path",{d:"M0 -6 L0 -14.5 M5.6 -1.8 L13 -6.6 M3.4 5 L10.6 11.6 M-3.4 5 L-10.6 11.6 M-5.6 -1.8 L-13 -6.6",fill:"none",stroke:a,strokeWidth:"1.35",strokeLinecap:"round"})]}),(0,t.jsx)("span",{className:"truncate",children:"Banner Duty"})]})},"linkType",0,"font-mono text-[12px] font-medium uppercase tracking-[1px]","primaryClass",0,a,"secondaryClass",0,o])},22016,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return y},useLinkStatus:function(){return x}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(90809),i=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),p=e.r(5550),h=e.r(88540),m=e.r(91949),f=e.r(73668),g=e.r(9396);function y(t){var r;let n,a,o,[y,x]=(0,s.useOptimistic)(m.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:w,as:k,children:T,prefetch:C=null,passHref:E,replace:j,shallow:N,scroll:S,onClick:O,onMouseEnter:P,onTouchStart:A,legacyBehavior:R=!1,onNavigate:I,transitionTypes:D,ref:L,unstable_dynamicOnHover:M,...$}=t;n=T,R&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let U=s.default.useContext(c.AppRouterContext),_=!1!==C,B=!1===C?"none":!0===C?"full":"auto",F="none"!==B?"auto"===B?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,H="string"==typeof(r=k||w)?r:(0,l.formatUrl)(r);if(R){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=s.default.Children.only(n)}let z=R?a&&"object"==typeof a&&a.ref:L,W,G=s.default.useCallback(e=>(null!==U&&(v.current=(0,m.mountLinkInstance)(e,H,U,F,_,x,W)),()=>{v.current&&((0,m.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,m.unmountPrefetchableInstance)(e)}),[_,H,U,F,x,W]),q={ref:(0,d.useMergedRef)(G,z),onClick(t){R||"function"!=typeof O||O(t),R&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!U||t.defaultPrevented||function(t,r,n,a,o,i,l,c="none"){if("u">typeof window){let d,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);s.default.startTransition(()=>{p(r,a?"replace":"push",!1===o?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,n.current,l,c)})}}(t,H,v,j,S,I,D,B)},onMouseEnter(e){R||"function"!=typeof P||P(e),R&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),U&&_&&(0,m.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){R||"function"!=typeof A||A(e),R&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),U&&_&&(0,m.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,u.isAbsoluteUrl)(H)?q.href=H:R&&!E&&("a"!==a.type||"href"in a.props)||(q.href=(0,p.addBasePath)(H)),o=R?s.default.cloneElement(a,q):(0,i.jsx)("a",{...$,...q,children:n}),(0,i.jsx)(b.Provider,{value:y,children:o})}let b=(0,s.createContext)(m.IDLE_LINK_STATUS),x=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(71645);function a(e,t){let r=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(r.current=o(e,n)),t&&(a.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return v},NormalizeError:function(){return b},PageNotFoundError:function(){return x},SP:function(){return f},ST:function(){return g},WEB_VITALS:function(){return o},execOnce:function(){return i},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return p},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return h},stringifyError:function(){return k}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&s.test(e)};function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function h(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&p(r))return n;if(!n)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let f="u">typeof performance,g=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class b extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function k(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=e.r(18967),a=e.r(52817);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return s}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});function o(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,i(e));else t.set(r,i(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),a=a.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${n}${c}${a}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18566,(e,t,r)=>{t.exports=e.r(76562)}]);