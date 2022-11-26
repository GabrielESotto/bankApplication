import { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Signin from './components/Signin/Signin';
import AuthContext from './context/AuthContext';
import Home from './pages';
import LoggedIn from './pages/loggedin';
import TransactionsPage from './pages/transactions';
import TransfersPage from './pages/transfers';

function App() {

  const { user } = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    if(user === null || !user) {
      navigate('/')
    }
    if(user) {
      navigate('/logged')
    }
  }, [user])

  return (
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Signin />} />
        <Route exact path='/logged' element={<LoggedIn />} />
        <Route path='/transfers' element={<TransfersPage />} />
        <Route path='/transactions' element={<TransactionsPage />} />
      </Routes>
  );
}

export default App;
