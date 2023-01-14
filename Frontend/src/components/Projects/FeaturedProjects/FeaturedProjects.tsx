import {FC} from 'react';
import Image, { StaticImageData } from 'next/image';

import { Banner, FeaturedProjectContainer, BannerTitle, ProjectImage, ProjectImageContainer, BannerDescription, BannerUnorderedList, BannerLists, BannerLinkContainer } from './styles';

import { AboutPicture } from '../../../assets/index';

interface IFeaturedProjectsProps {
  picture: string | StaticImageData;
  projectTitle: string;
  projectDesc: string;
  projectTech: string[];
  liveSiteLink: string;
  githubRepoLink: string;
 }

const FeaturedProjects: FC<IFeaturedProjectsProps> = ({picture, projectTitle, projectDesc, projectTech, liveSiteLink, githubRepoLink }) => {

 return (
    <FeaturedProjectContainer>

     <ProjectImageContainer>
      <ProjectImage src={picture} alt="images for each project" width={250} height={200} />
     </ProjectImageContainer>

     <Banner>
       <BannerTitle>{projectTitle}</BannerTitle>
       <BannerDescription>{projectDesc}</BannerDescription>
       <BannerUnorderedList>
        {projectTech.map((item, index) => (
          <BannerLists key={index}>{item}</BannerLists>
         ))}
       </BannerUnorderedList>
        <BannerLinkContainer>
         <a href={liveSiteLink} target="_blank" rel="noreferrer">
           Live Site
         </a>

        <a href={githubRepoLink} target="_blank" rel="noreferrer">
           Github
        </a>
        </BannerLinkContainer>
     </Banner>

    </FeaturedProjectContainer>
  )
}

export default FeaturedProjects;
