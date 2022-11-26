import React from 'react'
import Transactions from '../components/Transactions/Transactions'
import { AuthProvider } from '../context/AuthContext'
import { ReqBalanceProvider } from '../context/ReqBalanceContext'
import { ReqUserProvider } from '../context/ReqUserContext'

const TransactionsPage = () => {
  return (
    <>
      <AuthProvider>
        <ReqBalanceProvider>
          <ReqUserProvider>
            <Transactions />
          </ReqUserProvider>
        </ReqBalanceProvider>
      </AuthProvider>
      
    </>
  )
}

export default TransactionsPage
