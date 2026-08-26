import { BrowserRouter, Route, Routes } from 'react-router'
import MainBody from './Components/MainBody'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<MainBody />} >
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
