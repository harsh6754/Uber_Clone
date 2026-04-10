import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserLogin from './pages/UserLoginRegister/UserLogin'
import UserSignup from './pages/UserLoginRegister/UserSignup'
import CaptainLogin from './pages/CaptainLoginRegister/CaptainLogin'
import CaptainSignup from './pages/CaptainLoginRegister/CaptainSignup'
import PrivacyPolicy from './pages/PrivacyAndTermPage/PrivacyPolicy'
import TermsAndConditions from './pages/PrivacyAndTermPage/TermsAndConditions'
import GetStart from './pages/GetStart'
import UserHome from './pages/UserHomePage/UserHome'
import UserProtectedWrapper from './Wrapper/UserProtectedWrapper'
import UserLogout from './pages/UserLoginRegister/UserLogout'
import CaptainHome from './pages/CaptainHomePage/CaptainHome'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<GetStart />} />
        <Route path='/user-login' element={<UserLogin />} />
        <Route path='/user-signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path ='/captain-signup' element={<CaptainSignup />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
 
        //Routes for User After Login
        <Route path='/user-home' element={
          <UserProtectedWrapper>
            <UserHome />
          </UserProtectedWrapper>
        } />

        // User Logout Route
        <Route path ='/user-logout' element ={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />

        // Captain Routes After Login
        <Route path = '/captain-home' element ={<CaptainHome/>}/>

      </Routes>
    </div>
  )
}

export default App 