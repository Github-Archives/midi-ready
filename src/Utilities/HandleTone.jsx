import React from 'react'
import * as Tone from 'tone'

function HandleTone(command, note, velocity) {
  console.log('HERE command:', command)
  console.log('HERE note:', note)
  console.log('HERE velocity:', velocity)

  //create a synth and connect it to the main output (your speakers)
  //   const synth = new Tone.Synth().toDestination()
  return 5
}

export default HandleTone
