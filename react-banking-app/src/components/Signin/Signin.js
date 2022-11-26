import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { GlobalStyle } from '../../globalStyles'
import { Toaster } from 'react-hot-toast'


import {
  NavLink,
  LoginContainer,
  LoginContent,
  FormLogin,
  LabelUser,
  LoginUser,
  LabelPass,
  LoginPass,
  FormSubmit,
  FormTitle,
  FormWrapper,
  FormText
} from './SigninElements'
import ReqLoginContext from '../../context/ReqLoginContext'


const Signin = () => {

  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/')
  }

  const {handleSubmit, username, password, setPassword, setUsername} = useContext(ReqLoginContext) 

  return (
    <>
        <GlobalStyle />
        <LoginContainer>
          <NavLink onClick={navigateToHome}/>
          <LoginContent>
            <FormLogin onSubmit={handleSubmit}>
              <FormTitle>Faça seu login</FormTitle>
              <FormText>Obs.: Letras maisculas diferem das minusculas</FormText>
              <FormWrapper>
              <LabelUser>Username</LabelUser>
              <LoginUser value={username} onChange={e => setUsername(e.target.value)}/>
              </FormWrapper>
              <FormWrapper>
              <LabelPass>Password</LabelPass>
              <LoginPass value={password} onChange={e => setPassword(e.target.value)}/>
              </FormWrapper>
              <FormSubmit>Entrar</FormSubmit>
              <Toaster
                containerStyle={{
                  top: 20,
                  left: 0,
                  bottom: 20,
                  right: 20,
                  position: 'relative',
                }}
                toastOptions={{
                  style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200'
                  }
                }}
              />
            </FormLogin>
          </LoginContent>
        </LoginContainer>         
    </>
  )
}

export default Signin
