import React, { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router'
import { GlobalStyle } from '../../globalStyles'
import toast, { Toaster } from 'react-hot-toast'

import Header from '../Header/Header'


import {
  MainContainer,
  MainContent,
  MainForm,
  MainTitle,
  MainWrapper,
  FastText,
  InputCreditedAcc,
  InputValue,
  FormBtn
} from './TransfersElements'
import axios from 'axios'
import Footer from '../Footer/Footer'
import AuthContext from '../../context/AuthContext'
import ReqBalanceContext from '../../context/ReqBalanceContext'

const Transfers = () => {

  const navigate = useNavigate()

  const navigateToTransactions = () => {
    navigate('/transactions')
  }

  const navigateToHome = () => {
    navigate('/')
  }

  const [creditedAccountId, setCreditedAccountId] = useState('')
  const { acId } = useContext(ReqBalanceContext)
  const [value, setValue] = useState('')

  const { user } = useContext(AuthContext)
  const { saldo } = useContext(ReqBalanceContext)



  useEffect(() => {
    if(user === null || !user) {
      navigate('/')
    }    
  }, [user])

  const desconect = async () => {
    localStorage.clear()
    setTimeout(() => {
      navigate('/')
      window.location.reload();
    })
  }

  const [dataUser, setDataUser] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3100/username`)
    .then(res => {
  
      let arrayUser = []
  
      res.data.usuario.forEach(async (dats) => {
        arrayUser.push(dats)
      })
      
      setDataUser(arrayUser)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  
  const [newValue, setNewValue] = useState(0)

  useEffect(() => {
    for (let i = 0; i < dataUser.length; i++) {
      const nomeUsuario = dataUser[i].username
      if(nomeUsuario === creditedAccountId) {
        setNewValue(dataUser[i].accountId)
      }
    }
  }, [creditedAccountId])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!creditedAccountId || !value) {
      toast('Todos os campos devem ser informados')
    } else {
      axios.put('http://localhost:3100/transfer', {
        debitedAccountId: acId,
        creditedAccountId: newValue,
        value: value
      })
      .then(res => {
        if(res.status === 201) {
          toast('Transferencia realizada com sucesso')
          setTimeout(() => {
            navigate('/logged')
            window.location.reload();
          }, 1000)
        }
      })
      .catch(error => {
        if(error.response.status === 400) {
          toast(error.response.data)
        }
      })
    }    
  }

  


  return (
    <>
      <GlobalStyle />
      <Header balance='Saldo: R$' saldo={parseFloat(saldo).toFixed(2).replace('.', ',')} onClickThree={desconect} thirdName='Log out' logoNav='/logged' onClickTwo={navigateToTransactions} firstName='Transferir' secondName='Transações'/>
      <MainContainer id='topTransfer'>
        <MainContent>
          <MainForm onSubmit={handleSubmit}>
            <MainTitle>Faça uma transferência</MainTitle>
            <MainWrapper>
              <FastText>Obs.: Letras maiusculas diferem das minusculas</FastText>
              <InputCreditedAcc type='text' placeholder='Username Destinatario'value={creditedAccountId} onChange={e => setCreditedAccountId(e.target.value)} />
              <InputValue type='number' step='.01' placeholder='Valor' value={value} onChange={e => setValue(e.target.value)} />
              <FormBtn>Enviar</FormBtn>
              <Toaster
                containerStyle={{
                  top: 15,
                  left: 0,
                  bottom: 20,
                  right: 20,
                  position: 'relative',
                  width: '30vw',
                }}
                toastOptions={{
                  style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200'
                  }
                }}
              />
            </MainWrapper>
          </MainForm>
        </MainContent>
      </MainContainer>
      <Footer localSmooth='topTransfer'/>
    </>
  )
}

export default Transfers
