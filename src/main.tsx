import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserContextResultProvider from './context/UserContextResultProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextResultProvider>
      <App />
    </UserContextResultProvider>
  </React.StrictMode>,
)
