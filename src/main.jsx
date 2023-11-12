import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Decide if you want to remove StrictMode to stop useEffect from running twice
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
