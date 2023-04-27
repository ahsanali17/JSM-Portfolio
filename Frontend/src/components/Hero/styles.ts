import styled from "styled-components";

interface HeroProps {
 backgroundColor: string;
 fontColor: string;
}

export const HeroSection = styled.section<HeroProps>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 40px;
  min-height: 94vh;
  /* width: 100% */
`;

export const HeroMainContainer = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  justify-content: center;
  padding: 100px 300px;
  gap: 10px;

  @media screen and (max-width: 1440px) {
    flex-direction: column;
    padding: 10px 0px;
  }
`;

export const HeroTextPartition = styled.div`
  flex: 1;
  padding: 100px
`;

export const HeroText = styled.h1`
  font-size: 20px;
  width: 500px;
  text-align: center;

  @media screen and (max-width: 2560px) {
    font-size: 30px;
    width: 100%;
  }

  @media screen and (max-width: 1440px) {
    font-size: 25px;
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    font-size: 25px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    font-size: 20px;
    width: 15rem;
  }
`;

export const HeroPicture = styled.div`
  display: inherit;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeroPictureContainer = styled.div`
  display: flex;
  position: relative;
  width: 30rem;
  height: 30rem;

  @media screen and (max-width: 768px) {
    width: 25rem;
    height: 25rem;
  }

  @media screen and (max-width: 600px) {
    width: 20rem;
    height: 20rem;
  }

  @media screen and (max-width: 320px) {
    width: 18rem;
    height: 15rem;
  }
`;
