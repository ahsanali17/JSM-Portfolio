import {useRef, useState} from 'react'

import { TooltipWrapper, TooltipTarget, CenterContainer, TooltipBox } from 'react-tooltip';

function Tooltip({text, children}) {
 const [isHovered, setIsHovered] = useState(false);
 const [isFocused, setIsFocused] = useState(false)
 const targetRef = useRef(null);
 
 return (
   <>
    {/* <TooltipWrapper>
     <TooltipTarget>
     </TooltipTarget>
    </TooltipWrapper>
    <CenterContainer>
     <TooltipBox>
     </TooltipBox> 
    </CenterContainer>     */}
    <TooltipWrapper>
     <TooltipTarget>
      {children}
     </TooltipTarget>
    </TooltipWrapper>
   
   </>
  )
}

export default Tooltip
