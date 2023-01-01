import styled from "styled-components";
import css from "styled-jsx/css";

export const TooltipWrapper = styled.div`
 position: relative;
 display: inline-flex;
`;

export const TooltipTarget = styled.span`
 border: none;
 background: none;
 padding: 5px;
 margin: 1pxx;
 color: inherit;
 cursor: inherit;
 display: flex;
`;

const handleToolTipPosition = (position: string) => {
 switch(position) {
  case "bottom": 
   return css`
    bottom: unset;
    top: calc(100% + 5px);
  `;
  case "left": 
   return css`
    margin-left: 0;
    width: 100%;
    left: unset;
    top: 50%;
    right: calc(100% + 5px);
    width: max-content;
   `;
   
  case "right": 
   return css`
    margin-left: 0;
    width: 100%;
    left: calc(100% + 5px);
    top: 50%;
    width: max-content;
  `;
  
  case "top": 
   return css`
   
   `;
   
  default: return css`
   bottom: calc(100% + 5px);
  `;
   
 }
}

export const CenterContainer = styled.div`
 position: absolute;
 width: 200px;
 margin-left: -100px;
 display: flex;
 justify-content: center;
 align-items: center;
 left: 50%;
 bottom: calc(100% + 5px);
 pointer-events: none;
 
 /* ${({position}) => {
  // handleToolTipPosition(position);
 }}; */
 
`;

export const TooltipBox = styled.span`
 position: absolute;
 background-color: #000;
 color: #fff;
 text-align: center;
 border-radius: 5px;
 padding: 10px 8px;
 font-size: 14px;
 box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
 
 &:after {
  content: '';
  position: absolute;
  width: 1px;
  height: 1px;
  border-width: 5px;
  border-style: solid;
  border-color: #000 transparent transparent transparent;
  left: calc(50% - 4.5px);
  top: 100%;
 }
 
 
 
`;

