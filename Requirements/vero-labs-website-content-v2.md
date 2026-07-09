# Vero Labs Website Content — v2 (Field Report edition)

This file replaces `vero-labs-website-content.md` entirely. It is the copy deck for the v2
"Field Report" design (`vero-labs-build-guide-v2.md`). Sections here map 1:1 to that guide's
layout. This file governs words; the v2 guide governs all visuals.

Standing rules baked into every line (keep them in future edits):
- The client is never named. "An enterprise real estate client." The sample tenant is never named.
- No business-outcome metrics anywhere (no conversion, lift, volume). Engineering numbers only.
- No em dashes, no emoji, no exclamation marks in body copy.
- Voice: plain, specific, a little dry. An engineer writing a report, not a marketer.
- PII rule: only cleared audio clips ship (01, 02, 03, 04, 05, 07a, 07b, 10, 11). Clips 06,
  08, 09 are quarantined until the bleep pass; swap 06 in afterwards where marked.

---

## 0. Brand and meta

- Name: Vero Labs. Descriptor: applied AI studio, Bangalore.
- People: Vishal and Alakh, both Engineer / Developer.
- Contact: vishal@vero.co.in, alakh@vero.co.in
- GitHub: https://github.com/Dark8203 (Vishal), https://github.com/alakhagr (Alakh)
- Page title: `Vero Labs · Applied AI Studio, Bangalore`
- Meta description: `Vero Labs designs, builds, and runs production AI systems: multi-agent
  systems, voice agents, computer vision, and applied ML. Two engineers, end to end. A field
  report with real schematics, real latency numbers, and a recorded demo.`
- OG title: `Vero Labs · Field Report No. 01`
- OG description: `Production AI systems, built end to end. Evidence inside.`

---

## 1. Masthead

Wordmark: `VERO LABS`
Right of wordmark: `Applied AI Studio, Bangalore`
Meta line (mono): `No. 01 · Field Report · 2026`
Contents (nav anchors): `Demo` · `Work` · `Method` · `Studio` · `Contact`
Sticky-bar CTA (text link): `Start a project`

---

## 2. Hero

Headline (primary):
> We build AI systems that survive contact with production.

Alternates (pick one, never stack):
- `Production AI, built and run by the people you talk to.`
- `From spec to a system that actually runs.`

Subhead:
> Vero Labs is a two-person applied AI studio in Bangalore. We design, build, and run AI
> systems for teams that need machine learning in production but do not have an ML team of
> their own: multi-agent systems, voice agents, computer vision, and applied ML. We own the
> whole thing, from the first call to the system running live, and we stay on to operate it.

Primary CTA: `Start a project` (anchors to Contact)
Secondary text link: `Watch the demo ↓` (anchors to 01)
Support line (mono): `multi-agent · voice · computer vision · applied ml`

---

## 3. Section 01 — Demo

Section number and title: `01 · Demo`
Evidence block title (mono): `Exhibit A · recorded walkthrough`

Intro line (body, above the player):
> The fastest way to judge us is to watch the system work. This is a recorded walkthrough of
> a voice agent we built and shipped: live test calls, real latency, and the structured data
> every call writes back to the CRM.

Video caption (mono, under player): `Internal test calls. Our engineer as the customer. Nothing staged.`

Audio clip captions (launch set, cleared clips only):
- Clip 07a: `Ten seconds of silence. The agent checks in and resumes where it left off.`
- Clip 10: `Garbled input on a noisy line. The agent clarifies. It never guesses.`

Post-bleep swap (replace clip 10 with clip 06 once cleaned):
- Clip 06: `The caller interrupts mid-sentence. The agent stops, apologises, and takes the correction.`

Future line (add only when the callable demo agent is live; redline text):
> Or call the demo agent yourself: [number]. It picks up in English or Hindi.

Margin note for this section:
> Every clip on this page is from an internal test call. No customer audio, ever.

---

## 4. Section 02 — What we do

Section number and title: `02 · What we do`
Section intro:
> We are generalists the way a small senior team has to be: we scope it, build it, deploy it,
> and stay on to run it. Four areas we go deep in.

Entry 1 — `Multi-agent and agentic systems`
> Systems where multiple specialized agents plan, call tools, and hand off to each other to
> get real work done. We design the orchestration, the guardrails, and the failure handling so
> the system stays reliable when a single step goes wrong.

Entry 2 — `Computer vision`
> Face detection and recognition, 1:N identity matching at scale, and image-quality and
> liveness checks. We work with proven open components (detection, embedding, vector search)
> and tune the decision logic for the accuracy and review workflow your use case demands.

Entry 3 — `Conversational and voice AI`
> Real-time voice agents that hold a natural two-way conversation over the phone, in English
> and Indian languages. We assemble the full stack: telephony, speech-to-text, an in-call LLM,
> text-to-speech, and the low-latency turn-taking loop that ties them together, then wire the
> output back into your systems as structured data.

