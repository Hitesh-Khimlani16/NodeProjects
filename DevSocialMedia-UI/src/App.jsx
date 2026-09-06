import { BrowserRouter, Route, Routes } from 'react-router'
import MainBody from './Components/MainBody'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { Provider } from 'react-redux'
import AppStore from './Store/AppStore'
import Feed from './Components/Feed'
import ProtectedRoute, { PublicRoute } from './Components/ProtectedRoute'

function App() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route element={<PublicRoute />} >
          <Route path='/login' element={<Login />} />
        </Route>

        {/* Protected */}
        <Route element={<ProtectedRoute />} >
          <Route path="/" element={<MainBody />} >
            <Route path='/' element={<Feed />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
