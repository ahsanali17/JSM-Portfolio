import styled from "styled-components";

interface HeroProps {
 backgroundColor: string;
 fontColor: string;
}

export const HeroSection = styled.section<HeroProps>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93vh;
  margin: 0px 10rem;
`;