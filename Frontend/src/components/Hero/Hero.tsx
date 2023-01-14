import React from 'react';

import {TypedReactAnimation} from '..';
import { HeroProfilePic } from '../../assets';
import { HeroMainContainer, HeroPicture, HeroPictureContainer, HeroSection, HeroText, HeroTextPartition } from './styles';
import { nameString } from '../../utils/constants';

function Hero() {
  return (
    <HeroSection backgroundColor="#000ff906" fontColor="#ffffff">
      <HeroMainContainer>

        <HeroTextPartition>
          <HeroText>
            <TypedReactAnimation stringArray={nameString} typingSpeed={40} backingSpeed={20} animationLoop={false}
            style={{width:"100px", color: "#ffcc", fontSize:"1.8rem"}}
            />
          </HeroText>
        </HeroTextPartition>
        <HeroPicture>
            <HeroPictureContainer>
              <Image src={HeroProfilePic} alt='My hero sections profile picture' fill style={{borderRadius: '20px', boxShadow: "5px 5px 50px #7d7979"}} />
            </HeroPictureContainer>
        </HeroPicture>

      </HeroMainContainer>
    </HeroSection>
  );
}

export default Hero;