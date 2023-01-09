import styled from "styled-components";

export const CardContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 300px;
 height: 400px;
 background-color: grey;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 border-radius: 5px;
 padding: 20px;
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