Entry 4 — `RAG and applied ML`
> Retrieval-augmented LLM systems, model selection and evaluation, and the unglamorous parts
> that decide whether ML works in production: data pipelines, scoring logic, deployment, and
> monitoring. We pick the boring, reliable option on purpose.

Margin note:
> Stated as things we build, presented as equal services. One of them has a live case study
> below. Do not invent case studies for the other three.

---

## 5. Section 03 — Selected work (the case study)

Section number and title: `03 · Selected work`
Section title (display):
> A voice agent that qualifies leads before a human picks up.
Client line (mono): `For an enterprise real estate client. Live in production.`

### The problem
> Real estate developers generate warm leads in volume: people who fill an enquiry form from
> an ad or a landing page. The economics break at first touch. Intent is highest within
> minutes of the form, but human tele-callers cannot call every lead instantly, so hot leads
> cool while the team works through the queue. The first call is also the same eight to ten
> questions every time (still interested, budget, timeline, own use or investment, loan or
> self-funded, ready for a site visit), which is exactly the high-volume, low-variation work
> that burns callers out. And what the customer actually says on that first call rarely lands
> in the CRM in a structured, queryable form.

### What we built
> An AI voice agent that calls each warm lead automatically, holds a natural two-way
> conversation in English or Hindi, runs the full qualification flow, books a site visit when
> the lead is ready, and writes a structured, scored payload back into Salesforce in real
> time. Human callers then inherit only the hot, fully contextualised leads.

Pull quote (Newsreader italic):
> A first-touch filter, not a replacement for the sales team.

### Fig. 1 caption
> Fig. 1 · One conversational turn. Customer speech runs through telephony, speech-to-text,
> an in-call LLM, and text-to-speech, and back. Typical perceived turn: 1.5 to 2.5 seconds.

Margin note beside Fig. 1:
> The LLM is the dominant latency component. We say so, and the agent covers the gap with
> natural fillers by design.

### Transcript exhibit
Title (mono): `Exhibit B · from a live test call`
Launch version (cleared, from clip 07a):
> AGENT   (after ten seconds of caller silence) "Hello, क्या आप अभी भी लाइन पर हैं?"
> CALLER  "हां"
> AGENT   (resumes exactly where it left off)
Post-bleep swap (preferred, from clip 06):
> AGENT   "Username spell करती हूँ: e as in echo, k as in kilo"
> CALLER  "नहीं नहीं नहीं"
> AGENT   "माफ़ कीजिए! फिर से बताइए."
> CALLER  "इशिता जैन … at gmail dot com"
Caption: `Interruption, recovery, correction. Endpointing tuned to 100 ms.`

### Fig. 2 caption
> Fig. 2 · System architecture. Salesforce hands leads to a Node.js middleware and a FastAPI
> pipeline; the voice stack runs the call; a post-call model turns the transcript into a
> canonical JSON payload pushed back in real time, with a polling fallback so no lead is lost.

Margin note beside Fig. 2:
> No retrieval index in the live path. Project knowledge travels as structured per-call
> context, for determinism and auditability.

### Design notes (run-in bold entries, prose)
> **Determinism over RAG.** Project knowledge is passed as structured per-call context rather
> than retrieved from a vector store, so answers to locality and project questions are
> consistent and auditable. An earlier retrieval-based experiment was dropped on purpose.
> **Resume on drop.** If a call drops mid-conversation, the system calls back with a
> resume-mode agent that skips already-answered questions and picks up where it left off.
> **No lost leads.** Results are pushed in real time, with a polling fallback if the push
> fails. In testing, when the bridge briefly errored and recovered, the fallback fired and no
> lead data was lost.
> **Native barge-in.** When the customer starts talking mid-sentence, the agent stops and
> listens, with endpointing tuned to 100 ms for responsive turn-handoff.
> **Honest scope.** The agent qualifies and books. It does not negotiate, and it deflects
> questions it does not have data for to a human follow-up instead of inventing an answer.

### Latency exhibit
Title (mono): `Exhibit C · where the time goes (measured on deployed calls)`
Rows:
- `Time to first audio` · `44 to 77 ms`
- `Speech-to-text, per utterance` · `17 to 50 ms`
- `LLM first token` · `1.0 to 1.7 s` (redline mark: `the bottleneck`)
- `Text-to-speech first token` · `350 to 1000 ms`
- `Perceived turn, steady state` · `~1.5 to 2.5 s`
Caption: `Everyone says real-time. We show the budget.`

