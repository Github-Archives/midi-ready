import { useEffect, useRef } from 'react'
import HandleTone from './HandleTone'

function HandleMidi() {
  // Create a Set to store the currently pressed notes. Sets allow only one instance of each value.
  const pressedNotes = new Set()
  // Part of Audio Reset Button required by user interaction browser policy
  const audioContext = useRef(null)

  // Function to start the Tone.js AudioContext
  const startAudioContext = () => {
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
        input.value.onmidimessage = event => {
          // Handle MIDI messages here
          // command 144 = note on, 128 = note off
          // note 0 - 127 (middle C = 60)
          // velocity 0 - 127 (0 = no sound, 127 = full volume)
          const [command, note, velocity] = event.data
          // Timestamp when MIDI event is received
          const receivedTimestamp = event.timeStamp

          if (command === 144) {
            // Note On
            if (!pressedNotes.has(note)) {
              pressedNotes.add(note)

              // Start the AudioContext before triggering notes
              startAudioContext()

              // Timestamp when app processes the event
              const processingTimestamp = performance.now()
              const latency = processingTimestamp - receivedTimestamp

              console.log('Keyboard => App Latency (ms):', latency)

              HandleTone(command, note, velocity)
              console.log('Note On:', note)

              HandleTone(command, note, velocity)
              // Handle the note press here
              console.log('Note On:', note)
            }
          } else if (command === 128) {
            // Note Off
            if (pressedNotes.has(note)) {
              pressedNotes.delete(note)
              // Handle the note release here
              console.log('Note Off:', note)
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
      pressedNotes.forEach(note => {
        pressedNotes.delete(note)
        // Handle the note release here
        console.log('Note Off (on unmount):', note)
      })
    }
  }, [initializeMIDI])

  return (
    <div>
      <button onClick={startAudioContext}>Start Audio</button>
    </div>
  )
}

export default HandleMidi
