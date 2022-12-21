import styled from 'styled-components';
import Link from "next/link";


// Next Link Router Element
export const NavLink = styled(Link)`
 justify-self: flex-start;
 cursor: pointer;
 display: flex;
 align-items: center;
 margin-left: 24px;
 text-decoration: none;
`;

export const NameText = styled.p`
 color: #000;
 font-size: x-large;
 font-family: 'Times New Roman', Times, serif;
 
 &:hover {
  color: blue;
 }
`;