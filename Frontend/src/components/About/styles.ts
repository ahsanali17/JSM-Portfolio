import styled from "styled-components";
import Image from "next/image";

interface AboutProps {
 backgroundColor: string;
 fontColor: string;
}

export const AboutSection = styled.section<AboutProps>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  align-content: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin: 40px;
  min-height: 70vh;
`;

export const AboutMeTextAndPicture = styled.div`
  display: inherit;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  @media screen and (max-width: 2560px) {
    flex-direction: row;
    padding: 0px 100px;
  }
  
  @media screen and (max-width: 1440px) {
    flex-direction: row;
    padding: 0px 100px;
  }
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0px 80px;
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0px 70px;
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
    padding: 0px 10px;
  }
  
  @media screen and (max-width: 375px) {
    flex-direction: column;
    padding: 0px 0px;
  }
  
  @media screen and (max-width: 320px) {
    flex-direction: column;
    padding: 0px 0px;
  }
`;

export const AboutSectionPictureWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AboutSectionPicture = styled(Image)`
  width: 25vw;
  height: 35vh;
  border-radius: 8%;
  
  @media screen and (max-width: 768px) {
    width: 18rem;
    height: 15rem;
  }
  
  @media screen and (max-width: 425px) {
    width: 18rem;
    height: 15rem;
  }
  
  @media screen and (max-width: 375px) {
    width: 18rem;
    height: 15rem;
  }
  
  @media screen and (max-width: 320px) {
    width: 12rem;
    height: 10rem;
  }
`;

export const AboutMeTextWrapper = styled.div`
  flex: 2;
`;

export const AboutMeText = styled.p`
  padding: 0px 100px;
  font-size: xx-large;
  
  @media screen and (max-width: 320px) {
    font-size: medium;
    padding: 20px 50px;
  }
`;

export const TechnologyStack = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  gap: 30px;
  max-width: 90vw;
  margin: 10px 0;
  padding: 40px 0;
`;

export const TechnologyStackHeader = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5%;
`;

export const TechnologyStackIconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  grid-gap: 30px;
  gap: 30px;
  justify-content: center;
  max-width: 100%;
  
  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

export const TechnologyStackIcons = styled.a`
  font-size: 2rem;
  position: relative;
  /* content: ${(props) => props.title}; */
  &:hover {
    color: green;
  }
  
`;