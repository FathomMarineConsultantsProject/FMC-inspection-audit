
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CreateReport from './components/CreateReport'
import Homepage from './components/Homepage'
import Login from './auth/Login'
import Register from './auth/Register'
import ForgotPassword from './auth/ForgotPassword'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/create-report' element={<CreateReport/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