### Payload exhibit
Title (mono): `Exhibit D · post-call payload (excerpt, test data)`
Content: the ~10-line redacted JSON (lead_score, category, qualification block with budget
updated mid-call, site_visit block with booked slot, concerns, language). One redline value:
`"booked": true`.
Caption: `About fifty structured fields across fourteen blocks, per call, pushed to Salesforce
in real time.`

### The honest line (body text, closes the section)
> The system is in production and we are scaling it carefully. We are not publishing
> conversion or lift numbers yet, because a real number needs a real cohort behind it. What we
> can show you is the engineering, and we are happy to walk through any of it.

---

## 6. Section 04 — Method

Section number and title: `04 · Method`
Intro:
> Two engineers own the whole thing, from the first call to the system running in production.
> You are not handed from a salesperson to a delivery team to a support queue.

01 `Scope`
> We dig into the actual workflow and agree on the smallest version that proves value. You get
> a clear spec and a realistic estimate, not a pitch deck.
02 `Build a pilot`
> We build the smallest real thing that runs end to end on your data, so the decision to
> continue is based on a working system, not a promise.
03 `Productionise`
> We harden it: failure handling, monitoring, integration with your stack, and the structured
> output your team actually needs.
04 `Run it`
> We stay on to operate and improve the system, because the interesting problems usually show
> up only once real traffic does.

---

## 7. Section 05 — The studio

Section number and title: `05 · The studio`
Intro:
> Vero Labs is Vishal and Alakh. We both write the code and we both own delivery. When you
> talk to us, you are talking to the people building the system.

Vishal · `Engineer / Developer`
> Machine learning engineer. Works across the stack, from the model and the real-time pipeline
> to deployment and the parts that keep it running. Based in Bangalore.
Links: `github.com/Dark8203` · `vishal@vero.co.in`

Alakh · `Engineer / Developer`
> Data scientist and engineer. Works across modelling, data pipelines, and the systems that
> turn a prototype into something dependable. Based in Bangalore.
Links: `github.com/alakhagr` · `alakh@vero.co.in`

---

## 8. Section 06 — Contact

Section number and title: `06 · Contact`
Section title (display):
> Have a workflow that needs AI in production?
Body:
> Tell us what you are trying to build or fix. If it is something we can help with, we will
> say so and give you a straight answer on scope and timeline. If it is not, we will tell you
> that too.
Primary CTA: `Email Vishal` → mailto:vishal@vero.co.in
Secondary CTA: `Email Alakh` → mailto:alakh@vero.co.in
Detail line (mono): `vishal@vero.co.in · alakh@vero.co.in · Bangalore, India`

---

## 9. Section 07 — Colophon

> Vero Labs, Bangalore. `Demo` · `Work` · `Method` · `Studio` · `Contact`
> github.com/Dark8203 · github.com/alakhagr
> Set in Newsreader, Instrument Sans, and IBM Plex Mono. Hand-built; no site builder.
> © 2026 Vero Labs.

---

## 10. /demo page

Masthead identical; meta line reads `No. 01 · Demo Annex · 2026`.

Title:
> The demo, in full.
Intro:
> Everything on this page is from internal test calls of a production voice system we built
> and run. Our engineer plays the customer. Watch the walkthrough, then listen to the moments
> that are hard to fake.

Player: the recorded walkthrough, caption as in Section 01.

Clip list (launch set, cleared only, each with its mono caption):
- 01 `Objection handled in Hinglish: possession timing, answered with substance.`
- 02 `Budget changes mid-call. The agent adapts and moves to financing.`
- 03 `Out-of-data question. Deflected to a human follow-up, never invented.`
- 04 `A competitor objection becomes an agreed comparison visit.`
- 05 `Date negotiation to a confirmed slot.`
- 07a `Ten seconds of silence. The agent checks in and resumes.`
- 10 `Garbled input. The agent clarifies instead of guessing.`
- 11 `The caller switches language. The agent politely holds the line, by design.`
Quarantined until bleep pass, then add: 06 (`Interrupted mid-spell; recovers and corrects.`),
08 (`Full phonetic read-back of an email.`), 09 (`A number given in fragments, assembled and
confirmed.`).

Fig. 1 repeated with its caption. Exhibit C (latency) repeated.
Closing line + CTA:
> If you want this walked through live, or want the same system pointed at your workflow,
> write to us.
`Start a project` → mailto:vishal@vero.co.in

---

## 11. Copy guardrails (verbatim checklist before any ship)
- No client name, no sample-tenant name, anywhere, including file names and alt text.
- No conversion rates, ROI, call volumes, or any outcome metric. Engineering numbers only.
- Quarantined clips (06, 08, 09) do not ship until bleeped; captions above are pre-written
  for the swap.
- No em dashes, no emoji, no exclamation marks in rendered copy.
- Capabilities other than voice are stated as things we build, never as delivered projects.
- Every number on the site must trace to the overview doc or the measured clips.
