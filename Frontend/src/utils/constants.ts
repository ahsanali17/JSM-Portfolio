import {SiJavascript, SiSolidity, SiReact, SiNextdotjs, SiVite, SiRubyonrails,SiTypescript, SiRedux, SiMysql, SiGraphql, SiMongodb, SiJest } from 'react-icons/si';
import {FaHardHat, FaGithub, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa';
import { Lyriks, Morrent } from '../assets';

export const nameString = [
  "Hello world, my name is Ahsan Ali Syed. I'm a Software Developer from Montreal, Canada.<br/><br/> I build ReactJS full-stack applications with modern technologies. On my free time I write smart contracts.",
]


export const SidebarData = [
  {path: 'https://github.com/ahsanali17', icon: FaGithub},
  {path: 'https://www.linkedin.com/in/ahsan-syed-7b26b41a4/', icon: FaLinkedin},
  {path: 'https://twitter.com/ahsansalisyed', icon: FaTwitter},
  {path: 'https://www.instagram.com/assa.sinn/', icon: FaInstagram},
]


export const techStackData = [
 {icon: SiJavascript, iconName: 'Javascript'},
 {icon: SiSolidity, iconName: 'Solidity'},
 {icon: SiReact, iconName: 'React'},
 {icon: SiNextdotjs, iconName: 'Next.js'},
 {icon: SiVite, iconName: 'Vite'},
 {icon: SiRubyonrails, iconName: 'Ruby on Rails'},
 {icon: SiTypescript, iconName: 'Typescript'},
 {icon: SiRedux, iconName: 'Redux'},
 {icon: SiMysql, iconName: 'MySql'},
 {icon: SiGraphql, iconName: 'GraphQl'},
 {icon: SiMongodb, iconName: 'MongoDB'},
 {icon: SiJest, iconName: 'Jest'},
 {icon: FaHardHat, iconName: 'Hardhat'},
]

export const featuredProjects = [
  {
    picture: Lyriks,
    projectTitle: 'Lyriks',
    projectDesc: 'A music application that allows users to explore their favorite artists and listen to music ',
    projectTech: ["Next.js", "React", "Redux Toolkit", "Styled Components", "Shazam API"],
    liveSiteLink: "https://lyriks-music-jngo27.vercel.app/home",
    githubRepoLink: "https://github.com/ahsanali17/Lyriks",
  },
  {
    picture: Morrent,
    projectTitle: 'Morrent Car Rental',
    projectDesc: 'Online Car booking system to allow users to rent cars',
    projectTech: ["Typescript", "React", "Styled Components", "Express", "MongoDB", "Google OAuth 2.0", "Passport.js", "Stripe"],
    liveSiteLink: "https://morrent-car-rental-pnkcs9dbu-ahsanali17.vercel.app/",
    githubRepoLink: "https://github.com/ahsanali17/Morrent-Car-Rental",
  },
  // {
  //   picture: '',
  //   projectTitle: '',
  //   projectDesc: '',
  //   projectTech: ["", ""],
  //   liveSiteLink: "",
  //   githubRepoLink: "",
  // },
 ]

export const projects = [
 {
   id: 1,
   githubCardLink: 'https://github.com/ahsanali17/Rocket_Elevators_Foundation',
   liveSiteLink: 'https://rocketelevatorslp.com/',
   itemCardTitle: 'Rocket Elevators',
   itemCardDescription: 'Elevator installation service website',
   itemTechStack: ["Ruby on Rails ", "HTML ", "CSS ", "Javascript ", "Twillio ", "SendGrid ", "ZenDesk ", "IBM Watson " ]
 },
 {
   id: 2,
   githubCardLink: 'https://github.com/ahsanali17/Rocket-Elevators-Rest-API',
   liveSiteLink: '',
   itemCardTitle: 'Rocket Elevators REST API',
   itemCardDescription: 'Restful API created to interact with Rocket Elevators website',
   itemTechStack: [ "ASP-NetCore " ,"C#" ]
 },
 {
   id: 3,
   githubCardLink: 'https://github.com/ahsanali17/Rocket-Elevators-Mobile',
   liveSiteLink: '',
   itemCardTitle: 'Rocket Elevators Mobile App',
   itemCardDescription: 'A mobile app created for Rocket Elevator technicians',
   itemTechStack: [ "Expo ","Javascript ", "React-Native"]
 },
//  {
//    id: 4,
//    githubCardLink: '',
//    liveSiteLink: '',
//    itemCardTitle: 'Rocket Elevators',
//    itemCardDescription: 'lroem upso aiwdbiwa dwodhwoa woadinawoid owadnwao dwuanow wdoina owdn aowddjo',
//    itemTechStack: ["Dog", "Cow"]
//  },
//  {
//    id: 5,
//    githubCardLink: 'a',
//    liveSiteLink: 'a',
//    itemCardTitle: 'Rocket Elevators',
//    itemCardDescription: 'lroem upso aiwdbiwa dwodhwoa woadinawoid owadnwao dwuanow wdoina owdn aowddjo',
//    itemTechStack: ["Dog", "Cow"]
//  },
//  {
//    id: 6,
//    githubCardLink: '',
//    liveSiteLink: '',
//    itemCardTitle: 'Rocket Elevators',
//    itemCardDescription: 'lroem upso aiwdbiwa dwodhwoa woadinawoid owadnwao dwuanow wdoina owdn aowddjo',
//    itemTechStack: ["Dog", "Cow"]
//  }
]