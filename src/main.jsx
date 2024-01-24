import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Perhaps experiment with/without <React.StrictMode> wrapper around <App />. It could be making the keys play twice (double rendering). Also, it only double renders in dev not prod
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
)
