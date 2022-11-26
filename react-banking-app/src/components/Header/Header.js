import React, { useContext, useState } from 'react'
import {
  Nav, NavLink, NavOptions, NavMobile, BalanceWrapper
} from './HeaderElements'
import AuthContext from '../../context/AuthContext'

const Header = ({logoNav, firstName, secondName, thirdName, onClickOne, onClickTwo, onClickThree, balance, saldo}) => {

  const [mobileOn, setMobileOn] = useState(false)
  const { user } = useContext(AuthContext)

  const openMenuMobile = () => {
    setMobileOn(prev => !prev)
  }

  return (
    <>
      <Nav>
        <NavLink to={logoNav}></NavLink>
        {mobileOn ? (
          <NavMobile>
            {user ? (
              <BalanceWrapper>
                <span className='firstSpan'>{balance}</span><span className='secondSpan'>{saldo}</span>
              </BalanceWrapper>
            ) : (
              null
            )}
            <p onClick={onClickOne}>{firstName}</p>
            <p onClick={onClickTwo}>{secondName}</p>
            {user ? (
              <p onClick={onClickThree}>{thirdName}</p>
            ) : (
              null
            )} 
          </NavMobile>
        ) : (
          <NavOptions>
            <p onClick={onClickOne}>{firstName}</p>
            <p onClick={onClickTwo}>{secondName}</p>
            {user ? (
              <p onClick={onClickThree}>{thirdName}</p>
            ) : (
              null
            )} 
            {user ? (
              <>
                <span className='firstSpan'>{balance}</span><span className='secondSpan'>{saldo}</span>
              </>
            ) : (
              null
            )}
          </NavOptions>
        )}
        <i onClick={openMenuMobile} className="fa-solid fa-bars"></i>
      </Nav>
    </>
  )
}

export default Header
