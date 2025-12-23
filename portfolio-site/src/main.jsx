import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// --- Google Analytics ---
const GA_ID = 'G-BBPPX4QRQE'; 

// Load GA script
const script = document.createElement('script');
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
document.head.appendChild(script);

// Init GA
window.dataLayer = window.dataLayer || [];
function gtag(){ window.dataLayer.push(arguments); }
window.gtag = gtag;

gtag('js', new Date());
gtag('config', GA_ID);
// --- end GA ---

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
