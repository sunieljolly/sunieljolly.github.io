import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Suniel Jolly', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Suniel Jolly',
  subtitle: "JS Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://github.com/sunieljolly', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'FPL Toolbox',
    info: 'A webapp written in HTML, CSS and JavaScript and developed with the Apache Cordova framework.',
    info2: 'The app is a tool to provide a user further insignts into their Fantasy Premier League team. It does this by utilising Google Visualisations to present them the data.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },  
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Premier League News Webscraper',
    info: 'An application built using Node.js and Express',
    info2: 'This web scraper extracts upto date news articles, about the Premier League, from reliable UK news soruces.',
    url: 'https://rapidapi.com/sunieljolly@googlemail.com/api/premier-league-news/',
    repo: '', // if no repo, the button will not show up
  },  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sunieljolly@googlemail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/sunieljolly',
    }, 
/*     {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
/*     {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sunieljolly',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
