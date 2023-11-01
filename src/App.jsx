import React, { useEffect } from 'react'
import { Synth, Destination } from 'tone'
import HandleMidi from './Utilities/HandleMidi'
import './App.css'

const App = () => {
  useEffect(() => {
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
          }
        }
      } catch (error) {
        console.error('MIDI access error', error)
      }
    }

    initializeMIDI()

    // Cleanup effect (optional)
    return () => {
      // Remove event listeners or clean up when the component unmounts
    }
  }, [])

  return (
    <>
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
              data-note="C"
            ></button>

            {/* Black Keys - 36px seperation*/}
            <button
              className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
              style={{ marginLeft: '24px' }}
            ></button>
            <button
              className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
              style={{ marginLeft: '60px' }}
            ></button>
            <button
              className="invisible absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
              style={{ marginLeft: '96px' }}
            ></button>
            <button
              className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
              style={{ marginLeft: '132px' }}
            ></button>
            <button
              className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
              style={{ marginLeft: '168px' }}
            ></button>
            <button
              className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
              style={{ marginLeft: '204px' }}
            ></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
