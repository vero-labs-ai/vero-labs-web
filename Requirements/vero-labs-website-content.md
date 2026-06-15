# Vero Labs Website Content

This file holds the final copy for the Vero Labs portfolio site. The companion file
`vero-labs-build-guide.md` covers design direction, layout, and deployment. Build the
site from these two files together: this one is the words, that one is the look and the build.

Rules baked into this copy (keep them when editing):
- The flagship client is not named. Refer to it as "an enterprise real estate client" or
  "a proptech client". Do not name the client or the client's own customer/sample tenant.
- No business-results metrics are published (no conversion rate, no lift, no call volume).
  The proof on the site is engineering specificity: the architecture, the stack, the latency
  budget, the resilience design. That is deliberate, not a gap to fill in later.
- No em dashes anywhere in the rendered copy. Use commas, colons, or parentheses.
- Two people, both credited as engineers and developers: Vishal and Alakh.

---

## 0. Brand basics

- Name: Vero Labs
- One-line descriptor: applied AI studio, Bangalore
- People: Vishal and Alakh, both Engineer / Developer
- Contact: vishal@vero.co.in, alakh@vero.co.in
- GitHub: https://github.com/Dark8203 (Vishal), https://github.com/alakhagr (Alakh)
- Location: Bangalore, India
- Custom domain: not set yet. Build with relative paths so the site works at any base URL.

### SEO / meta
- Page title: `Vero Labs · Applied AI Studio`
- Meta description: `Vero Labs is a Bangalore applied AI studio. We design, build, and run AI systems in production across multi-agent systems, voice agents, computer vision, and applied ML.`
- Social/OG title: `Vero Labs`
- Social/OG description: `Production AI systems, built end to end. Multi-agent systems, voice agents, computer vision, and applied ML.`

---

## 1. Navigation

Logo text: `Vero Labs`

Nav links (anchor to sections):
- Work
- What we do
- How we work
- Team
- Contact

Primary nav button: `Start a project` (anchors to Contact)

---

## 2. Hero

Primary headline (use this one):
> Production AI systems, built end to end.

Subhead:
> Vero Labs is a two-person applied AI studio in Bangalore. We design, build, and run
> AI systems for teams that need machine learning in production but do not have an ML team
> of their own. We work across multi-agent systems, voice agents, computer vision, and applied
> ML, and we own the whole thing from the first call to the system running in production.

Primary CTA button: `Start a project`
Secondary CTA (text link): `See the work`

Alternate headlines (if you want to A/B or the primary feels off, do not stack them):
- `We build the AI systems your roadmap is waiting on.`
- `Applied AI, built to run in production.`
- `From spec to a system that actually runs.`

Hero support line (small, monospace, under the CTAs): keep it broad, not voice-specific.
> multi-agent · voice · computer vision · applied ml // scoped, built, deployed, run

---

## 3. Stat strip (proof without results)

A horizontal strip of factual, non-results proof points. Vero Labs is an AI services studio, so
the strip leads with breadth and how the team works, with one concrete engineering number from a
shipped production system. These are facts, not business KPIs. Render as 4 compact items, with the
numerals in monospace.

- `4` / service areas: multi-agent, voice, computer vision, applied ML
- `2` / engineers, end to end, no handoffs
- `end-to-end` / we scope, build, deploy, and run it
- `< 2s` / real-time turns in a system we shipped to production

Caption under the strip (small, muted):
> The one hard number is from a deployed production system. We publish engineering numbers we can
> stand behind, and we do not publish outcome metrics until a live cohort earns them.

---

## 4. What we do (capabilities)

Section eyebrow: `What we do`
Section heading: `Four things we build, end to end.`
Section intro:
> We are generalists in the way a small, senior team has to be: we scope it, build it, deploy
> it, and stay on to run it. These are the areas we go deep in.

### Capability 1: Multi-agent and agentic systems
> Systems where multiple specialized agents plan, call tools, and hand off to each other to get
> real work done. We design the orchestration, the guardrails, and the failure handling so the
> system stays reliable when a single step goes wrong.

### Capability 2: Computer vision
> Face detection and recognition, 1:N identity matching at scale, and image-quality and
> liveness checks. We work with proven open components (detection, embedding, vector search)
> and tune the decision logic for the accuracy and review workflow your use case demands.

