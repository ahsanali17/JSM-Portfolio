import React from 'react'

import {AboutMeText, AboutSection, AboutSectionPicture, TechnologyStack} from './styles'
import { HeroProfilePic } from '../../assets';

function About() {
  return (
    <AboutSection backgroundColor='black' fontColor='white'>
     
     <div>
      <AboutSectionPicture src={HeroProfilePic} alt='My About Section picture' height={250} width={300} />
      
     </div>
     
     <AboutMeText>
      I started my journey in software engineering back in 2019 doing tutorials on Udemy.<br/>After getting more serious about it I decided to commit fully and jump into a bootcamp to begin learning full stack development.<br/> I got hired and began working as a trainee Full stack developer(React, Ruby on Rails, GraphQl).<br/>Since then I have continued my journey, currently I am exploring the world of Typescript.
      </AboutMeText>
      
      
      <h2>Technologies & Tools I work with</h2>
      <TechnologyStack>
        
        
      </TechnologyStack>
    </AboutSection>
  )
}

export default About;