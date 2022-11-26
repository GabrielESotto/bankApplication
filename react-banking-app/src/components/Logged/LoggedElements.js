import styled, { keyframes } from 'styled-components'

export const InitialContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, black, #131313)
`

export const InitialContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px); 
`

export const InitialTitle = styled.h1`
  font-size: 30px;
  color: gold;

  @media screen and (max-width: 700px) {
      font-size: 25px;
  }
`

export const InitialDescription = styled.p`
  font-size: 21px;
  color: silver;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 17px;
  }
`

const slowMotion = keyframes`
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

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 5%;
  transition: 2s ease-in;
  animation-name: ${slowMotion};
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
  animation-delay: 0.8s;
`


