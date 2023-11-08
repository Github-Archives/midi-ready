import HandleMidi from './Utilities/HandleMidi'
import HandleTone from './Utilities/HandleTone'
import './App.css'

const App = () => {
  // Handle GUI button clicks
  function handleButtonClick(event, note) {
    console.log(`Clicked button with note: ${note}`)
    // Play the Tone.js synth
    HandleTone('GUI', 144, note)
  }
  return (
    <div className="bg-custom-1 flex h-screen flex-col items-center justify-center">
      {/* <h1 className="text-custom-4 mb-6 text-4xl ">Welcome to midi-ready!</h1> */}
      <h1 className="text-custom-2 font-ostrich mb-6 text-5xl font-extrabold ">
        Welcome to midi-ready!
      </h1>
      <HandleMidi />

      <div className="piano mt-4">
        {/* Single C4 Octave */}
        <div id="keys" className="relative flex">
          {/* White Keys */}
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="C4"
            onClick={(event) => handleButtonClick(event, 'C4')}
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="D4"
            onClick={(event) => handleButtonClick(event, 'D4')}
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="E4"
            onClick={(event) => handleButtonClick(event, 'E4')}
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="F4"
            onClick={(event) => handleButtonClick(event, 'F4')}
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="G4"
            onClick={(event) => handleButtonClick(event, 'G4')}
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="A4"
            onClick={(event) => handleButtonClick(event, 'A4')}
          ></button>
          <button
            className="key white z-1 mr-1 h-44 w-8 cursor-pointer rounded-md rounded-t-none border border-gray-500 bg-white shadow-xl first:rounded-t-md last:rounded-t-md hover:bg-blue-600"
            data-note="B4"
            onClick={(event) => handleButtonClick(event, 'B4')}
          ></button>

          {/* Black Keys - 36px seperation*/}
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 shadow-xl hover:bg-blue-800"
            style={{ marginLeft: '24px' }}
            data-note="C#4"
            onClick={(event) => handleButtonClick(event, 'C#4')}
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 shadow-xl hover:bg-blue-800"
            style={{ marginLeft: '60px' }}
            data-note="D#4"
            onClick={(event) => handleButtonClick(event, 'D#4')}
          ></button>
          <button
            className="invisible absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 shadow-xl hover:bg-blue-800"
            style={{ marginLeft: '96px' }}
            data-note="invisible"
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 shadow-xl hover:bg-blue-800"
            style={{ marginLeft: '132px' }}
            data-note="F#4"
            onClick={(event) => handleButtonClick(event, 'F#4')}
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 shadow-xl hover:bg-blue-800"
            style={{ marginLeft: '168px' }}
            data-note="G#4"
            onClick={(event) => handleButtonClick(event, 'G#4')}
          ></button>
          <button
            className="absolute h-28 w-5 cursor-pointer rounded-md rounded-t-none bg-gray-900 shadow-xl hover:bg-blue-800"
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
