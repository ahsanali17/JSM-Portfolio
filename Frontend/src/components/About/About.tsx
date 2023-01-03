import {SiJavascript, SiSolidity, SiReact, SiNextdotjs, SiVite, SiRubyonrails,SiTypescript, SiRedux, SiMysql, SiGraphql, SiMongodb, SiJest } from 'react-icons/si';
import {FaHardHat} from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling

import {AboutSection, AboutMeTextAndPicture, AboutSectionPictureWrapper, AboutSectionPicture, AboutMeTextWrapper, AboutMeText, TechnologyStack, TechnologyStackHeader, TechnologyStackIconContainer, TechnologyStackIcons} from './styles';
import '../../../styles/Home.module.css';
import { AboutPicture } from '../../assets';

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
  
  return (
    <AboutSection className='#About' backgroundColor='black' fontColor='white'>
     
     <AboutMeTextAndPicture>
        <AboutSectionPictureWrapper>
          <AboutSectionPicture src={AboutPicture} alt='My About Section picture' />
        </AboutSectionPictureWrapper>
        
        <AboutMeTextWrapper>
          <AboutMeText>
            I started my journey in software engineering back in 2019 doing tutorials on Udemy.<br/><br/>After getting more serious about it I decided to commit fully and jump into a bootcamp to begin learning full stack development. <br/><br/>I got hired and began working as a trainee Full stack developer (React, Ruby on Rails, GraphQl). Since then I have continued my journey, currently I am exploring the world of Typescript and aiming to become a smart contract developer.
          </AboutMeText>
        </AboutMeTextWrapper>
      </AboutMeTextAndPicture>
      
      <TechnologyStack>
        <TechnologyStackHeader>
          Technologies & Tools I Work With
        </TechnologyStackHeader>
        <TechnologyStackIconContainer>
          {techStackData.map((item, index) => (
            <div key={index}>
              <Tippy content={item.iconName}>
                <TechnologyStackIcons>
                  {item.icon}
                </TechnologyStackIcons>
              </Tippy>
            </div>
          ))}
      </TechnologyStackIconContainer>
      </TechnologyStack>
    </AboutSection>
  )
}

export default About;
