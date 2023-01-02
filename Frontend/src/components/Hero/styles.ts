import styled from "styled-components";

interface HeroProps {
 backgroundColor: string;
 fontColor: string;
}

export const HeroSection = styled.section<HeroProps>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  align-content: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  padding: 20px 100px;
  
  min-height: 94vh;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroTextPartition = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const HeroText = styled.h1`
  font-size: 20px;
  width: 500px;
  
  @media screen and (max-width: 700px) {
    width: 100%;
  }
  
  @media screen and (max-width: 600px) {
    width: 100%;
  } 
  
  @media screen and (max-width: 500px) {
    width: 90%;
  } 
`;

export const HeroPicture = styled.div`
  display: inherit;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeroPictureContainer = styled.div`
  position: relative;
  width: 500px;
  height: 400px;
  
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  
`; 
