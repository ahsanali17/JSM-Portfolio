//@ts-nocheck
import styled from "styled-components";
import Image from "next/image";

interface AboutProps {
 backgroundColor: string;
 fontColor: string;
}

export const AboutSection = styled.section<AboutProps>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px;
  min-height: 94vh;
  /* width:100%; */
`;

export const AboutMainContainer = styled.div`
 align-items: center;
 display: flex;
 flex-direction: column;
 margin-top: 2.5rem;
 padding: 0 10rem;

 @media screen and (max-width: 375px) {
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
 }

 @media screen and (max-width: 360px) {
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
 }
`;

export const AboutMeTextAndPicture = styled.div`
  display: inherit;
  flex: 1;
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
    padding: 0px 100px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 0px 80px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px 70px;
  }

  @media screen and (max-width: 425px) {
    padding: 0px 10px;
  }

  @media screen and (max-width: 375px) {
    padding: 0px 0px;
  }

`;

// export const AboutSectionPictureWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: 40px;

//   @media screen and (max-width:768px) {
//     margin-left: 0px;
//   }
// `;

// export const AboutSectionPicture = styled(Image)`
//   width: 350px;
//   height: 350px;
//   border-radius: 8%;

//   @media screen and (max-width: 425px) {
//     width: 18rem;
//     height: 15rem;
//   }

// `;

export const AboutMeTextWrapper = styled.div``;

export const AboutMeText = styled.p`
  padding: 0px 100px;
  font-size: xx-large;

`;

export const TechnologyStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 90vw;
  padding: 40px 0px;
`;

export const TechnologyStackHeader = styled.h2`
  display: inherit;
  justify-content: center;
  margin-bottom: 5%;
  text-align: center;
`;

export const TechnologyStackIconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  grid-gap: 30px;
  gap: 30px;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

export const TechnologyStackIcons = styled.a`
  font-size: 2rem;
  position: relative;

  &:hover {
    color: green;
  }

`;