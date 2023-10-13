import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.footer`
 padding-left: 6%;
 padding-right: 4%;
`;

export const FooterLine = styled.hr`
 height: 5px;
`;

export const Foot = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-evenly;
`;

export const FooterText = styled.link`
 font-size: medium;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;

 &:hover {
  color: red;
 }
`;
