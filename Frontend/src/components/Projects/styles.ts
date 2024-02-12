//@ts-nocheck
import styled from "styled-components";

interface ProjectMainContainerProps {
  color: string;
}

export const ProjectSectionContainer = styled.section`
 align-content: center;
 align-items: center;
 display: flex;
 flex-direction: column;
 flex-wrap: wrap;
 gap: 10px;
 justify-content: center;
 margin: 40px;
 min-height: 100vh;
 /* width: 100%; */
`;

export const ProjectMainContainer = styled.div<ProjectMainContainerProps>`
 align-items: center;
 box-align: center;
 display: flex;
 flex-direction: column;
 margin-top: 2.5rem;
 padding: 0 10rem;
 color: ${props => props.black};
 z-index: 1;

 @media screen and (max-width: 500px) {
  flex-direction: column;
  padding: 20px 100px;
 }

 @media screen and (max-width: 425px) {
  flex-direction: column;
  padding: 20px 100px;
 }

 @media screen and (max-width: 375px) {
  flex-direction: column;
  padding: 20px 80px;
 }

 @media screen and (max-width: 320px) {
  flex-direction: column;
  padding: 20px 40px;
 }
`;

export const FeaturedProjectSectionContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 250px;
 /* padding: 100px 0px; */
`;

export const OtherProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;

  @media screen and (max-width: 1100px) {
   grid-template-columns: auto auto;
  }

  @media screen and (max-width: 680px) {
   display: flex;
   flex-direction: column;
  }

  @media screen and (max-width: 425px) {
   display: flex;
   flex-direction: column;
  }


  @media screen and (max-width: 375px) {
   display: flex;
   flex-direction: column;
  }

  @media screen and (max-width: 320px) {
   display: flex;
   flex-direction: column;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  padding-top: 20%;
  padding-bottom: 10%;
`;