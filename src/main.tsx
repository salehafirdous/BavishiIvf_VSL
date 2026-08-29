import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThankYou from './ThankYou.tsx'

const path = window.location.pathname;
const Component = path === '/thank-you' ? ThankYou : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Component />
  </StrictMode>,
)
