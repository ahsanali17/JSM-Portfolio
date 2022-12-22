import styled from "styled-components";


interface AboutProps {
 backgroundColor: string;
 fontColor: string;
}

export const AboutSection = styled.section<AboutProps>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  align-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 50px;
  gap: 50px;
  justify-content: center;
  margin: 40px;
  min-height: 70vh;
`;