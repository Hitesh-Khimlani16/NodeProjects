import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CheckCookie from './Components/CheckCookie.jsx'
import { Provider } from 'react-redux'
import AppStore from './Store/AppStore.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={AppStore}>
      <BrowserRouter >
        <CheckCookie>
          <App />
        </CheckCookie>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
