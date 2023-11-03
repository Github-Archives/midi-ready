import React, { useState } from 'react'
import * as Tone from 'tone'
import ConvertMidiCommandsToNotes from './ConvertMidiCommandsToNotes'

// command 144 = note on, 128 = note off
// note 0 - 127 (middle C = 60)
// velocity 0 - 127 (0 = no sound, 127 = full volume)

// const noteLetter = ''
function HandleTone(command, note, velocity) {
  console.log('HandleTone: command:', command)
  console.log('HandleTone: note:', note)
  console.log('HandleTone: velocity:', velocity)

  // create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination()
  // play a middle 'C' for the duration of an 8th note
  //   synth.triggerAttackRelease(`${note}`, undefined, velocity)
  // //
  //   console.log('HandleTone: note:', note)
  //   const noteLetter = ConvertMidiCommandsToNotes(note)
  //   console.log('HandleTone: noteLetter:', noteLetter)
  //   synth.triggerAttackRelease(`${noteLetter}`, '8n')
  //   synth.triggerAttackRelease('C4', '8n')
  const aNote = 'C6'
  console.log('HandleTone: aNote:', aNote)
  console.log(typeof aNote)

  //   const bNote = ConvertMidiCommandsToNotes(aNote)
  if (note === 60) {
    console.log('Here 1')
    const xxx = async () => {
      console.log('Here 2')
      try {
        console.log('Here 3')
        const bNote = await ConvertMidiCommandsToNotes(aNote)
        synth.triggerAttackRelease(bNote, '8n')
      } catch (error) {
        console.log('Here 4')
        console.error('CONVERT MIDI TO NOTE ERROR ', error)
      }
    }
    xxx()
    // synth.triggerAttackRelease(bNote, '8n')
  } else if (note === 62) {
    synth.triggerAttackRelease('D4', '8n')
  }

  //   synth.triggerAttackRelease(`${note}`, undefined, velocity)

  return null
}

export default HandleTone
