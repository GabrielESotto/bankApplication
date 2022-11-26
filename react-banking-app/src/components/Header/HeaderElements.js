import styled, { keyframes } from 'styled-components';
import logo from '../../images/logo-ngcash.svg'
import { NavLink as Link } from 'react-router-dom'


export const Nav = styled.nav`
  background-color: black;
  height: 80px;
  width: 100vw;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  position: fixed;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {

  }

  i {
    font-size: 23px;
    color: white;
    display: none;
    cursor: pointer;
    margin-right: 50px;
    transition: 0.2s ease-in-out;

    &:hover{
      color: #56565E;
    }

    @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
    }
  }
`

export const NavLink = styled(Link)`
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin: 5px 10%;
  color: white;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media screen and (max-width: 700px) {
    height: 70%;
    width: 10%;
    margin: 10px 10%;
  }
`

export const NavOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10%;

  @media screen and (max-width: 1100px) {
      margin: 0;
    }

  p {
    font-weight: bold;
    font-size: 20px;
    color: white;
    margin: 0 20px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.2s ease-in-out;

    &:hover{
      color: #56565E;
    }

    @media screen and (max-width: 768px) {
      font-size: 15px;
      display: none;
    }
  }

  span {
    font-weight: bold;
    font-size: 17px;
    color: gold;
    margin: 0 5px 0 1px;
    letter-spacing: 1px;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .firstSpan {
    margin: 0 5px 0 55px;

    @media screen and (max-width: 1100px) {
      margin: 0;
    }

    @media screen and (max-width: 768px) {
      font-size: 15px;
      display: none;
    }
  }

  .secondSpan {
    padding: 2px;

    @media screen and (max-width: 1100px) {
      margin-right: 50px;
    }

    @media screen and (max-width: 768px) {
      font-size: 15px;
      margin-right: 30px;
      display: none;
    }
  }

  i {
    font-size: 23px;
    color: white;
    display: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
    }
  }
`

export const openSlow = keyframes`
  0%{
    opacity: 0%;
  }
  10% {
    opacity: 10%;
  }
  20% {
    opacity: 20%;
  }
  30% {
    opacity: 30%;
  }
  40% {
    opacity: 40%;
  }
  50%{
    opacity: 50%;
  }
  100%{
    opacity: 100%;
  }
`

export const NavMobile = styled.div`
  display: none;
  color: white;
  position: absolute;
  top: 80px;
  background-color: black;
  width: 100%;
  text-align: center;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    transition: 0.7s ease-in-out;
    animation-name: ${openSlow};
    animation-duration: 0.3s;
    animation-iteration-count: 1;
  }

  p {
    margin: 10px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    padding: 10px;

    &:hover{
      background-color: #56565E;
    }
  }

  span {
    font-weight: bold;
    font-size: 17px;
    letter-spacing: 1px;
    transition: 0.2s ease-in-out;
    width: 100%;
    color: gold;
  }
`

export const BalanceWrapper = styled.div`
  display: block;
  padding: 10px;
  border-bottom: 1px solid white;
`
