import React, { ReactElement } from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import { Link as LinkS} from 'react-scroll';
import Link from 'next/link';

interface NavbarMenuToggleContainerProps {
 isOpen: boolean;
}

export const NavbarMenuToggleContainer = styled.aside<NavbarMenuToggleContainerProps>`
 position: fixed;
 z-index: 999;
 width: 100%;
 height: 100%;
 background: #0d0d0d;
 display: grid;
 align-items: center;
 top: 0;
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
 top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
 /* top: 0; */
`;

export const MenuIcon = styled.div`
 position: absolute;
 top: 1.2rem;
 right: 1.5rem;
 background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline: none;

`;

export const CloseIcon = styled(FaIcons.FaTimes)`
 color: #fff;
`;

export const MobileNavbarMenuWrapper = styled.div``;
export const MobileNavbarMenu = styled.div``;
export const MobileNavbarMenuLink = styled(LinkS)`
 color: #fff;
 cursor: pointer;
 
 &:hover {
  color: #f35fd2;
  transition: 0.2s ease-in-out;
 }
`;

export const MobileResumeBtnWrap = styled.div`
 display: flex;
 justify-content: center;
`;

export const MobileResumeBtnLink = styled(Link)`
 border-radius: 50px;
 background: #01bf71;
 white-space: nowrap;
 padding: 16pc 64px;
 color: #010606;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;
 
 &:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
 }
`;