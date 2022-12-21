import React, { useRef, useEffect } from 'react';

import {TypedReactAnimation} from '..';
import { HeroSection } from './styles';


function Hero() {
  const stringArray = [
    'Some <i>strings</i> are slanted',
    'Some <strong>strings</strong> are bold',
    'HTML characters &times; &copy;'
  ]
  
  return (
    <HeroSection backgroundColor="#3498db" fontColor="#ffffff">
      <TypedReactAnimation stringArray={stringArray} typingSpeed={60} backingSpeed={20} animationLoop={true} />
    </HeroSection>
  );
}

export default Hero;