import styled from "styled-components";
import logoFooter from '../../images/footer-logo.png'

export const FooterContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
`

export const FooterContent = styled.div`
  width: 100%;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media screen and (max-width: 1100px) {
    margin: 0;
  }

  @media screen and (max-width: 650px) {
    justify-content: center;
  }
`

export const FooterLogo = styled.div`
  background-image: url(${logoFooter});
  background-size: cover;
  width: 60px;
  height: 60px;
  cursor: pointer;

  @media screen and (max-width: 1100px) {
    margin-left: 100px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 60px;
  }

  @media screen and (max-width: 650px) {
    margin: 0;
  }
`

export const FooterDescription = styled.p`
  font-size: 19px;
  letter-spacing: 0.4px;
  color: white;
  width: 40%;
  font-weight: lighter;

  @media screen and (max-width: 1440px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }


`
