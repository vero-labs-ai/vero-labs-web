# Media notes

Moved out of HTML comments in Oct 2026, because page source is public. Internal only.

The demo video and audio clips are first-class content but are not committed yet. The
markup is fully wired; shipping them is a drop-in operation.

### Video

Both `index.html` and `demo/index.html` contain a marked block:

```
<!-- VIDEO EMBED SWAP POINT ... -->
<div class="video-frame">
  <p class="video-placeholder">Recorded walkthrough · video embed pending</p>
</div>
```

Replace the `<p class="video-placeholder">…</p>` line with the real iframe (YouTube
unlisted or Loom), as shown in the comment at each swap point. Keep the `.video-frame`
wrapper: it provides the hairline border and the 16:9 ratio. Nothing may autoplay.

### Audio clips

Drop MP3 files into `assets/audio/` with these exact names:

| File               | Used on            | Status                          |
| ------------------ | ------------------ | ------------------------------- |
| `clip-01.mp3`      | /demo              | cleared                         |
| `clip-02.mp3`      | /demo              | cleared                         |
| `clip-03.mp3`      | /demo              | cleared                         |
| `clip-04.mp3`      | /demo              | cleared                         |
| `clip-05.mp3`      | /demo              | cleared                         |
| `clip-07a.mp3`     | home + /demo       | cleared                         |
| `clip-10.mp3`      | home + /demo       | cleared                         |
| `clip-11.mp3`      | /demo              | cleared                         |
| `clip-06.mp3`      | (after bleep pass) | QUARANTINED until bleeped       |
| `clip-08.mp3`      | (after bleep pass) | QUARANTINED until bleeped       |
| `clip-09.mp3`      | (after bleep pass) | QUARANTINED until bleeped       |

The audio players are currently removed from the rendered pages (no files exist yet, so
they showed dead controls). The ready-to-paste clip lists are below; restore them once the MP3s land. Clips 06, 08, and 09 must not ship until the bleep pass is done; their `<li>`
items (and the clip-06 transcript swap on the home page) are pre-written in the same
comments, with captions ready. Restore after cleaning, never before.

PII rule from the content file: only cleared audio ships. No customer audio, ever. No
client or sample-tenant names anywhere, including file names.

## Ready-to-paste markup: home page

```html
============================================================
             AUDIO CLIPS REMOVED (players return when the MP3s land in
             ./assets/audio/). To restore, paste this list back here:

             <ul class="clip-list">
               <li>
                 <audio controls preload="none" src="./assets/audio/clip-07a.mp3" aria-label="Call clip 07a: ten seconds of silence, the agent checks in and resumes"></audio>
                 <span class="clip-caption"><span class="clip-no">07a</span> · Ten seconds of silence. The agent checks in and resumes where it left off.</span>
               </li>
               <li>
                 <audio controls preload="none" src="./assets/audio/clip-10.mp3" aria-label="Call clip 10: garbled input on a noisy line, the agent clarifies"></audio>
                 <span class="clip-caption"><span class="clip-no">10</span> · Garbled input on a noisy line. The agent clarifies. It never guesses.</span>
               </li>
             </ul>

             POST-BLEEP SWAP: once clip 06 is cleaned, replace the clip-10
             item with:
               <li>
                 <audio controls preload="none" src="./assets/audio/clip-06.mp3" aria-label="Call clip 06: the caller interrupts mid-sentence, the agent stops and takes the correction"></audio>
                 <span class="clip-caption"><span class="clip-no">06</span> · The caller interrupts mid-sentence. The agent stops, apologises, and takes the correction.</span>
               </li>
             ============================================================

FUTURE (only when the callable demo agent is live), add inside
             this figure, styled as a redline line:
        <p class="demo-callout">Or call the demo agent yourself: [number]. It picks up in English or Hindi.</p>

POST-BLEEP SWAP (preferred, from clip 06): once clip 06 is
             cleaned, replace the transcript above with:
        <div class="transcript">
          <p><span class="speaker">Agent</span> "Username spell करती हूँ: e as in echo, k as in kilo"</p>
          <p><span class="speaker">Caller</span> "नहीं नहीं नहीं"</p>
          <p><span class="speaker">Agent</span> "माफ़ कीजिए! फिर से बताइए."</p>
          <p><span class="speaker">Caller</span> "[name] ... at gmail dot com"</p>
        </div>
        and the caption with:
        <figcaption class="fig-caption">Interruption, recovery, correction. Endpointing tuned to 100 ms.</figcaption>

```

