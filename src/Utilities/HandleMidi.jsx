import React from 'react'

const HandleMidi = () => {
  const requestMIDI = async () => {
    try {
      const midiAccess = await navigator.requestMIDIAccess()
      const inputs = midiAccess.inputs.values()
      for (const input of inputs) {
        input.onmidimessage = handleMIDIMessage
      }
    } catch (error) {
      console.error('MIDI access request failed:', error)
    }
  }

  const handleMIDIMessage = event => {
    // Process MIDI messages here
    console.log('Received MIDI message:', event.data)
  }
  return (
    <>
      <div>HandleMidi</div>
    </>
  )
}

export default HandleMidi
