import { useState, useEffect, useRef } from 'react'
import HandleTone from './HandleTone'
import { measureLatency } from './LatencyHandling'
// ! use Store
import useStore from '../../store'

function HandleMidi() {
  // Create a Set to store the currently pressed notes. Sets allow only one instance of each value.
  const pressedNotes = new Set()
  // Part of Audio Reset Button required by user interaction browser policy
  const audioContext = useRef(null)
  // Latency state
  const [latency, setLatency] = useState(0)

  // ! use the Store

  // Function to start the Tone.js AudioContext
  const startAudioContext = () => {
    // ? startAudioContext is not done right yet
    if (audioContext.current && audioContext.current.state === 'suspended') {
      audioContext.current.resume().then(() => {
        console.log('AudioContext resumed\n')
      })
    }
  }

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
        input.value.onmidimessage = (event) => {
          // Handle MIDI messages here
          // command 144 = note on, 128 = note off
          // note 0 - 127 (middle C = 60)
          // velocity 0 - 127 (0 = no sound, 127 = full volume)
          const [command, note, velocity] = event.data
          //* 144 = Note on
          if (command === 144) {
            if (!pressedNotes.has(note)) {
              pressedNotes.add(note)

              // Start the AudioContext before triggering notes
              startAudioContext()

              // Wrap HandleTone with latency measurement
              const HandleToneWithLatency = measureLatency(HandleTone)

              // This is how you call the wrapped HandleTone function as well as store returned latency of HandleTone
              // ! SOURCE.. HandleMidi -> LatencyHandling -> HandleTone
              const latency = HandleToneWithLatency(
                'MIDI',
                command,
                note,
                velocity,
              )
              setLatency(latency)

              // Handle the note press here
              console.log('\x1b[94mNote On:\x1b[0m', note)
            }
            //* 128 = Note Off
          } else if (command === 128) {
            if (pressedNotes.has(note)) {
              pressedNotes.delete(note)
              // Handle the note release here {1}
              console.log('\x1b[91mNote Off:\x1b[0m', note) // ? This prints when trouble starts ?
            }
          }
        }
      }
    } catch (error) {
      console.error('MIDI access error', error)
    }
  }

  useEffect(() => {
    initializeMIDI()

    // Cleanup on unmount
    return () => {
      // Release all pressed notes when unmounting
      pressedNotes.forEach((note) => {
        pressedNotes.delete(note)
        // Handle the note release here {2}
        console.log('\x1b[94mNote On (on unmount):\x1b[0m', note)
      })
    }
  }, [initializeMIDI]) // ?

  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-6 rounded-lg border-4 border-custom-2 border-opacity-10 bg-custom-3 p-2 font-ostrich text-2xl font-normal shadow-xl"
        onClick={startAudioContext}
      >
        Start Audio
      </button>
      <div className="mb-6 rounded-lg border-4 border-custom-2 border-opacity-10 bg-custom-3 p-2 font-ostrich text-2xl font-normal shadow-lg">
        Latency (ms): {latency}
      </div>
    </div>
  )
}

export default HandleMidi
