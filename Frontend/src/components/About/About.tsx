import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling

import {AboutSection, AboutMeTextAndPicture, AboutMeTextWrapper, AboutMeText, TechnologyStack, TechnologyStackHeader, TechnologyStackIconContainer, TechnologyStackIcons, AboutMainContainer} from './styles';
import '../../../styles/Home.module.css';
import { AboutPicture } from '../../assets';
import { techStackData } from '../../utils/constants';

function About() {
  return (
    <AboutSection className='#About' backgroundColor='black' fontColor='white'>
      <AboutMainContainer>
        <AboutMeTextAndPicture>

          <AboutMeTextWrapper>
            <AboutMeText>
              I started my journey in software engineering back in 2019. After getting more serious about it I decided to commit fully and jump into a bootcamp to begin learning full stack development. <br/><br/>I got hired and began working as a trainee Full stack developer (React, Ruby on Rails, GraphQl). Since then I have continued my journey, currently I am exploring the world of Typescript and aiming to become a smart contract developer.
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
                    {<item.icon />}
                  </TechnologyStackIcons>
                </Tippy>
              </div>
            ))}
          </TechnologyStackIconContainer>
        </TechnologyStack>
      </AboutMainContainer>
    </AboutSection>
  )
}

export default About;
