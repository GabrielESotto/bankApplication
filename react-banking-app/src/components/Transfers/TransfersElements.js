import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, black, #131313)
`

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: calc(100vh - 80px); 
`

export const MainForm = styled.form`
  width: 55vw;
  height: 400px;
  background-color: whitesmoke;
  margin: 0 auto;
  border-radius: 5px;

  @media screen and (max-width: 500px) {
    margin-top: 100px;
  }
`

export const MainTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  margin-top: 35px;

  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin-top: 55px;
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
    margin-top: 55px;
  }
`

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;

  @media screen and (max-width: 500px) {
    margin-top: 40px;
  }
`

export const InputCreditedAcc = styled.input`
  width: 50%;
  height: 40px;
  margin-top: 10px;
  outline: 0;
  font-size: 17px;
  padding: 10px;

  @media screen and (max-width: 500px) {
    font-size: 8px;
  }
`

export const InputValue = styled.input`
  width: 50%;
  height: 40px;
  margin-top: 10px;
  outline: 0;
  font-size: 17px;
  padding: 10px;

  @media screen and (max-width: 500px) {
    font-size: 9px;
  }
`

export const FormBtn = styled.button`
  width: 50%;
  height: 40px;
  margin-top: 25px;
  font-size: 17px;
  cursor: pointer;
  border-radius: 3px;
  outline: 0;
  border: 1px solid grey;

  &:hover{
    background-color: #dbd7d7;
  }

  &:active{
    background-color: #ccc6c6;
  }
`

export const FastText = styled.p`
  font-size: 14px;
  letter-spacing: 0.6px;
  text-align: center;
  margin: -10px 5% 25px 5%;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`
