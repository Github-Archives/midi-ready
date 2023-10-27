import './App.css'

const App = () => {
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
