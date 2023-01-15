import styled from "styled-components";

export const CardContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 20rem;
 height: 20rem;
 background-color: #118;
 box-shadow: 5px 5px 8px 0 rgb(125 121 121);
 border-radius: 5px;
 padding: 2rem 1.75rem;

 &:hover {
  translate: 0% -5px;
  box-shadow:5px 5px 15px 3px rgb(0 128 0);
 }
`;

export const IconContainer = styled.header`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 100%;

 span {
  font-size: 30px;
  color: white;

 }

 a {
  &:hover {
  translate: 0% -5px;
  }
 }

 div {
  display: flex;
  gap: 15px;
 }
`;

export const CardBodyContainer = styled.div`
 box-sizing: border-box;
 height: 100%;
 display: flex;
 flex-direction: column;
 padding: 10px 10px;
`;

export const Title = styled.h3`
 color: #fff;
 margin: 5px 0px 10px 0px;
 font-size: 1.5rem;
`;

export const Description = styled.p`
 color: #cccc;
 margin: 0;
`;

export const TechStackContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 padding: 5px 5px;
 margin-bottom: 0 10px;
`;

export const TechStackHeader = styled.h5`
 margin: 0px;
`;

export const TechStackParagraph = styled.p`
 color: #fff;
 display: flex;
 justify-content: start;
 align-items: center;
 width: 100%;
`;