### Capability 3: Conversational and voice AI
> Real-time voice agents that hold a natural two-way conversation over the phone, in English
> and Indian languages. We assemble the full stack: telephony, speech-to-text, an in-call LLM,
> text-to-speech, and the low-latency turn-taking loop that ties them together, then wire the
> output back into your systems as structured data.

### Capability 4: RAG and applied ML
> Retrieval-augmented LLM systems, model selection and evaluation, and the unglamorous parts
> that decide whether ML works in production: data pipelines, scoring logic, deployment, and
> monitoring. We pick the boring, reliable option on purpose.

Note for the build: the multi-agent, computer vision, and RAG items are stated as things we build,
not as named delivered client projects. Keep that framing. The voice item is the one with a live
case study below, but the four are presented as equal services, not as a voice studio with
add-ons. Do not invent a client or a case study for the other three.

---

## 5. Selected work (the flagship case study)

Section eyebrow: `Selected work`
Section intro (one line, sits under the eyebrow, before the kicker):
> One engagement that shows how we work: scoped, built, and now running in production. The domain
> happens to be voice, but the approach is the same whatever the AI problem is.
Case study kicker (small, monospace): `Voice AI · Real estate · In production`
Case study heading:
> A real-time voice agent that qualifies leads before a human picks up.

Client line:
> For an enterprise real estate client. Live in production.

### The problem
> Real estate developers generate warm leads in volume: people who fill an enquiry form from an
> ad or a landing page. The economics break at first touch. Intent is highest within minutes of
> the form, but human tele-callers cannot call every lead instantly, so hot leads cool while the
> team works through the queue. The first call is also the same eight to ten questions every
> time (still interested, budget, timeline, own-use or investment, loan or self-funded, ready
> for a site visit), which is exactly the high-volume, low-variation work that burns callers out.
> And what the customer actually says on that first call rarely lands in the CRM in a structured,
> queryable form.

### What we built
> An AI voice agent that calls each warm lead automatically, holds a natural two-way conversation
> in English or Hindi, runs the full qualification flow, books a site visit when the lead is
> ready, and writes a structured, scored payload back into Salesforce in real time. Human callers
> then inherit only the hot, fully-contextualised leads. It is positioned as a first-touch filter,
> not a replacement for the sales team.

### How it works (three steps, buyer's view)
1. `Lead in` — A new warm lead in the CRM triggers an outbound call within the speed-to-lead
   window, in the language the lead chose on the form.
2. `Qualify` — The agent runs the full qualification conversation, answers locality and project
   questions from structured per-call context, handles interruptions, and books a site visit
   when the lead is ready.
3. `Structured result out` — After the call, the system extracts a scored, structured result
   (roughly 50 fields across 14 blocks) and pushes it back into the CRM in real time, so the
   sales team picks up only qualified, contextualised leads.

### Under the hood
This is the part that does the convincing. Render it as a labelled architecture diagram plus a
stack list. Diagram labels and flow (see the build guide for the visual spec):

Real-time path, per conversational turn:
> Customer speech → Telephony (Plivo) → Speech-to-text (Deepgram Nova-3) → In-call LLM
> (Azure GPT-4.1) → Text-to-speech (ElevenLabs multilingual) → back to the customer.

Around the call:
> A FastAPI orchestration service (hosted on Render) receives the lead, triggers the call through
> Bolna's voice infrastructure, then processes the transcript after the call. A separate LLM pass
> (GPT-5.4) turns the raw transcript into the canonical structured payload. A Node.js middleware
> layer bridges the pipeline and Salesforce, holds credentials, and backs up every transcript.

Engineering decisions worth showing (render as a short list of "design notes"):
- `Determinism over RAG` — project knowledge is passed as structured per-call context rather than
  retrieved from a vector store, so answers to locality and project questions are consistent and
  auditable. An earlier retrieval-based experiment was dropped on purpose.
- `Resume on drop` — if a call drops mid-conversation, the system calls back with a resume-mode
  agent that skips already-answered questions and picks up where it left off, and can acknowledge
  a concern raised in the previous call.
- `No lost leads` — results are pushed in real time, with a polling fallback if the push fails.
  In testing, when the bridge briefly returned an error and recovered, the fallback fired and no
  lead data was lost.
- `Native barge-in` — when the customer starts talking mid-sentence, the agent stops and listens,
  with endpointing tuned to 100ms for responsive turn-handoff.
