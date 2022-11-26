import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { GlobalStyle } from '../globalStyles'
import { Modal } from "../components/Modal/Modal";

import Header from '../components/Header/Header'
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";

const Home = () => {

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const navigate = useNavigate()

  const navigateToLogin = () => {
    navigate('/login')
  }

  return (
    <>
      <GlobalStyle />
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <Header logoNav='/' onClickTwo={navigateToLogin} onClickOne={openModal} firstName='Cadastre-se' secondName='Login' />
      <Hero openModal={openModal}/>
      <About />
      <Footer localSmooth='top' />
    </>
  )
}

export default Home
