import styled from "styled-components";
import ngLogo from '../../images/logo-ngcash.svg'

export const NavLink = styled.div`
  background: url(${ngLogo});
  height: 90px;
  width: 90px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin: 0 10%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

export const LoginContainer = styled.div`
  width: 100vw;
  height: calc(100vh + 100px);
  background: linear-gradient(180deg, black, #131313);
`

export const LoginContent = styled.div`
  margin: 0 10%;

  @media screen and (max-width: 768px) {
    margin: 50px auto;
  }

  @media screen and (max-width: 650px) {
    margin: 50px auto;
  }

  @media screen and (max-width: 500px) {
    margin: 50px auto;
  }
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  -webkit-box-shadow: 6px 4px 19px -5px rgba(255,255,255,1);
  -moz-box-shadow: 6px 4px 19px -5px rgba(255,255,255,1);
  box-shadow: 6px 4px 19px -5px rgba(255,255,255,1);
  height: 500px;
  width: 100%;
  margin: 100px auto 0px auto;
  border-radius: 20px;
  max-width: 500px;

  @media screen and (max-width: 650px) {
    width: 400px;
    margin: 0 auto;
  }

  @media screen and (max-width: 500px) {
    max-width: 350px;
    margin: 0 auto;
  }

  @media screen and (max-width: 425px) {
    max-width: 300px;
    margin: 130px auto;
  }
`

export const LabelUser = styled.p`
  font-size: 14px;
  color: black;
  margin-top: 40px;
  margin-right: 10px;
`

export const LabelPass = styled.p`
  font-size: 14px;
  color: black;
  margin-top: 20px;
  margin-right: 15px;
`

export const LoginUser = styled.input`
  width: 50%;
  height: 40px;
  font-size: 19px;
  padding: 10px;
  outline: 0;
  margin-top: 40px;

  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
`

export const LoginPass = styled.input`
  width: 50%;
  height: 40px;
  -webkit-text-security: disc;
  text-security: disc;
  font-size: 21px;
  padding: 10px;
  outline: 0;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`

export const FormSubmit = styled.button`
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 50px;
  background-color: #727085;
  color: white;
  font-weight: lighter;
  margin: 50px auto 0 auto;
  cursor: pointer;
  letter-spacing: 1px;
  transition: 0.2s ease-in-out;
  width: 350px;

  @media screen and (max-width: 500px) {
    width: 250px;
  }

  &:hover{
    background-color: #56565E;
  }
`

export const FormTitle = styled.h1`
  color: black;
  font-size: 21px;
  letter-spacing: 1px;
  margin: 70px auto 25px auto;
`

export const FormText = styled.p`
  text-align: center;
  font-size: 14px;
  letter-spacing: 0.6px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }

`
