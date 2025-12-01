

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CreateReport from './components/CreateReport'
import Homepage from './components/Homepage'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/create-report' element={<CreateReport/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
