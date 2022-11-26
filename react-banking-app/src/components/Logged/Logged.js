import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import ReqBalanceContext from '../../context/ReqBalanceContext'
import { GlobalStyle } from '../../globalStyles'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import {
  InitialContainer,
  InitialTitle,
  InitialContent,
  InitialDescription,
  TextWrapper
} from './LoggedElements'

const Logged = () => {

  const navigate = useNavigate()

  const navigateToTransactions = () => {
    navigate('/transactions')
  }

  const navigateToTransfers = () => {
    navigate('/transfers')
  }

  const { saldo } = useContext(ReqBalanceContext)

  const desconect = async () => {
    localStorage.clear()
    setTimeout(() => {
      navigate('/')
      window.location.reload();
    })
  }

  return (
    <>
      <GlobalStyle />
      <Header balance='Saldo: R$' saldo={parseFloat(saldo).toFixed(2).replace('.', ',')} onClickThree={desconect} thirdName='Log out' onClickOne={navigateToTransfers} onClickTwo={navigateToTransactions} firstName='Transferir' secondName='Transações' />
      <InitialContainer id='topLogged'>
        <InitialContent>
          <TextWrapper>
            <InitialTitle>Bem vindo a sua conta</InitialTitle>
            <InitialDescription>Aqui voce pode realizar transferencias e visualizar todas suas transações</InitialDescription>
          </TextWrapper>
        </InitialContent>
      </InitialContainer>
      <Footer localSmooth='topLogged' />
    </>
  )
}

export default Logged
