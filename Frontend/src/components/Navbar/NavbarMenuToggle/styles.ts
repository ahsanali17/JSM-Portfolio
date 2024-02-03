//@ts-nocheck
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
 width: 300px;
 height: 100%;
 background: #0d0d0d;
 display: grid;
 align-items: center;
 top: 0;
 right: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
 top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

 @media screen and (max-width: 320px) {
  width: 65%;
 }
`;

export const MenuIcon = styled.div`
 display: flex;
 flex: 1;
 position: absolute;
 top: 1.9rem;
 right: 2.2rem;
 background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline: none;
`;

export const CloseIcon = styled(FaIcons.FaTimes)`
 color: #fff;

 &:hover {
  color: red;
 }
`;

export const MobileNavbarMenuWrapper = styled.div`
 display: flex;
 flex: 1;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

export const MobileNavbarMenu = styled.ul`
 display: flex;
 flex-direction: column;
 text-align: center;
 padding: 10px 64px;

 @media screen and (max-width: 480px) {
  grid-template-rows: repeat(1, 50px);
 }

 @media screen and (max-width: 375px) {
  grid-template-rows: repeat(1, 50px);
 }

 @media screen and (max-width: 320px) {
  grid-template-rows: repeat(1, 40px);
 }
`;

export const MobileNavbarMenuLink = styled(LinkS)`
 color: #fff;
 cursor: pointer;

 &:hover {
  color: #FF2565;
  transition: 0.2s ease-in-out;
 }
`;

export const MobileResumeBtnWrap = styled.div`
 display: flex;
 justify-content: center;
`;

export const MobileResumeBtnLink = styled.a`
 border-radius: 50px;
 background: #01bf71;
 white-space: nowrap;
 padding: 16px 64px;
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

export const MobileNavbarMenuToggleContainer2 = styled.div`
  height: 200px;
  flex: 1;
`;

export const MobileNavbarEmailDiv = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
`;

export const MobileNavbarEmailLink = styled.a`
  color: white;

  &:hover {
    color: red;
  }
`;

export const SidebarSocialIconsWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-evenly;
 flex-direction: row;
 padding: 30px;
 width: 100%;
`;

export const NavbarSocialIconLinks = styled.a`
  color: white;
  font-size: 2rem;

  &:hover {
    color: red;
  }
`;