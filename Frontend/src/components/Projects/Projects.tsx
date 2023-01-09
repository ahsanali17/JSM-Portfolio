import React from 'react'
import { FaAddressBook } from 'react-icons/fa';

import { ProjectCard } from '../index';
import { ProjectMainContainer, ProjectSectionContainer, FeaturedProjectContainer, OtherProjectsContainer } from './styles';

function Projects() {
  const projects = [
    {
      id: 1,
      githubCardLink: '',
      liveSiteLink: '',
      itemCardTitle: 'Lyriks',
      itemCardDescription: '',
      itemTechStack: ["Dog", "Cow"]
    },
    {
      id: 2,
      githubCardLink: '',
      liveSiteLink: '',
      itemCardTitle: 'Morrent',
      itemCardDescription: '',
      itemTechStack: ["Dog", "Cow"]
    },
    {
      id: 3,
      githubCardLink: '',
      liveSiteLink: '',
      itemCardTitle: 'Rocket Elevators',
      itemCardDescription: '',
      itemTechStack: ["Dog", "Cow"]
    }
  ]
  
  return (
    <ProjectSectionContainer>
      <ProjectMainContainer>
        <FeaturedProjectContainer>
          <>
            <div>
              <h1>Featured Projects</h1>
            </div>
            {projects.map((item, index) => (
              <div key={index}>
                <ProjectCard 
                  gihubLink={item.githubCardLink} 
                  liveLink={item.liveSiteLink}
                  itemTitle={item.itemCardTitle}
                  itemDescription={item.itemCardDescription}
                  itemTechStack={item.itemTechStack}
                />
              </div>
            ))}
          </>
        </FeaturedProjectContainer>
        <OtherProjectsContainer>
          
            <h1>Other Projects</h1>    
            {/* A gallery that automatically moves to the left and inside it will display cards of All my other projects */}
            
          
          
        </OtherProjectsContainer>
      </ProjectMainContainer>
    </ProjectSectionContainer>
  )
}

export default Projects;