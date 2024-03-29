import React from 'react';
import styled from 'styled-components';
import Link from "next/link";
import {Link as LinkS} from "react-scroll";
import * as FaIcons from 'react-icons/fa';

export const Nav = styled.nav`
 display: flex;
 justify-content: center;
 align-items: center;
 max-width: 100%;
 height: 80px;
 padding: 0px 50px;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index: 10;
 background: #fff;
 
 @media screen and (max-width: 960px) {
  transition: 0.8s all ease;
 }
 
`;

export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 height: 80px;
 z-index: 1;
 width: 100%;
 padding: 0 24px;
`;


export const MobileIcon = styled.div`
 display: none;
 
 @media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #000;
 }
`;

export const HamburgerIcon = styled(FaIcons.FaBars)`
  transition: all 0.8s all ease;
  &:hover {
    color: blue;
  }
`;

export const NavMenuContainer= styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavMenu = styled.ul`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 
 @media screen and (max-width: 768px) {
  display: none;
 }
`;

export const NavItem = styled.li`
 height: 80px;
`;

export const NavItemLink = styled(LinkS)`
 color: #000;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 
 &.active {
  border-bottom: 3px solid #01bf71;
 }
 
 &:hover {
  color: #01bf71;
 }
`;

export const NavResumeButton = styled.nav`
 display: flex;
 align-items: center;
 @media screen and (max-width: 768px) {
  display: none;
 }
`;

export const NavResumeBtnLink = styled(Link)`
  border-radius: 50px;
  background: #f343;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
   transition: all 0.2s ease-in-out;
   background: #01bf71;
   color: #010606;
  }
`;