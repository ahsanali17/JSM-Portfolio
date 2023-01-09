import React from 'react'
import { FaAddressBook } from 'react-icons/fa';

import { ProjectCard } from '../index';
import { ProjectMainContainer, ProjectSectionContainer, FeaturedProjectContainer, OtherProjectsContainer, ProjectCardContainer } from './styles';

function Projects() {
  const projects = [
    {
      id: 1,
      githubCardLink: '',
      liveSiteLink: '',
      itemCardTitle: 'Lyriks',
      itemCardDescription: 'lroem upso aiwdbiwa dwodhwoa woadinawoid owadnwao dwuanow wdoina owdn aowddjo',
      itemTechStack: ["Dog", "Cow"]
    },
    {
      id: 2,
      githubCardLink: '',
      liveSiteLink: '',
      itemCardTitle: 'Morrent',
      itemCardDescription: 'lroem upso aiwdbiwa dwodhwoa woadinawoid owadnwao dwuanow wdoina owdn aowddjo',
      itemTechStack: ["Dog", "Cow"]
    },
    {
      id: 3,
      githubCardLink: '',
      liveSiteLink: '',
      itemCardTitle: 'Rocket Elevators',
      itemCardDescription: 'lroem upso aiwdbiwa dwodhwoa woadinawoid owadnwao dwuanow wdoina owdn aowddjo',
      itemTechStack: ["Dog", "Cow"]
    },
    {
      id: 4,
      githubCardLink: '',
      liveSiteLink: '',
      itemCardTitle: 'Rocket Elevators',
      itemCardDescription: 'lroem upso aiwdbiwa dwodhwoa woadinawoid owadnwao dwuanow wdoina owdn aowddjo',
      itemTechStack: ["Dog", "Cow"]
    },
    {
      id: 5,
      githubCardLink: '',
      liveSiteLink: '',
      itemCardTitle: 'Rocket Elevators',
      itemCardDescription: 'lroem upso aiwdbiwa dwodhwoa woadinawoid owadnwao dwuanow wdoina owdn aowddjo',
      itemTechStack: ["Dog", "Cow"]
    },
    {
      id: 6,
      githubCardLink: '',
      liveSiteLink: '',
      itemCardTitle: 'Rocket Elevators',
      itemCardDescription: 'lroem upso aiwdbiwa dwodhwoa woadinawoid owadnwao dwuanow wdoina owdn aowddjo',
      itemTechStack: ["Dog", "Cow"]
    }
  ]
  
  return (
    <ProjectSectionContainer>
      <ProjectMainContainer>
        <div>
          <h1>Featured Projects</h1>
        </div>
        
        <FeaturedProjectContainer>
          <>
          </>
        </FeaturedProjectContainer>
        
        <div>
          <h1>Other Projects</h1>    
        </div>
        
        <OtherProjectsContainer>
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
        </OtherProjectsContainer>
      </ProjectMainContainer>
    </ProjectSectionContainer>
  )
}

export default Projects;