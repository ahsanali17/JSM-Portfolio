import styled from "styled-components";
import Image from "next/image";

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
  flex-wrap: wrap;
  grid-gap: 50px;
  gap: 50px;
  justify-content: center;
  margin: 0;
  min-height: 94vh;
`;

export const HeroTextPartition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 711px;
  width: 45vw;
  
`;

export const HeroText = styled.h1`
  margin: 15px -25px;
  font-size: 20px
`;

export const HeroPicture = styled.div`
  border-radius: 10%;
  overflow: hidden;
  width: 400px;  
`;

export const HeroPictureBlock = styled.div`
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  margin: 0;
`;

export const HeroPictureContainer = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
`;

export const HeroSectionImage = styled(Image)`
  max-width: 100%;
  display: block;
  margin: 0;
  border: none;
  padding: 0;
  
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;