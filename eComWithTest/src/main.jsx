import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from './Store.jsx'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </StrictMode>,
)
