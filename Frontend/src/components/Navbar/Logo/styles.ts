//@ts-nocheck
import styled from 'styled-components';
import Link from "next/link";
import Image from 'next/image';

//@ts-ignore
// Next Link Router Element
export const NavLink = styled(Link)`
 justify-self: flex-start;
 cursor: pointer;
 display: flex;
 align-items: center;
 margin-left: 24px;
 text-decoration: none;
`;

export const LogoImage = styled(Image)`
 background-color: #fff;
`

export const NameText = styled.p`
 color: #fff;
 font-size: x-large;
 font-family: 'Times New Roman', Times, serif;
 transition: transform 0.2s ease-in-out;

 &:hover {
  color: green;
  transform: rotateZ(-20deg);
 }
`;