- `Honest scope` — the agent qualifies and books. It does not negotiate, and it deflects questions
  it does not have data for to a human follow-up instead of inventing an answer.

### The stack
Render as a clean two-column list (component, choice), monospace:
- Telephony: `Plivo (via Bolna)`
- Speech-to-text: `Deepgram Nova-3 (Hindi config, covers Hinglish and Indian English)`
- In-call LLM: `Azure GPT-4.1`
- Text-to-speech: `ElevenLabs eleven_multilingual_v2`
- Voice orchestration: `Bolna`
- Post-call extraction: `OpenAI GPT-5.4 → canonical JSON (14 blocks)`
- Orchestration service: `FastAPI on Render`
- CRM bridge: `Node.js middleware`
- CRM: `Salesforce (Sales, Data, Marketing Cloud)`
- Call log store: `SQLite (indexed + full payload)`

### The honest line (keep this, it is part of the pitch)
> The system is in production and we are scaling it carefully. We are not publishing conversion
> or lift numbers yet, because a real number needs a real cohort behind it. What we can show you
> is the engineering, and we are happy to walk through any of it.

---

## 6. How we work

Section eyebrow: `How we work`
Section heading: `Small team, no handoffs.`
Section intro:
> Two engineers own the whole thing, from the first call to the system running in production.
> You are not handed from a salesperson to a delivery team to a support queue. Here is the shape
> of a typical engagement.

This is a real sequence, so numbered steps are appropriate.

1. `Scope` — We dig into the actual workflow and agree on the smallest version that proves value.
   You get a clear spec and a realistic estimate, not a pitch deck.
2. `Build a pilot` — We build the smallest real thing that runs end to end on your data, so the
   decision to continue is based on a working system, not a promise.
3. `Productionise` — We harden it: failure handling, monitoring, integration with your stack, and
   the structured output your team actually needs.
4. `Run it` — We stay on to operate and improve the system, because the interesting problems
   usually show up only once real traffic does.

---

## 7. Team

Section eyebrow: `Team`
Section heading: `Two engineers.`
Section intro:
> Vero Labs is Vishal and Alakh. We both write the code and we both own delivery. When you talk
> to us, you are talking to the people building the system.

### Vishal
- Role: `Engineer / Developer`
- Short bio:
> Machine learning engineer. Works across the stack, from the model and the real-time pipeline to
> deployment and the parts that keep it running. Based in Bangalore.
- Link: GitHub `https://github.com/Dark8203`
- Email: `vishal@vero.co.in`

### Alakh
- Role: `Engineer / Developer`
- Short bio:
> Data scientist and engineer. Works across modelling, data pipelines, and the systems that turn
> a prototype into something dependable. Based in Bangalore.
- Link: GitHub `https://github.com/alakhagr`
- Email: `alakh@vero.co.in`

---

## 8. Contact / CTA section

Section eyebrow: `Contact`
Section heading:
> Have a workflow that needs AI in production?

Section body:
> Tell us what you are trying to build or fix. If it is something we can help with, we will say
> so and give you a straight answer on scope and timeline. If it is not, we will tell you that too.

Primary CTA button: `Email Vishal` → `mailto:vishal@vero.co.in`
Secondary CTA button: `Email Alakh` → `mailto:alakh@vero.co.in`

Contact details block (monospace):
- `vishal@vero.co.in`
- `alakh@vero.co.in`
- `Bangalore, India`

---

## 9. Footer

- Left: `Vero Labs` and a one-liner: `Applied AI studio. Bangalore.`
- Middle: nav repeat (Work, What we do, How we work, Team, Contact)
- Right: GitHub links for both, plus the two emails.
- Bottom line (small, muted): `© 2026 Vero Labs.`

No newsletter signup, no fake social icons, no client logos. Keep the footer as quiet as the
rest of the site.

---

## 10. Copy guardrails (read before editing any text above)

- Do not name the real estate client or its sample tenant anywhere.
- Do not add conversion rates, ROI, "X% increase", call volumes, or any business-outcome metric.
  If you feel a section is "missing numbers", add an engineering number (latency, fields, stack),
  not a results number.
- Keep claims to what is true: the voice system is in production; the computer vision and
  multi-agent items are capabilities we build, stated as such.
- No em dashes. No emoji. No exclamation marks in body copy (the headlines do the energy).
- Tone: plain, specific, a little dry, confident without hype. Write like an engineer who
  respects the reader's time.
