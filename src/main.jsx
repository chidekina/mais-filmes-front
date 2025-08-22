import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './global.css'
import App from './App.jsx'
import { AuthProvider } from './hooks/authContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
