import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLoginRegister/UserLogin'
import UserSignup from './pages/UserLoginRegister/UserSignup'
import CaptainLogin from './pages/CaptainLoginRegister/CaptainLogin'
import CaptainSignup from './pages/CaptainLoginRegister/CaptainSignup'
import PrivacyPolicy from './pages/PrivacyAndTermPage/PrivacyPolicy'
import TermsAndConditions from './pages/PrivacyAndTermPage/TermsAndConditions'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user-login' element={<UserLogin />} />
        <Route path='/user-signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path ='/captain-signup' element={<CaptainSignup />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
      </Routes>
    </div>
  )
}

export default App 