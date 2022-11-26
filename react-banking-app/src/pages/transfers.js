import React from 'react'
import Transfers from '../components/Transfers/Transfers'
import { AuthProvider } from '../context/AuthContext'
import { ReqBalanceProvider } from '../context/ReqBalanceContext'

const TransfersPage = () => {
  return (
    <>
      <AuthProvider>
        <ReqBalanceProvider>
          <Transfers />
        </ReqBalanceProvider>
      </AuthProvider>
      
    </>
  )
}

export default TransfersPage
