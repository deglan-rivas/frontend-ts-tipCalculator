import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { OrderProvider } from './context/OrderContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OrderProvider>
      <App />
    </OrderProvider>
  </React.StrictMode>,
)
