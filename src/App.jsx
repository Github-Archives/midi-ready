import './App.css'

const App = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-3xl font-bold">Welcome to midi ready!</h1>
        <div className="piano mt-4">
          <div className="octave">
            <div className="key white" data-note="C"></div>
            <div className="key black" data-note="C#"></div>
            <div className="key white" data-note="D"></div>
            <div className="key black" data-note="D#"></div>
            <div className="key white" data-note="E"></div>
            <div className="key white" data-note="F"></div>
            <div className="key black" data-note="F#"></div>
            <div className="key white" data-note="G"></div>
            <div className="key black" data-note="G#"></div>
            <div className="key white" data-note="A"></div>
            <div className="key black" data-note="A#"></div>
            <div className="key white" data-note="B"></div>
          </div>
        </div>
        {/* <!-- add more octaves as needed --> */}
      </div>

      <p
        id="my-paragraph"
        className="bg-sky-500 text-3xl font-bold hover:bg-sky-700"
      >
        Click me to do something!
      </p>
    </>
  )
}

export default App
