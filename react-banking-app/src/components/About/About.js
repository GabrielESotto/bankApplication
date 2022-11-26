import React from 'react'
import { AboutContainer, AboutContent, AboutSideA, AboutSideB, LogoNG, AboutTitle, AboutDescription } from './AboutElements'

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutSideA>
          <AboutTitle>About NG Challenge</AboutTitle>
          <AboutDescription>Desenvolvido com o objetivo de atingir os requisitos da fase teste da entrevista</AboutDescription>
        </AboutSideA>
        <AboutSideB>
          <LogoNG />
        </AboutSideB>
      </AboutContent>
    </AboutContainer>
  )
}

export default About
