import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

const ReqBalanceContext = createContext()

export const ReqBalanceProvider = ({children}) => {
  const [acId, setAcId] = useState('')
  const [saldo, setSaldo] = useState('')

  const { user } = useContext(AuthContext)

  useEffect(() => {
    if(!user || user === null) {
      return
    } 
    setAcId(user.accountId)
    axios.get(`http://localhost:3100/balance/${acId}`, {
      acId: acId,
    })
    .then(res => {
      setSaldo(res.data.bal)
    })
    .catch(error => {
      
    })
  })
  return <ReqBalanceContext.Provider value={{saldo, acId}}>{children}</ReqBalanceContext.Provider>
}

export default ReqBalanceContext;
