import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProjectDirectory from './ProjectDirectory.jsx'
const directory = location.hostname === 'projects.samuelmolla.dev' || location.pathname === '/projects.html'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {directory ? <ProjectDirectory /> : <App />}
  </StrictMode>
)
