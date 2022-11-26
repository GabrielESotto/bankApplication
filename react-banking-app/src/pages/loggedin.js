import React from 'react'
import Logged from '../components/Logged/Logged'
import { AuthProvider } from '../context/AuthContext'
import { ReqBalanceProvider } from '../context/ReqBalanceContext'
import { ReqLoginProvider } from '../context/ReqLoginContext'


const LoggedIn = () => {


  return (
    <>
      <AuthProvider>
        <ReqLoginProvider>
          <ReqBalanceProvider>
            <Logged />  
          </ReqBalanceProvider>
        </ReqLoginProvider>
      </AuthProvider>
      
    </>
  )
}

export default LoggedIn