## Ready-to-paste markup: /demo page

```html
============================================================
           AUDIO CLIPS REMOVED (players return when the MP3s land in
           ../assets/audio/). To restore, paste this list back here:

           <ul class="clip-list">
             <li>
               <audio controls preload="none" src="../assets/audio/clip-01.mp3" aria-label="Call clip 01: objection handled in Hinglish, possession timing answered with substance"></audio>
               <span class="clip-caption"><span class="clip-no">01</span> · Objection handled in Hinglish: possession timing, answered with substance.</span>
             </li>
             <li>
               <audio controls preload="none" src="../assets/audio/clip-02.mp3" aria-label="Call clip 02: budget changes mid-call, the agent adapts and moves to financing"></audio>
               <span class="clip-caption"><span class="clip-no">02</span> · Budget changes mid-call. The agent adapts and moves to financing.</span>
             </li>
             <li>
               <audio controls preload="none" src="../assets/audio/clip-03.mp3" aria-label="Call clip 03: out-of-data question deflected to a human follow-up, never invented"></audio>
               <span class="clip-caption"><span class="clip-no">03</span> · Out-of-data question. Deflected to a human follow-up, never invented.</span>
             </li>
             <li>
               <audio controls preload="none" src="../assets/audio/clip-04.mp3" aria-label="Call clip 04: a competitor objection becomes an agreed comparison visit"></audio>
               <span class="clip-caption"><span class="clip-no">04</span> · A competitor objection becomes an agreed comparison visit.</span>
             </li>
             <li>
               <audio controls preload="none" src="../assets/audio/clip-05.mp3" aria-label="Call clip 05: date negotiation to a confirmed slot"></audio>
               <span class="clip-caption"><span class="clip-no">05</span> · Date negotiation to a confirmed slot.</span>
             </li>
             <li>
               <audio controls preload="none" src="../assets/audio/clip-07a.mp3" aria-label="Call clip 07a: ten seconds of silence, the agent checks in and resumes"></audio>
               <span class="clip-caption"><span class="clip-no">07a</span> · Ten seconds of silence. The agent checks in and resumes.</span>
             </li>
             <li>
               <audio controls preload="none" src="../assets/audio/clip-10.mp3" aria-label="Call clip 10: garbled input, the agent clarifies instead of guessing"></audio>
               <span class="clip-caption"><span class="clip-no">10</span> · Garbled input. The agent clarifies instead of guessing.</span>
             </li>
             <li>
               <audio controls preload="none" src="../assets/audio/clip-11.mp3" aria-label="Call clip 11: the caller switches language, the agent politely holds the line by design"></audio>
               <span class="clip-caption"><span class="clip-no">11</span> · The caller switches language. The agent politely holds the line, by design.</span>
             </li>
           </ul>

           QUARANTINED until the bleep pass. Add after cleaning:
             <li>
               <audio controls preload="none" src="../assets/audio/clip-06.mp3" aria-label="Call clip 06: interrupted mid-spell, recovers and corrects"></audio>
               <span class="clip-caption"><span class="clip-no">06</span> · Interrupted mid-spell; recovers and corrects.</span>
             </li>
             <li>
               <audio controls preload="none" src="../assets/audio/clip-08.mp3" aria-label="Call clip 08: full phonetic read-back of an email"></audio>
               <span class="clip-caption"><span class="clip-no">08</span> · Full phonetic read-back of an email.</span>
             </li>
             <li>
               <audio controls preload="none" src="../assets/audio/clip-09.mp3" aria-label="Call clip 09: a number given in fragments, assembled and confirmed"></audio>
               <span class="clip-caption"><span class="clip-no">09</span> · A number given in fragments, assembled and confirmed.</span>
             </li>
           ============================================================

```
