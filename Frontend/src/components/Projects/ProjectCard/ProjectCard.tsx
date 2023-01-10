import React, { FC } from 'react';
import {AiOutlineFolder} from 'react-icons/ai';
import {FiGithub, FiExternalLink} from 'react-icons/fi';

import {CardContainer, IconContainer, Title, Description, TechStackText, CardBodyContainer, TechStackContainer, TechStackHeader } from './styles'

interface ProjectCardProps {
 githubLink: string;
 liveLink: string;
 itemTitle: string;
 itemDescription: string;
 itemTechStack: string[];
}

const ProjectCard: FC<ProjectCardProps> = ({ githubLink, liveLink, itemTitle, itemDescription, itemTechStack }) => {
 return (
   <CardContainer>
     <IconContainer>
        <span><AiOutlineFolder/></span>
        
        <div>
         <a href={githubLink} target="_blank" rel="noreferrer">
          <span className="darker-span">
            {githubLink ? <FiGithub /> : ''}
          </span>
         </a>
         <a href={liveLink} target="_blank" rel="noreferrer">
          <span className="darker-span">
            {liveLink ? <FiExternalLink /> : ''}
          </span>
         </a>
       </div>
     </IconContainer>
     <CardBodyContainer>
      <Title>{itemTitle}</Title>
      <Description>{itemDescription}</Description>
      <TechStackContainer>
        <TechStackHeader>Tech Stack:</TechStackHeader>
        <TechStackText>
          <p>{itemTechStack}</p>
        </TechStackText>
      </TechStackContainer>
     </CardBodyContainer>
   </CardContainer>
 );
};

export default ProjectCard;