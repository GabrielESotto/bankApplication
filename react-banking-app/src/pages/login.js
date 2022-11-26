import React from 'react'
import Signin from '../components/Signin/Signin'
import { AuthProvider } from '../context/AuthContext'
import { ReqLoginProvider } from '../context/ReqLoginContext'


const Login = () => {

  return (
    
      <AuthProvider>
        <ReqLoginProvider>
          <Signin/>
        </ReqLoginProvider>
      </AuthProvider>  
   
  )
}

export default Login
