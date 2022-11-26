import { createContext, useMemo } from "react";
import { useNavigate } from "react-router";
import { useLocalStorage } from '../hooks/useLocalStorage'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser] = useLocalStorage('user', null)
  const navigate = useNavigate()

  const login = async (data) => {
    setUser(data)
    navigate('/logged')
  }

  const logout = async (data) => {
    setUser(null)
    navigate('/', {replace: true})
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthContext;
