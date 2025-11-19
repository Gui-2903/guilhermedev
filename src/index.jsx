import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/Global.module.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <script type="module" src="/src/index.jsx"></script>
  </React.StrictMode>
  
);
