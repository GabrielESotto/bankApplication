import styled from "styled-components";
import { MdClose } from 'react-icons/md'
import logoNG from '../../images/footer-logo.png';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 100;
  align-items: center;
`

export const ModalWrapper = styled.div`
  width: 500px;
  height: 580px;
  box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  @media screen and (max-width: 650px) {
    width: 400px;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  transition: 0.2s ease-in-out;

  &:hover{
    color: #727085;
  }
`

export const ModalH1 = styled.h1`
  font-size: 32px;

  @media screen and (max-width: 550px) {
    font-size: 14px;
  };
`

export const ModalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-top: 20px;
`

export const ModalTitleForm = styled.h1`
  font-size: 24px;
  letter-spacing: 0.3px;
  margin-bottom: 20px;
`

export const InputPassword = styled.input`
  width: 100%;
  height: 40px;
  -webkit-text-security: disc;
  text-security: disc;
  font-size: 21px;
  padding: 10px;
  outline: 0;
`

export const InputUser = styled.input`
  width: 100%;
  height: 40px;
  font-size: 19px;
  padding: 10px;
  outline: 0;
`

export const LabelPass = styled.label`
  font-size:17px;
  color: black;
  margin-top: 20px;
  
`

export const LabelUser = styled.label`
  font-size: 17px;
  color: black;
`

export const ModalNg = styled.div`
  background-image: url(${logoNG});
  width: 50px;
  height: 50px;
  background-size: cover;
  margin-top: 30px;
`

export const ModalBtn = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: #727085;
  color: white;
  margin-top: 30px;
  font-size: 21px;
  margin: 30px auto;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover{
    background-color: #56565E;
  }
`
