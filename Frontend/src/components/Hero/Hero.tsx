import React from 'react';

import {TypedReactAnimation} from '..';
import { HeroProfilePic } from '../../assets';
import { HeroPicture, HeroPictureBlock, HeroPictureContainer, HeroSection, HeroSectionImage, HeroText, HeroTextPartition } from './styles';

function Hero() {
  
  const nameString = [
    "Hello world, my name is Ahsan Ali Syed<br/>I'm a Software Developer from Montreal, Canada.<br/>I build ReactJS full-stack applications with modern technologies.<br/>On my free time I write smart contracts.",
  ]
  
  return (
    <HeroSection backgroundColor="#3498db" fontColor="#ffffff">
      <HeroTextPartition>
        <HeroText>
          <TypedReactAnimation stringArray={nameString} typingSpeed={40} backingSpeed={20} animationLoop={false} />
        </HeroText>
      </HeroTextPartition>
      <HeroPicture>
        <HeroPictureBlock>
          <HeroPictureContainer>
            <HeroSectionImage src={HeroProfilePic} alt='My hero sections profile picture' height={400} width={500}/>
          </HeroPictureContainer>
        </HeroPictureBlock>
      </HeroPicture>
    </HeroSection>
  );
}

export default Hero;