import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import ReqBalanceContext from "./ReqBalanceContext";

const ReqUserContext = createContext()

export const ReqUserProvider = ({children}) => {
  const [data, setData] = useState([])

  const { acId } = useContext(ReqBalanceContext)

  useEffect(() => {
    axios.get(`http://localhost:3100/transactions/${acId}`, {
      acId: acId,
    })
    .then(res => {
      let arrays = []
      res.data.transactions
        .forEach(async (dats) => {
          arrays.push(dats)
        })
      setData(arrays)
    })
    .catch(error => {

    })
  }, [acId])
  return <ReqUserContext.Provider value={{data, setData}}>{children}</ReqUserContext.Provider>
}

export default ReqUserContext;
