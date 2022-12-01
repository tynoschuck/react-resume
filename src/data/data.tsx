import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
//import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  //TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Tynoshore - Dado Invernizzi's Resume ",
  description: "Personal resume website built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  //Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello there!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm <strong className="text-stone-100">Dado</strong>, aka <strong className="text-stone-100">tynoschuck</strong> on the web. I'm a London based <strong className="text-stone-100">Front End Engineer</strong>, currently working
        at <strong className="text-stone-100">Bytedance</strong> as a Pushflow Content Moderator for TikTok. Welcome to my React website!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I enjoy <strong className="text-stone-100">playing videogames</strong>,
        chilling at home with <strong className="text-stone-100">a good book</strong> or <strong className="text-stone-100">solving crosswords</strong>, and <strong className="text-stone-100">walking around London Town</strong> with my girlfriend.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'London', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Italian', Icon: FlagIcon},
    {label: 'Interests', text: 'Gaming, Coding, Cooking', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Milan', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Bytedance Inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Italian',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Russian',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'CSS',
        level: 7,
      },
      {
        name: 'Javascript',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2022',
    location: 'freeCodeCamp',
    title: "freeCodeCamp Certifications",
    content: <ul>
    <li>● <a href='https://www.freecodecamp.org/certification/tynoschuck/javascript-algorithms-and-data-structures'>
    JavaScript Algorithms and Data Structures</a></li>
    <li>● <a href='https://www.freecodecamp.org/certification/tynoschuck/front-end-development-libraries'>
    Front End Development Libraries</a></li>
  </ul>,
  },
  {
    date: '2020-2022',
    location: 'LinkedIn',
    title: "LinkedIn Learning Certifications",
    content: <ul>
    <li>● Became a Front-End Web Developer</li>
    <li>● Become an Advanced WordPress Developer</li>
    <li>● JavaScript Essential Training</li>
    <li>● Learning React.js</li>
  </ul>,
  },
  {
    date: 'April 2016',
    location: 'University of Milan',
    title: "Master's Degree in Culture and History of Publishing System",
    content: <p></p>,
  },
  
  {
    date: 'September 2012',
    location: 'Catholic University of the Sacred Heart of Milan',
    title: "Bachelor's Degree in Languages of Media",
    content: <p></p>
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2019 - Present',
    location: 'Bytedance Inc.',
    title: 'TikTok Pushflow Content Moderator',
    content: 
    <ul>
    <li>● Created and efficiently managed a team for the workflow distribution in the Italian market.</li>
    <li>● Supported the Team Lead with shift coordination, monitored and forecasted the incoming of the content to be
moderated.</li>
<li>● Managed and supported the onboarding process of the new joiners.</li>
<li>● Managed training sessions related to tasks and promotion of company culture.</li>
<li>● Ensured legal compliance and safety of content uploaded to the short video platforms, as well as the
development, improvement and maintenance of standards for the security of the online communities.</li>
  </ul>
    ,
  },

];

/**
 * Testimonial section
 
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};
*/
/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'dav.invernizzi@gmail.com',
      href: 'mailto:dav.invernizzi@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'London, UK',
      href: 'https://www.google.ca/maps/place/London/@51.5286416,-0.1015987,11z',
    },
    {
      type: ContactType.Instagram,
      text: '@tynoshuck',
      href: 'https://www.instagram.com/tynoschuck/',
    },
    {
      type: ContactType.Github,
      text: 'tynoschuck',
      href: 'https://github.com/tynoschuck',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tynoschuck'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/20654982/tynoschuck'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/davide-invernizzi/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tynoschuck/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/tynoschuck'},
];
