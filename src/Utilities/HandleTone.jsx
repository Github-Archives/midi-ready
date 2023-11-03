import React, { useState } from 'react'
import * as Tone from 'tone'

// command 144 = note on, 128 = note off
// note 0 - 127 (middle C = 60)
// velocity 0 - 127 (0 = no sound, 127 = full volume)
function HandleTone(command, note, velocity) {
  console.log('HandleTone: command:', command)
  console.log('HandleTone: note:', note)
  console.log('HandleTone: velocity:', velocity)

  // create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination()
  // play a middle 'C' for the duration of an 8th note
  //   synth.triggerAttackRelease(`${note}`, undefined, velocity)
  if (note === 60) {
    synth.triggerAttackRelease('C4', '8n')
  } else if (note === 62) {
    synth.triggerAttackRelease('D4', '8n')
  }

  synth.triggerAttackRelease(`${note}`, undefined, velocity)

  return null
}

export default HandleTone
