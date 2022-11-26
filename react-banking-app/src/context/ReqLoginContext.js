import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "./AuthContext";
import axios from "axios";
import toast from 'react-hot-toast'

const ReqLoginContext = createContext()

export const ReqLoginProvider = ({children}) => {

  const navigate = useNavigate()

  const navigateToLoggedPage = () => {
    navigate('/logged')
  }

  const {login} = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    axios.post('http://localhost:3100/login', {
      usuario: username,
      password: password
    })
    .then(res => {
      if(res.status === 200) {
        login(res.data)
        toast(`Bem vindo ${res.data.username}`)
        navigateToLoggedPage()
        setUsername('')
        setPassword('')
      }
    })
    .catch(error => {
      if(error.response.status === 400) {
        toast(error.response.data)
      }
    })
  }
  return <ReqLoginContext.Provider value={{handleSubmit, username, password, setUsername, setPassword}}>{children}</ReqLoginContext.Provider>
}

export default ReqLoginContext;
