import './App.css'

const App = () => {
  return (
    <>
      <div className="piano">
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
        {/* <!-- add more octaves as needed --> */}
      </div>

      <h1 className="bg-sky-500 text-3xl font-bold underline hover:bg-sky-700">
        Welcome to my website!
      </h1>
      <p
        id="my-paragraph"
        className="bg-sky-500 text-3xl font-bold underline hover:bg-sky-700"
      >
        Click me to change my color!
      </p>
    </>
  )
}

export default App
