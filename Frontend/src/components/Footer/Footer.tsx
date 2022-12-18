import Link from "next/link";
import React from "react";

import {FooterContainer, FooterLine, Foot, FooterText}  from './styles';

function Footer() {
  return (
   <>
    <FooterContainer>
     <FooterLine />
     <Foot>
     
      <FooterText href={"https://github.com/ahsanali17"} target="_blank">
       @ 2022 Design By Ahsan Ali Syed
      </FooterText>
        
      
      <FooterText href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} target="_blank">Special Link
      </FooterText>
     </Foot>
    </FooterContainer>
   </>
  )
}

export default Footer;