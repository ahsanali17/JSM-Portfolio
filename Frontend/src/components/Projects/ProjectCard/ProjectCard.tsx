import React, { FC } from 'react';
import {AiOutlineFolder} from 'react-icons/ai';
import {FiGithub, FiExternalLink} from 'react-icons/fi';

import {CardContainer, IconContainer, Title, Description, TechStackText } from './styles'

interface ProjectCardProps {
 gihubLink: string;
 liveLink: string;
 itemTitle: string;
 itemDescription: string;
 itemTechStack: string[];
}

const ProjectCard: FC<ProjectCardProps> = ({ gihubLink, liveLink, itemTitle, itemDescription, itemTechStack }) => {
 return (
   <CardContainer>
     <IconContainer>
        <span><AiOutlineFolder/></span>
        
        <div>
         <a href={gihubLink} target="_blank" rel="noreferrer">
          <span><FiGithub /></span>
         </a>
         <a href={liveLink} target="_blank" rel="noreferrer">
          <span><FiExternalLink /></span>
         </a>
       </div>
     </IconContainer>
     <Title>{itemTitle}</Title>
     <Description>{itemDescription}</Description>
     <TechStackText>
       {itemTechStack.map((string, index) => (
         <p key={index}>{string}</p>
       ))}
     </TechStackText>
   </CardContainer>
 );
};

export default ProjectCard;