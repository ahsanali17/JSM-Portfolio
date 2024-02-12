//@ts-nocheck
import styled from "styled-components";

import Image from 'next/image';

export const FeaturedProjectContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 width: 65rem;
 height: 35rem;
 background-color: blue;
 border-radius: 5px;

 @media screen and (max-width: 1024px) {
  width: 42rem;
 }
 @media screen and (max-width: 768px) {
  width: 35rem;
 }
 @media screen and (max-width: 600px) {
  width: 25rem;
 }
 @media screen and (max-width: 425px) {
  width: 20rem;
 }

`;


export const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  opacity: 0.8;
  filter: brightness(45%) grayscale(1);
  transition: filter 2000ms;

  &:hover {
   filter: brightness(100%) grayscale(0);
  }
`;

export const Banner = styled.div`
 display: flex;
 flex-direction: column;
 background-color: white;
 color: black;
 width: 100%;
 padding: 0px 20px 10px 20px;
`;

export const BannerTitle = styled.h3`
 margin: 0;
 padding: 15px 0px 0px 0px;
 font-size: 1.75rem;
`;

export const BannerDescription = styled.p`
 margin: 0 0 0.5rem;
 font-size: 1.25rem;
`;

export const BannerUnorderedList = styled.ul`
 display: flex;
 flex-wrap: wrap;
 margin: 0.5rem 0;
 padding: 0 1rem;
`;

export const BannerLists = styled.li`
 margin-right: 1.5rem;
 font-size: 1rem;
 text-transform: uppercase;
 letter-spacing: 0.15em;
`;

export const BannerLinkContainer = styled.div`
  padding: 10px 0px 10px 0px;

  a {
   margin-right: 1.5rem;
   font-size: 1rem;
   letter-spacing: 0.15em;

   &:hover {
    color: red;
   }

   span {
    font-size: 1.45rem;
   }
  }
`;