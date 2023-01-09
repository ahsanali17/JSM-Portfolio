import styled from "styled-components";

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
`;
export const ProjectMainContainer = styled.div`
 align-items: center;
 box-align: center;
 display: flex;
 flex-direction: column;
 margin-top: 2.5rem;
 padding: 0 10rem;
 
 @media screen and (max-width: 375px) {
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
 }
 color: white;
`;

export const FeaturedProjectContainer = styled.div`
 display: flex;
 align-items: center;
`;

export const OtherProjectsContainer = styled.div`
`;

