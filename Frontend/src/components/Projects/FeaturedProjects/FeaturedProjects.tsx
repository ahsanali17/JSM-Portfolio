import { FC } from 'react';
import { StaticImageData } from 'next/image';

import { Banner, FeaturedProjectContainer, BannerTitle, ProjectImage, BannerDescription, BannerUnorderedList, BannerLists, BannerLinkContainer } from './styles';

import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface IFeaturedProjectsProps {
  picture: string | StaticImageData;
  projectTitle: string;
  projectDesc: string;
  projectTech: string[];
  liveSiteLink: string;
  githubRepoLink: string;
}

const FeaturedProjects: FC<IFeaturedProjectsProps> = ({ picture, projectTitle, projectDesc, projectTech, liveSiteLink, githubRepoLink }) => {

  return (
    <FeaturedProjectContainer>

      <ProjectImage src={picture} alt="images for each project" />

      <Banner>
        <BannerTitle>{projectTitle}</BannerTitle>
        <BannerDescription>{projectDesc}</BannerDescription>
        <BannerUnorderedList>
          {projectTech.map((item, index) => (
            <BannerLists key={index}>{item}</BannerLists>
          ))}
        </BannerUnorderedList>
        <BannerLinkContainer>
          <a href={githubRepoLink} target="_blank" rel="noreferrer">
            <span>
              {githubRepoLink ? <FiGithub /> : ''}
            </span>
          </a>
          <a href={liveSiteLink} target="_blank" rel="noreferrer">
            <span>
              {liveSiteLink ? <FiExternalLink /> : ''}
            </span>
          </a>

        </BannerLinkContainer>
      </Banner>

    </FeaturedProjectContainer>
  )
}

export default FeaturedProjects;
