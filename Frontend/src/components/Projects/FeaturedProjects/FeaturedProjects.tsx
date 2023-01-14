import {FC} from 'react';
import Image from 'next/image';

import { Banner, BannerContainer1, FeaturedProjectContainer, BannerTitle, ProjectImage, ProjectImageContainer, BannerDescription, BannerUnorderedList, BannerLists, BannerLinkContainer } from './styles';

import { AboutPicture } from '../../../assets/index';

interface IFeaturedProjectsProps {
  picture: string;
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
      <ProjectImage src={AboutPicture} alt="dwad" width={250} height={200} />
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
         <a href={liveSiteLink}>
           Live Site
         </a>

        <a href={githubRepoLink}>
           Github
        </a>
        </BannerLinkContainer>
     </Banner>

    </FeaturedProjectContainer>
  )
}

export default FeaturedProjects;
