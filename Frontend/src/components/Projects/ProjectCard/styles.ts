import styled from "styled-components";

export const CardContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 18rem;
 height: 100%;
 background-color: blue;
 box-shadow: 5px 5px 8px 0 rgb(125 121 121);
 border-radius: 5px;
 padding: 2rem 1.75rem;

 &:hover {
  translate: 0% -5px; 
  box-shadow:5px 5px 15px 3px rgb(125 121 121);
 }
`;

export const IconContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 100%;
`;

export const Title = styled.h1`
 color: #000;
 margin: 0;
`;

export const Description = styled.p`
 color: #cccccc;
 margin: 0;
`;

export const TechStackText = styled.div`
 color: #cccccc;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 width: 100%;
`;