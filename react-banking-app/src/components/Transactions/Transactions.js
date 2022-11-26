import React, { useContext, useEffect, useState } from 'react'

import { GlobalStyle } from '../../globalStyles'
import { useNavigate } from 'react-router'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {
  Container,
  Content,
  TitleOne,
  ContentWrapper,
  ContentBox,
  TableOne,
  DebitedContent,
  CreditedContent,
  ValueContent,
  DateContent,
  ContentFilter,
  TableWrapper,
  FilterContent,
  FiltroBtn,
  FilterInitialDate,
} from './TransactionsElements'

import AuthContext from '../../context/AuthContext'
import ReqBalanceContext from '../../context/ReqBalanceContext'
import ReqUserContext from '../../context/ReqUserContext'

const Transactions = () => {

  const navigate = useNavigate()

  const navigateToTransactions = () => {
    navigate('/transactions')
  }

  const navigateToTransfers = () => {
    navigate('/transfers')
  }

  const navigateToHome = () => {
    navigate('/')
  }

  const { user } = useContext(AuthContext)
  const { saldo, acId } = useContext(ReqBalanceContext)
  const { data } = useContext(ReqUserContext)
  const [initialDate, setInitialDate] = useState('')
  const [isFiltered, setIsFiltered] = useState(false)
  const [isFilteredCashIn, setIsFilteredCashIn] = useState(false)
  const [isFilteredCashOut, setIsFilteredCashOut] = useState(false)

  useEffect(() => {
    if(user === null || !user) {
      navigate('/')
    }
  }, [user])

  const desconect = () => {
    navigateToHome()
    localStorage.clear()
  }

  const dataDebited = []
  const dataCredited = []
  const dataValue = []
  const dataCreated = []

  const filterDayBD = (date) => {
    // const minutes = date.slice(14,16)
    // const hour = date.slice(11,13)
    const year = date.slice(0,4)
    const month = date.slice(5,7)
    const day = date.slice(8,10)

    const arrayDate = []
    arrayDate.push(day, month, year)

    return arrayDate
  }

  for (let i = 0; i < data.length; i++) {
    if(!data) return

    const formatedDate = filterDayBD(data[i].createdAt)

    if(data[i].creditedAccountId === acId || data[i].debitedAccountId === acId) {
      dataCreated.push(formatedDate.join('/'))
      dataValue.push(data[i].value)
      dataDebited.push(data[i].debitedAccountId)
      dataCredited.push(data[i].creditedAccountId)
    }
  }

  const filterDay = (data) => {
    const ano = data.slice(0, 4)
    const mes = data.slice(5,7)
    const dia = data.slice(8,10)
    const completeFilterDate = []
    completeFilterDate.push(dia, mes, ano)

    return completeFilterDate
  }

  const dataDebitedFilter = []
  const dataCreditedFilter = []
  const dataValueFilter = []
  const dataCreatedFilter = []
  const usableDate = filterDay(initialDate)

  for (let i = 0; i < data.length; i++) {
    const editedDate = filterDayBD(data[i].createdAt)
    if(usableDate.join('/') === editedDate.join('/')) {
      if(acId === data[i].creditedAccountId || acId === data[i].debitedAccountId) {
        dataCreatedFilter.push(editedDate.join('/'))
        dataValueFilter.push(data[i].value)
        dataDebitedFilter.push(data[i].debitedAccountId)
        dataCreditedFilter.push(data[i].creditedAccountId)
      }
    }
  }

  const dataDebitedFilterCash = []
  const dataCreditedFilterCash = []
  const dataValueFilterCash = []
  const dataCreatedFilterCash = []

  for (let i = 0; i < data.length; i++) {
    const editedDate = filterDayBD(data[i].createdAt)
    if(acId === data[i].creditedAccountId) {
      dataCreatedFilterCash.push(editedDate.join('/'))
      dataValueFilterCash.push(data[i].value)
      dataDebitedFilterCash.push(data[i].debitedAccountId)
      dataCreditedFilterCash.push(data[i].creditedAccountId)
    }
  }

  const dataDebitedFilterCashOut = []
  const dataCreditedFilterCashOut = []
  const dataValueFilterCashOut = []
  const dataCreatedFilterCashOut = []

  for (let i = 0; i < data.length; i++) {
    const editedDate = filterDayBD(data[i].createdAt)
    if(acId === data[i].debitedAccountId) {
      dataCreatedFilterCashOut.push(editedDate.join('/'))
      dataValueFilterCashOut.push(data[i].value)
      dataDebitedFilterCashOut.push(data[i].debitedAccountId)
      dataCreditedFilterCashOut.push(data[i].creditedAccountId)
    }
  }

  const submitFilterDate = (e) => {
    e.preventDefault()

    if(!initialDate) return

    setIsFiltered(prev => !prev)
  }

  const submitFilterCashIn = (e) => {
    e.preventDefault()

    setIsFilteredCashIn(prev => !prev)
  }

  const submitFilterCashOut = (e) => {
    e.preventDefault()

    setIsFilteredCashOut(prev => !prev)
  }

  const showJsx = (data, dataTwo, dataThree, dataFour) => {
    if(!isFiltered && !isFilteredCashIn && !isFilteredCashOut) {
      return data.map((oneData, index) => {
        return <li className='border-li' key={index}>{oneData}</li>
      })
    } else if(isFiltered) {
      return dataTwo.map((oneData, index) => {
        return <li className='border-li' key={index}>{oneData}</li>
      })
    } else if(isFilteredCashIn) {
      return dataThree.map((oneData, index) => {
        return <li className='border-li' key={index}>{oneData}</li>
      })
    } else if(isFilteredCashOut) {
      return dataFour.map((oneData, index) => {
        return <li className='border-li' key={index}>{oneData}</li>
      })
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header 
        balance='Saldo: R$' 
        saldo={parseFloat(saldo).toFixed(2).replace('.', ',')} 
        onClickThree={desconect} 
        thirdName='Log out' 
        firstName='Transferir' 
        secondName='Transações' 
        logoNav='/logged' 
        onClickTwo={navigateToTransactions} 
        onClickOne={navigateToTransfers}
      />
      <Container id='topTransactions'>
        <Content>
          <ContentWrapper>
            <ContentBox>
              <ContentFilter>
                <FilterContent>
                  <FilterInitialDate type='date' onChange={e => setInitialDate(e.target.value)} />
                  <FiltroBtn onClick={submitFilterDate}>
                    {isFiltered ? 'Desfiltrar' : 'Filtrar Data'}
                  </FiltroBtn>
                </FilterContent>
                <FilterContent>
                  <FiltroBtn onClick={submitFilterCashIn}>
                    {isFilteredCashIn ? 'Desfiltrar' : 'Filtrar Cash In'}
                  </FiltroBtn>
                </FilterContent>
                <FilterContent>
                  <FiltroBtn onClick={submitFilterCashOut}>
                    {isFilteredCashOut ? 'Desfiltrar' : 'Filtrar Cash Out'}
                  </FiltroBtn>
                </FilterContent>
              </ContentFilter>
              <TableWrapper>
                <TableOne>
                  <TitleOne>Conta Saida</TitleOne>
                  <DebitedContent>
                    {showJsx(dataDebited, dataDebitedFilter, dataDebitedFilterCash, dataDebitedFilterCashOut)}
                  </DebitedContent>
                </TableOne>
                <TableOne>
                  <TitleOne>Conta Destino</TitleOne>
                  <CreditedContent>
                    {showJsx(dataCredited, dataCreditedFilter, dataCreditedFilterCash, dataCreditedFilterCashOut)}
                  </CreditedContent>
                </TableOne>
                <TableOne>
                  <TitleOne>Valor</TitleOne>
                  <ValueContent>      
                    {showJsx(dataValue, dataValueFilter, dataValueFilterCash, dataValueFilterCashOut)}
                  </ValueContent>
                </TableOne>
                <TableOne>
                  <TitleOne>Data</TitleOne>
                  <DateContent>
                    {showJsx(dataCreated, dataCreatedFilter, dataCreatedFilterCash, dataCreatedFilterCashOut)}
                  </DateContent>
                </TableOne>
              </TableWrapper>
            </ContentBox>
          </ContentWrapper>
          
        </Content>
      </Container>
      <Footer localSmooth='topTransactions' />
    </>
  )
}

export default Transactions
