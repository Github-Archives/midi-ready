[![Netlify Status](https://api.netlify.com/api/v1/badges/95e633fe-d876-4fb2-8f3e-669c13a7a870/deploy-status)](https://app.netlify.com/sites/portfolio-test-xyz/deploys)

# Midi-ready

Basic browser keyboard triggered by midi input

# Utilizes

[requestMIDIAccess()](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess) from the Web MIDI API

[Tone.js](https://tonejs.github.io/) for audio

# Tools/Other

[Parse a MIDI file into a Tone.js-friendly JSON format.](https://tonejs.github.io/Midi/)

[Downloadable MIDI Files](https://bitmidi.com/)

## TODO/Issues:

- Audio is delayed slightly on initial press
- Mouse click plays single note - triggering single audio play everytime
- Outboard MIDI triggers same note multiple times on subsequent presses. ie press C once, plays C, press C again, plays C twice simultaneously, and so on. If you change the note you play, the amount of simultaneous notes played is still +=1, however instead of 3,4, or 5 C's you get 3,4, or 5 of the new note playing simultaneously. This stacking of notes is causing the audio to crash and stop sounding.
- Related: Notice that the in the `// Note Off` section line #65 I will get a RED console.log(`Note Off: ${note}`) when the accumulation of notes begins.
- I've disabled `<React.StrictMode>` in `main.jsx` for now.
