import React from 'react';
import styled from 'styled-components';

interface  NavBarHeaderProps {
 isOpen?: boolean;
}

export const NavbarHeader = styled.header`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 position: relative;
 padding: 0 2rem;
 color: black;
 background-color: red;
 `;

export const NavbarNav = styled.div`
 display: contents;
 @media (max-width: 768px) {
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  max-height: ${(props: NavBarHeaderProps) => (props.isOpen ? "300px" : "0")};
  transition: max-height 0.3s ease-in; 
  width: 100%;
 }
 `;

export const NavbarItem = styled.a`
 list-style: none;
 padding: 1rem 0 1.25rem;
 margin: 0 2rem;
 text-decoration: none;
 color: green;
 
 &:hover  {
  color: blue;
  cursor: pointer;
 }
 `;

export const NavbarItemIcons = styled.image`


`;

export const NavButton = styled.button`
 background: transparent;
 border: none;
 cursor: pointer;
 display: none;
 flex-direction: column;
 outline: none;
 padding: 5px;
 
 span {
  height: 2px;
  width: 25px;
  background-color: green;
  margin: 4px;
  border-radius: 5px;
 }
 
 @media (max-width: 768px) {
  display: flex;
 }
 
 /* visibility: hidden;
 opacity: 0; */

`;
