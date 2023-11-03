import * as Tone from 'tone'
import ConvertMidiToNoteNames from './ConvertMidiToNoteNames'

// Command 144 = note on, 128 = note off
// Note 0 - 127 (middle C = 60)
// Velocity 0 - 127 (0 = no sound, 127 = full volume)

function HandleTone(command, note, velocity) {
  // Create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination()
  const now = Tone.now() // (Optional)

  // The first argument to the note which can either be a frequency in hertz (like 440) or as “pitch-octave” notation (like "D#2").

  // The second argument is the duration that the note is held. This value can either be in seconds, or as a tempo-relative value.

  // The third (optional) argument of triggerAttackRelease is when along the AudioContext time the note should play. It can be used to schedule events in the future.
  const currentNote = ConvertMidiToNoteNames(note)
  synth.triggerAttackRelease(currentNote, '8n', now)

  return null
}

export default HandleTone
