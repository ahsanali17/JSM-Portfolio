import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-scroll';

export const NavbarMenuToggleContainer = styled.aside`
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
 /* opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
 top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; */
 top: 0;
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
export const MobileNavbarMenuLink = styled(Link)`
 color: #fff;
 cursor: pointer;
 
 &:hover {
  color: #f35fd2;
 }
`;

export const MobileResumeBtnWrap = styled.div`

`;

export const MobileResumeBtnLink = styled(Link)``;