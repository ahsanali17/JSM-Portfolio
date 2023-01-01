import React from 'react'
import {SiJavascript, SiSolidity, SiReact, SiNextdotjs, SiVite, SiRubyonrails,SiTypescript, SiRedux, SiMysql, SiGraphql, SiMongodb, SiJest } from 'react-icons/si';
import {FaHardHat} from 'react-icons/fa';
import {Tooltip} from 'react-tooltip';

import {AboutSection, AboutMeTextAndPicture, AboutSectionPictureWrapper, AboutSectionPicture, AboutMeTextWrapper, AboutMeText, TechnologyStack, TechnologyStackHeader, TechnologyStackIconContainer, TechnologyStackIcons} from './styles'
import { HeroProfilePic } from '../../assets';
import { TooltipTarget } from './Tooltip/styles';

function About() {
  const techStackData = [
    {icon: <SiJavascript />, iconName: 'Javascript'},
    {icon: <SiSolidity />, iconName: 'Solidity'},
    {icon: <SiReact />, iconName: 'React'},
    {icon: <SiNextdotjs />, iconName: 'Next.js'},
    {icon: <SiVite />, iconName: 'Vite'},
    {icon: <SiRubyonrails />, iconName: 'Ruby on Rails'},
    {icon: <SiTypescript />, iconName: 'Typescript'},
    {icon: <SiRedux />, iconName: 'Redux'},
    {icon: <SiMysql />, iconName: 'MySql'},
    {icon: <SiGraphql />, iconName: 'GraphQl'},
    {icon: <SiMongodb />, iconName: 'MongoDB'},
    {icon: <SiJest />, iconName: 'Jest'},
    {icon: <FaHardHat />, iconName: 'Hardhat'},
  ] 
  
  // const firstFive = techStackData.slice(0,6);
  
  return (
    <AboutSection className='#About' backgroundColor='black' fontColor='white'>
     
     <AboutMeTextAndPicture>
        <AboutSectionPictureWrapper>
          <AboutSectionPicture src={HeroProfilePic} alt='My About Section picture' height={250} width={300} />
        </AboutSectionPictureWrapper>
        
        <AboutMeTextWrapper>
          <AboutMeText>
            I started my journey in software engineering back in 2019 doing tutorials on Udemy.<br/><br/>After getting more serious about it I decided to commit fully and jump into a bootcamp to begin learning full stack development. <br/><br/>I got hired and began working as a trainee Full stack developer (React, Ruby on Rails, GraphQl). Since then I have continued my journey, currently I am exploring the world of Typescript and aiming to become a smart contract developer.
          </AboutMeText>
        </AboutMeTextWrapper>
      </AboutMeTextAndPicture>
      
      
      <TechnologyStack>
        <TechnologyStackHeader>
          Technologies & Tools I work with
        </TechnologyStackHeader>
        <TechnologyStackIconContainer>
          {techStackData.map((item, index) => (
            <div key={index}>
              <TechnologyStackIcons>
                {item.icon}
              </TechnologyStackIcons>
            </div>
          ))}
            <Tooltip text="hey" position="top">
              <TooltipTarget>I am target</TooltipTarget>
            </Tooltip>
          </TechnologyStackIconContainer>
      </TechnologyStack>
    </AboutSection>
  )
}

export default About;

function useKey() {
  throw new Error('Function not implemented.');
}
