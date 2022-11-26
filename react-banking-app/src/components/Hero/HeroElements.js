import styled from 'styled-components';
import heroImg from '../../images/sideB.svg'

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, black, #131313)
`

export const HeroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: calc(100vh - 80px);

  @media screen and (max-width: 650px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`

export const HeroSideA = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;

  @media screen and (max-width: 768px) {
    margin-left: 5%;
  }

  @media screen and (max-width: 650px) {
    margin: 0;
  }
`

export const HeroSideB = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 650px) {
    display: none;
  }
`

export const HeroContentA = styled.div`
  width: 100%;
  margin: 45% 0;

  @media screen and (max-width: 650px) {
    margin-top: 80%;
  }
`

export const HeroContentB = styled.div`
  width: 100%;
`

export const HeroTitle = styled.h1`
  font-size: 43px;
  color: #727085;

  @media screen and (max-width: 768px) {
    font-size: 19px;
  }

  @media screen and (max-width: 650px) {
    font-size: 25px;
    margin-top: 50px;
    
  }
`

export const HeroDescription = styled.p`
  font-size: 16px;
  color: white;
  margin-top: -5px;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }

  @media screen and (max-width: 650px) {
    font-size: 15px;
    margin-top: 10px;
  }
`

export const HeroBtn = styled.button`
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 50px;
  background-color: #727085;
  color: white;
  font-weight: lighter;
  margin-top: 3%;
  cursor: pointer;
  letter-spacing: 1px;
  transition: 0.2s ease-in-out;

  &:hover{
    background-color: #56565E;
  }

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }

  @media screen and (max-width: 650px) {
    margin-top: 30px;
  }
`

export const HeroImage = styled.div`
  background-image: url(${heroImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 45vh;
  margin-top: 50px;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    height: 30vh;
  }
`
