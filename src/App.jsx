import React, { useState, useEffect } from 'react'
// import { Synth, Destination } from 'tone'
import HandleMidi from './Utilities/HandleMidi'
import * as Tone from 'tone'
import './App.css'

const App = () => {
  const [note, setNote] = useState()
  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination()
  const [noteQueue, setNoteQueue] = useState(new Set()) // Use a Set to track the notes being played

  useEffect(() => {
    const noteQueue = new Set() // Use a Set to track the notes being played

    // Function to handle MIDI device connection
    const initializeMIDI = async () => {
      try {
        const midiAccess = await navigator.requestMIDIAccess()
        const inputs = midiAccess.inputs.values()

        for (
          let input = inputs.next();
          input && !input.done;
          input = inputs.next()
        ) {
          // Add event listeners to MIDI input devices
          input.value.onmidimessage = event => {
            // Handle MIDI messages here
            // command 144 = note on, 128 = note off
            // note 0 - 127 (middle C = 60)
            // velocity 0 - 127 (0 = no sound, 127 = full volume)
            const [command, note, velocity] = event.data
            // Do something with the MIDI data, e.g., trigger a sound
            console.log('Received MIDI message:', event.data)
            console.log('command:', command)
            console.log('note:', note)
            console.log('velocity:', velocity)
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
          }
        }
      } catch (error) {
        console.error('MIDI access error', error)
      }
    }

    initializeMIDI()

    // Cleanup effect (optional)
    return () => {
      // Clean up when the component unmounts
      noteQueue.forEach(note => {
        synth.triggerRelease(`${note}`)
      })
    }
  }, [synth])
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Welcome to midi-ready!</h1>
      <div className="piano mt-4">
        {/* <div className="octave"> */}
        <div id="keys" className="relative flex">
          {/* White Keys */}
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="C4" // Adjust the note value as needed
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="C"
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="C"
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="C"
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="C"
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="C"
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="B4"
          ></button>

          {/* Black Keys - 36px seperation*/}
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
            style={{ marginLeft: '24px' }}
            data-note="C4#"
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
            style={{ marginLeft: '60px' }}
            data-note="D4#"
          ></button>
          <button
            className="invisible absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
            style={{ marginLeft: '96px' }}
            data-note="F4#"
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
            style={{ marginLeft: '132px' }}
            data-note="G4#"
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
            style={{ marginLeft: '168px' }}
            data-note="A4#"
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
            style={{ marginLeft: '204px' }}
            data-note="B4#"
          ></button>
        </div>
      </div>
    </div>
  )
}

export default App
