import styled from "styled-components";
import logoAbout from '../../images/sideB-img.svg'

export const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #131313, #262626)
`

export const AboutContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: calc(100vh - 80px);
  flex-direction: row-reverse;

  @media screen and (max-width: 1100px) {
    
  }
`

export const AboutSideA = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }


`

export const AboutSideB = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 40%;
    margin-left: 20px;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`

export const LogoNG = styled.div`
  background-image: url(${logoAbout});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 550px;
  height: 550px;

  @media screen and (max-width: 1100px) {
    width: 350px;
  }
`

export const AboutTitle = styled.h1`
  font-size: 50px;
  color: #727085;

  @media screen and (max-width: 1100px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 650px) {
    font-size: 25px;
  }
`

export const AboutDescription = styled.p`
  font-size: 25px;
  color: white;
  margin-top: 20px;
  width: 500px;
  text-align: center;
  font-weight: lighter;

  @media screen and (max-width: 1100px) {
    width: 350px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`
