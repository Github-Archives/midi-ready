import React, { useState } from 'react'
import * as Tone from 'tone'

// command 144 = note on, 128 = note off
// note 0 - 127 (middle C = 60)
// velocity 0 - 127 (0 = no sound, 127 = full volume)
function HandleTone(command, note, velocity) {
  //   console.log('HERE command:', command)
  //   console.log('HERE note:', note)
  //   console.log('HERE velocity:', velocity)

  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination()
  const [noteQueue, setNoteQueue] = useState(new Set()) // Use a Set to track the notes being

  //   const noteQueue = new Set() // Use a Set to track the notes being played

  if (command === 144) {
    // Note on
    if (!noteQueue.has(note)) {
      setNoteQueue(new Set(noteQueue.add(note)))

      synth.triggerAttack(`${note}`, undefined, velocity)
    }
  } else if (command === 128) {
    // Note off
    if (noteQueue.has(note)) {
      synth.triggerRelease(`${note}`)
      noteQueue.delete(note)
      setNoteQueue(new Set(noteQueue))
    }
  }
  return null
}

export default HandleTone
