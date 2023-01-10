import React from 'react'

import { ProjectCard } from '../index';
import { ProjectMainContainer, ProjectSectionContainer, FeaturedProjectContainer, OtherProjectsContainer } from './styles';

function Projects() {
  const projects = [
    {
      id: 1,
      githubCardLink: '',
      liveSiteLink: 'https://lyriks-music-jngo27.vercel.app/home',
      itemCardTitle: 'Lyriks',
      itemCardDescription: 'lroem upso aiwdbiwa dwodhwoa woadinawoid owadnwao dwuanow wdoina owdn aowddjo',
      itemTechStack: ["NextJS ", "React ", "Redux ", "Styled Components ", "Shazam API" ]
    },
    {
      id: 2,
      githubCardLink: '',
      liveSiteLink: '',
      itemCardTitle: 'Morrent',
      itemCardDescription: 'lroem upso aiwdbiwa dwodhwoa woadinawoid owadnwao dwuanow wdoina owdn aowddjo',
      itemTechStack: ["Typescript ", "React ", "Styled Components ", "ExpressJS ", "MongoDB ", "GoogleOAuth 2 ", "PassportJS ", "Stripe" ]
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
      githubCardLink: 'a',
      liveSiteLink: 'a',
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
                githubLink={item.githubCardLink} 
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