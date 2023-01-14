import React from 'react'

import { FeaturedProjects, ProjectCard } from '../index';
import { ProjectMainContainer, ProjectSectionContainer, FeaturedProjectContainer, OtherProjectsContainer } from './styles';
import { projects, featuredProjects } from '../../utils/constants';

function Projects() {
  return (
    <ProjectSectionContainer>
      <ProjectMainContainer>
        <div>
          <h1>Featured Projects</h1>
        </div>

        <FeaturedProjectContainer>
          <FeaturedProjects picture="adw" projectTitle="ddd" projectDesc="www" projectTech={["dd", "dad", "adwd"]} liveSiteLink="nn" githubRepoLink="bbb" />
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