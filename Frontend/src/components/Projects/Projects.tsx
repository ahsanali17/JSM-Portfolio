import React from 'react'

import { FeaturedProjects, ProjectCard } from '../index';
import { ProjectMainContainer, ProjectSectionContainer, FeaturedProjectContainer, OtherProjectsContainer } from './styles';
import { projects, featuredProjects } from '../../utils/constants';

function Projects() {
  return (
    <ProjectSectionContainer id="#Projects">
      <ProjectMainContainer>
        <div>
          <h1>Featured Projects</h1>
        </div>

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