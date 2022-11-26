import React from 'react'
import { FooterContainer, FooterContent, FooterLogo, FooterDescription } from './FooterElements'
import { Link } from 'react-scroll'

const Footer = ({localSmooth}) => {
  return (
      <FooterContainer>
        <FooterContent>
            <Link 
              to={localSmooth}
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={500}> 
            <FooterLogo /> 
            </Link>
          <FooterDescription>Desenvolvido por Gabriel Sotto - NG Challenge</FooterDescription>
        </FooterContent>
      </FooterContainer>
  )
}

export default Footer
