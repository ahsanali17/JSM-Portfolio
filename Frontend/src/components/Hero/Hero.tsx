import React from 'react';
import Image from "next/image";

import { TypedReactAnimation } from '..';
import { HeroProfilePic } from '../../assets';
import { HeroMainContainer, HeroPicture, HeroPictureContainer, HeroSection, HeroText, HeroTextPartition } from './styles';
import { nameString } from '../../utils/constants';
import { useTheme } from '../../context/themeContext';

function Hero() {
  const { theme } = useTheme()
  const isItDay = theme === 'day' ? true : false;

  return (
    <HeroSection backgroundColor={isItDay ? "#fff" : '#000'} fontColor="#ffffff">
      <HeroMainContainer>

        <HeroTextPartition>
          <HeroText>
            <TypedReactAnimation stringArray={nameString} typingSpeed={40} backingSpeed={20} animationLoop={false}
              style={{ width: "100px", color: isItDay ? '#000' : '#fff', fontSize: "1.8rem" }}
            />
          </HeroText>
        </HeroTextPartition>
        <HeroPicture>
          <HeroPictureContainer>
            <Image src={HeroProfilePic} alt='My hero sections profile picture' fill style={{ borderRadius: '20px', boxShadow: "5px 5px 50px #7d7979" }} />
          </HeroPictureContainer>
        </HeroPicture>

      </HeroMainContainer>
    </HeroSection>
  );
}

export default Hero;