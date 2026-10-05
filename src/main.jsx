import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/pixelify-sans/latin-400.css'
import '@fontsource/pixelify-sans/latin-ext-400.css'
import '@fontsource/pixelify-sans/latin-600.css'
import '@fontsource/pixelify-sans/latin-ext-600.css'
import '@fontsource/pixelify-sans/latin-700.css'
import '@fontsource/pixelify-sans/latin-ext-700.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
