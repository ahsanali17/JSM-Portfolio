//@ts-nocheck
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
 margin-bottom: 1rem;
`;
// @ts-ignore
export const FooterText = styled(Link)`
 font-size: large;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 z-index: 1;

 &:hover {
  color: red;
 }
`;
