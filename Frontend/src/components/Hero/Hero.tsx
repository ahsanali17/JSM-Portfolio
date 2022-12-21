import React, { useRef, useEffect } from 'react';
import Image from "next/image";

import {TypedReactAnimation} from '..';
import { HeroPicture, HeroPictureBlock, HeroPictureContainer, HeroSection, HeroSectionImage, HeroText, HeroText2, HeroTextPartition } from './styles';
import { HeroProfilePic } from '../../assets';

function Hero() {
  const stringArray = [
    'Some <i>strings</i> are slanted',
    'Some <strong>strings</strong> are bold',
    'HTML characters &times; &copy;'
  ]
  
  const nameString = [
    'Hello world, my name is Ahsan Ali Syed'
  ]
  
  const imageUrl = 'Frontend/src/assets/ahsan-ai-2.png';
  
  return (
    <HeroSection backgroundColor="#3498db" fontColor="#ffffff">
      <HeroTextPartition>
        <HeroText>
          <TypedReactAnimation stringArray={nameString} typingSpeed={60} backingSpeed={20} animationLoop={false} />
        </HeroText>
        <HeroText2>
          I'm a Software Developer from Montreal, Canada. <br/>I build ReactJS full-stack applications with modern technologies. <br/> On my free time I write smart contracts.   
        </HeroText2>
      </HeroTextPartition>
      <HeroPicture>
        <HeroPictureBlock>
          <HeroPictureContainer>
           
            <HeroSectionImage src={HeroProfilePic} alt='my hero sections profile picture' height={400} width={500}/>
          </HeroPictureContainer>
        </HeroPictureBlock>
      </HeroPicture>
    </HeroSection>
  );
}

export default Hero;