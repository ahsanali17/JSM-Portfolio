import React from 'react';
import Image from "next/image";

import {TypedReactAnimation} from '..';
import { HeroProfilePic } from '../../assets';
import { HeroPicture, HeroPictureContainer, HeroSection, HeroText, HeroTextPartition } from './styles';

function Hero() {
  
  const nameString = [
    "Hello world, my name is Ahsan Ali Syed. I'm a Software Developer from Montreal, Canada.<br/> I build ReactJS full-stack applications with modern technologies. On my free time I write smart contracts.",
  ]
  
  return (
    <HeroSection backgroundColor="#000ff906" fontColor="#ffffff">
      <HeroTextPartition>
        <HeroText>
          <TypedReactAnimation stringArray={nameString} typingSpeed={40} backingSpeed={20} animationLoop={false} 
          style={{width:"100px", color: "#ffcc"}}
          />
        </HeroText>
      </HeroTextPartition>
      <HeroPicture>
          <HeroPictureContainer>
            <Image src={HeroProfilePic} alt='My hero sections profile picture' fill style={{borderRadius: '20px', boxShadow: "5px 5px 50px #7d7979"}} />
          </HeroPictureContainer>
      </HeroPicture>
    </HeroSection>
  );
}

export default Hero;