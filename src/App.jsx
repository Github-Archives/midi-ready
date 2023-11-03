import React from 'react'
import HandleMidi from './Utilities/HandleMidi'
import './App.css'

const App = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Welcome to midi-ready!</h1>
      <HandleMidi />
      {/* <HandleTone /> */}
      <div className="piano mt-4">
        {/* Single C4 Octave */}
        <div id="keys" className="relative flex">
          {/* White Keys */}
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="C4"
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="D4"
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="E4"
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="F4"
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="G4"
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="A4"
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
            data-note="invisible"
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
            style={{ marginLeft: '132px' }}
            data-note="F4#"
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
            style={{ marginLeft: '168px' }}
            data-note="G4#"
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 hover:bg-blue-800"
            style={{ marginLeft: '204px' }}
            data-note="A4#"
          ></button>
        </div>
      </div>
    </div>
  )
}

export default App
