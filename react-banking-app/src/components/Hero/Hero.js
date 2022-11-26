import React from 'react'
import { 
  HeroContentB, 
  HeroImage, 
  HeroContentA, 
  HeroContainer, 
  HeroContent, 
  HeroSideA, 
  HeroSideB, 
  HeroTitle, 
  HeroBtn, 
  HeroDescription,
} from './HeroElements'




const Hero = ({openModal}) => {

  return (
    <HeroContainer id='top'>
      <HeroContent>
        <HeroSideA>
          <HeroContentA>
            <HeroTitle>Seja bem vindo ao NG Cash Banking APP</HeroTitle>
            <HeroDescription>Cadastre-se e faça parte do Intern Banking da NG Cash</HeroDescription>
            <HeroBtn onClick={openModal}>Cadastre-se</HeroBtn>
          </HeroContentA>
        </HeroSideA>
        <HeroSideB>
          <HeroContentB>
            <HeroImage />
          </HeroContentB>
        </HeroSideB>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
