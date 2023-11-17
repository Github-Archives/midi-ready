import React, { useState, useEffect } from 'react'
import HandleMidi from './Utilities/HandleMidi'
import HandleTone from './Utilities/HandleTone'
import './App.css'

const App = () => {
  const [clickedMidiNote, setClickedMidiNote] = useState(null)
  // console.log(`clickedMidiNote: ${clickedMidiNote}`)
  // Handle GUI button clicks
  function handleButtonClick(event, note) {
    // console.log(`Clicked button with note: ${note}`)
    // Play the Tone.js synth
    HandleTone('GUI', 144, note)
  }
  // TODO: Here is the current problem:
  //      Clicking MIDI key plays tone fine, but this function is not entered until the 2nd MIDI key click
  // Callback function to handle MIDI key clicks
  const handleMidiKeyClick = (note) => {
    console.log(`inside handleMidiKeyClick()`)
    // console.log(`MIDI key clicked: ${note}`)
    // Do something with the MIDI key click in the parent component
    // For example, you can update the state to highlight the corresponding button
    setClickedMidiNote(note)
  }

  // useEffect(() => {
  //   console.log(
  //     '\x1b[45mtypeof clickedMidiNote:\x1b[0m',
  //     typeof clickedMidiNote,
  //   )
  //   console.log('\x1b[45mclickedMidiNote:\x1b[0m', clickedMidiNote)
  //   console.log('')
  // }, [clickedMidiNote])

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-custom-1">
      <h1 className="mb-6 font-ostrich text-5xl font-extrabold text-custom-2 ">
        Welcome to midi-ready!
      </h1>

      {/* <HandleMidi /> */}
      {/* {console.log('\tRight Here 1')} */}
      <HandleMidi onMidiKeyClick={handleMidiKeyClick} />
      {/* {console.log('\tRight Here 2')} */}

      <div className="piano mt-4">
        {/* Single C4 Octave */}
        <div id="keys" className="relative flex">
          {/* White Keys */}
          {/* <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            data-note="C4"
            onClick={(event) => handleButtonClick(event, 'C4')}
            style={clickedMidiNote == 60 ? { hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] } : {  }}
          ></button> */}
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            data-note="C4"
            onClick={(event) => handleButtonClick(event, 'C4')}
            style={
              clickedMidiNote === 60
                ? {
                    backgroundColor: '#2563EB',
                    boxShadow:
                      '0 0 2px #fff, inset 0 0 2px #fff, 0 0 5px #08f, 0 0 15px #08f, 0 0 30px #08f',
                  }
                : {}
            }
          ></button>
          {/* <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            data-note="D4"
            onClick={(event) => handleButtonClick(event, 'D4')}
          ></button> */}
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            data-note="D4"
            onClick={(event) => handleButtonClick(event, 'D4')}
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            data-note="E4"
            onClick={(event) => handleButtonClick(event, 'E4')}
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            data-note="F4"
            onClick={(event) => handleButtonClick(event, 'F4')}
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            data-note="G4"
            onClick={(event) => handleButtonClick(event, 'G4')}
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            data-note="A4"
            onClick={(event) => handleButtonClick(event, 'A4')}
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            data-note="B4"
            onClick={(event) => handleButtonClick(event, 'B4')}
          ></button>
          {/* Black Keys - 36px seperation*/}
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 shadow-xl hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            style={{ marginLeft: '24px' }}
            data-note="C#4"
            onClick={(event) => handleButtonClick(event, 'C#4')}
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 shadow-xl hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            style={{ marginLeft: '60px' }}
            data-note="D#4"
            onClick={(event) => handleButtonClick(event, 'D#4')}
          ></button>
          <button
            className="invisible absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 shadow-xl hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            style={{ marginLeft: '96px' }}
            data-note="invisible"
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 shadow-xl hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            style={{ marginLeft: '132px' }}
            data-note="F#4"
            onClick={(event) => handleButtonClick(event, 'F#4')}
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 shadow-xl hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            style={{ marginLeft: '168px' }}
            data-note="G#4"
            onClick={(event) => handleButtonClick(event, 'G#4')}
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 shadow-xl hover:bg-blue-600 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            style={{ marginLeft: '204px' }}
            data-note="A#4"
            onClick={(event) => handleButtonClick(event, 'A#4')}
          ></button>
        </div>
      </div>
    </div>
  )
}

export default App
