import React, { useEffect, useCallback, useRef, useState } from "react";
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useSpring, animated } from 'react-spring'
import { 
  Background, 
  CloseModalButton, 
  ModalContent, 
  ModalWrapper,
  ModalNg,
  ModalTitleForm,
  ModalForm,
  InputPassword,
  InputUser,
  LabelUser,
  LabelPass,
  ModalBtn,
} from "./ModalElements";

export const Modal = ({showModal, setShowModal}) => {
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  const closeModal = e => {
    if(modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showModal) {
      setShowModal(false)
    }
  }, [setShowModal, showModal])
  
  useEffect(() => {
    document.addEventListener('keydown', keyPress) 
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3100/create', {
      usuario: username,
      password: password
    })
    .then(res => {
      if(res.status === 201) {
        toast('Conta criada com sucesso')
        setUsername('')
        setPassword('')
        setTimeout(() => {
          setShowModal(false)
        }, 1200);
      }
    })
    .catch(error => {
      if(error.response.status === 400) {
        toast(error.response.data)
      }
    })
  }

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <ModalNg />
                <ModalForm onSubmit={handleSubmit}>
                  <ModalTitleForm>Crie sua conta</ModalTitleForm>
                  <LabelUser>Insira um nome de usuario</LabelUser>
                  <InputUser value={username} onChange={e => setUsername(e.target.value)}/>
                  <LabelPass>Insira uma senha forte</LabelPass>
                  <InputPassword value={password} onChange={e => setPassword(e.target.value)} />
                  <ModalBtn>Criar conta</ModalBtn>
                  <Toaster
                    containerStyle={{
                      top: -15,
                      left: 0,
                      bottom: 20,
                      right: 20,
                      position: 'relative',
                    }}
                    toastOptions={{
                      style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#713200'
                      }
                    }}
                  />
                </ModalForm>
              </ModalContent>
              <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null} 
    </>
  )
}
