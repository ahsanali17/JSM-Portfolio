//@ts-nocheck
import styled from 'styled-components'

export const RightSidebarWrapper = styled.div`
 box-sizing: border-box;
 border-radius: 20px;

 transition: .6s;
 position: fixed;
 right: 3.5rem;
 bottom: 3rem;
 width: 100px;

 @media screen and (max-width: 768px) {
  display: none;
 }
`;

export const RightSidebarDiv = styled.div`
 display: flex;
 flex-direction: column;
 -webkit-box-align: center;
 align-items: center;
 position: relative;
`;

export const RightSidebarLink = styled.a`
 margin: 20px auto;
 padding: 10px;
 font-family: 'Times New Roman', Times, serif;
 color: #fff;
 /* font-size: var(--fz-xxs); */
 line-height: var(--fz-lg);
 letter-spacing: 0.1em;
 -webkit-writing-mode: vertical-rl;
 writing-mode: vertical-rl;

 &:hover {
  color: green;
 }
`;