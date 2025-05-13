import type { GameDevSection, WebDevSection } from "~/types/constants"

const navItems = {
  home: '#hero',
  webDev: '#web-dev',
  gameDev: '#game-dev',
  aboutMe: '#about-me',
  links: {
    id: '#links',
    github: 'https://github.com/JJPSeno',
    linkedin: 'https://www.linkedin.com/in/jewel-josef-seno-67a1b61a9/',
    itch: 'https://edjuu.itch.io/'
  }
}

const heroDisc = {
  media: [],
  greetings:'Salutations!',
  desription: 'I am a web developer, aspiring game developer and life-long learner who is currently refining my skills and trying to excel as a software developer. For now, I am pursuing some new experiences and developing habits like making open-source contributions, deploying my own website, and releasing a full game.',
}

const webDev: WebDevSection = {
  media: [],
  public: [
    {
      slug: 'artPortfolio',
      media: [],
      url: 'https://jkevinyu.vercel.app/',
      title: 'Artist Portfolio',
      description: 'A portfolio website for one of my best friends, John Kevin Yu, who is an artist from my home province of Cebu.',
      techUsed: ['react','framermotion'],
    },
    {
      slug: 'videoWebApp',
      media: [],
      url: undefined,
      title: 'Tv App',
      description: 'An Angular 19 project to try my hands on the modern version of this framework. Together with this, I wrote a Django API server for the backend.',
      techUsed: [],
    },
  ],
  internalWork: [
    {
      slug: 'reportsWebApp',
      media: [],
      title: 'Reports Web App',
      description: 'A web app that handles the collection and easy retrieval of company reports. This is the project I cut my teeth in Software Development and Dev Ops.',
      techUsed: [],
    },
    {
      slug: 'eShopApp',
      media: [],
      title: 'Local Mall App',
      description: `A mobile e-shopping mall app where we could provide a modern and convenient way to improve the 
      shopping experiences of users starting with our local area. For this project I mainly dealt with frontend work and api integration.`,
      techUsed: [],
    },
    {
      slug: 'eLearningCMSApp',
      media: [],
      title: 'E Learning Website',
      description: `A website where users could pay a subscription for access to a financial investments 
        e-learning app. For this project, we modernized a client's 
        old tech stack into one that could more seamlessly handle integrations to different external APIs, 
        providing a better web app experience for their users and an more rebust and feature-rich app for the client's admin and support team.
        I was heavily involved in the architecture of this app's conception and design phase, as well as full-stack development.`,
      techUsed: [],
    }
  ]
}

const gameDev: GameDevSection = {
  media: [],
  games: [
    {
      slug: 'viscera',
      media: [],
      url: 'https://edjuu.itch.io/viscera',
      title: 'Viscera',
      description: `An action game depicting an aswang's hunger. With the game jam's theme, I wanted to represent a bit of Filipino culture.`,
      notes: 'Submission for Godot Wild Jam #70 with the theme of \'Folklore\'',
      techUsed: [],
    },
    {
      slug: 'powerOfFriendship',
      media: [],
      url: 'https://edjuu.itch.io/power-of-friendship',
      title: 'POWER OF FRIENDSHIP',
      description: `A card game where you set friends onto the field and unleash THE POWER OF FRIENDSHIP. Different cards and different card orders affect 
      the damage of your friendship blast, so experiment with different orders!`,
      notes: `Submission for GMTK Game Jam 2024 with the theme of 'Scaling'`,
      techUsed: [],
    },
    {
      slug: 'spinAndStrike',
      media: [],
      url: 'https://edjuu.itch.io/spin-and-strike',
      title: 'Spin And Strike',
      description: 'A combat focused platformer, where you employ your expert parrying techniques to dish out your damage!',
      notes: 'Submission for Pirate Software - Game Jam 16 with the theme of \'You are the Weapon\'',
      techUsed: [],
    },
  ]
}

export const constants = {
  navItems,
  heroDisc,
  webDev,
  gameDev,
}