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
  grid-gap: 50px;
  gap: 50px;
  justify-content: center;
  margin: 40px;
  min-height: 70vh;
`;

export const AboutMeTextAndPicture = styled.div`
  margin: 10rem 15rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
`;

export const AboutSectionPictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
`;

export const AboutSectionPicture = styled(Image)`
  width: 50rem;
  height: 35rem;
  border-radius: 8%;
`;

export const AboutMeTextWrapper = styled.div`
  box-sizing: inherit;
  display: flex;
  align-items: center;
`;

export const AboutMeText = styled.p`
  margin: 10rem 0;
  font-size: xx-large;
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