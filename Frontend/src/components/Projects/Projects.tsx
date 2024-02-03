import React from 'react'

import { FeaturedProjects, ProjectCard } from '../index';
import { ProjectMainContainer, ProjectSectionContainer, TitleDiv, FeaturedProjectContainer, OtherProjectsContainer } from './styles';
import { projects, featuredProjects } from '../../utils/constants';

function Projects() {
  return (
    <ProjectSectionContainer id="#Projects">
      <ProjectMainContainer>
        <TitleDiv>
          <h1>Featured Projects</h1>
        </TitleDiv>

        <FeaturedProjectContainer>
          {featuredProjects.map((item, index) => (
            <div key={index}>
              <FeaturedProjects
                picture={item.picture}
                projectTitle={item.projectTitle}
                projectDesc={item.projectDesc}
                projectTech={item.projectTech}
                liveSiteLink={item.liveSiteLink}
                githubRepoLink={item.githubRepoLink} />
            </div>
          ))}
        </FeaturedProjectContainer>

        <TitleDiv>
          <h1>Other Projects</h1>
        </TitleDiv>

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