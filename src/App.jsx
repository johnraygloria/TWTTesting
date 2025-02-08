import { useState } from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginEmployee from './Components/EmployeeLogin'
import Signup from './Components/Admin/EmployeeSignup'
import EmployeeHome from './Components/EmployeeHome'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/LoginEmployee' element={<LoginEmployee/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/EmployeeHome' element={<EmployeeHome/>} /> 
      </Routes>

    </BrowserRouter>
  )
}

export default App
