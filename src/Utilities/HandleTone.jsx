import * as Tone from 'tone'
import ConvertMidiToNoteNames from './ConvertMidiToNoteNames'
import useStore from '../../noteStore'

// Command 144 = note on, 128 = note off
// Note 0 - 127 (middle C = 60)
// Velocity 0 - 127 (0 = no sound, 127 = full volume)

function HandleTone(source, command, note, velocity) {
  // Create a synth and connect it to the main output (your speakers)

  const synth = new Tone.Synth().toDestination()
  const now = Tone.now() // (Optional)

  // 1. The first argument to the note which can either be a frequency in hertz (like 440) or as “pitch-octave” notation (like "D#2").
  // 2. The second argument is the duration that the note is held. This value can either be in seconds, or as a tempo-relative value.
  // 3. The third (optional) argument of triggerAttackRelease is when along the AudioContext time the note should play. It can be used to schedule events in the future.
  // triggerAttackRelease(note, duration, time)
  // ! This is where the note is being triggered for mouse/midi keyboard
  let currentNote = ''
  if (source === 'MIDI') {
    // ? This is where I'm getting the following warning when it appears notes don't play
    // ? The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.
    currentNote = ConvertMidiToNoteNames(note)
    synth.triggerAttackRelease(currentNote, '8n', now)
    // synth.triggerAttackRelease(ConvertMidiToNoteNames(note), '8n', now) // ? When notes are not playing (bunching up) this is where something bad happens. called by LatencyHandling which is called by HandleMidi
    // console.log(`\nNOTE Converted -> [${currentNote}]`)
  } else {
    currentNote = note
    // synth.triggerAttackRelease(note, '8n', now)
    synth.triggerAttackRelease(currentNote, '8n', now)
  }

  console.log(
    `source: ${source}, command: ${command}, note: ${currentNote}, velocity: ${velocity}`,
  )

  // let newCurrentNote = useStore((state) => state.updateNoteNumber(currentNote))
  // console.log(`\n\n\tnewCurrentNote ==> [${newCurrentNote}]`)
  // console.log(`currentNote: ${note}`)

  return null
}

export default HandleTone
