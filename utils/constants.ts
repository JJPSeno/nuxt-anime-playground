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
  media: undefined,
  greetings:'Salutations!',
  desription: 'I am a web developer, aspiring game developer and life-long learner who is currently refining my skills and trying to excel as a software developer. For now, I am pursuing some new experiences and developing habits like making open-source contributions, deploying my own website, and releasing a full game.',
}

const webDev = {
  media: undefined,
  public: {
    artPortfolio: {
      media: undefined,
      url: 'https://jkevinyu.vercel.app/',
      title: 'Artist Portfolio',
      description: 'A portfolio website for one of my best friends John Kevin Yu who is an artist from our home province of Cebu',
    },
    videoWebApp:{
      media: undefined,
      url: undefined,
      title: '',
      description: '',
    },
  },
  internalWork: {
    reportsWebApp: {
      title: 'Reports Web App',
      description: '',
    },
    eShopApp: {
      title: 'Local Mall App',
      description: '',
    },
    eLearningCMSApp: {
      title: 'E Learning Website',
      description: '',
    }
  }
}

const gameDev = {
  viscera: {
    media: undefined,
    url: 'https://edjuu.itch.io/viscera',
    title: 'Viscera',
    description: '',
    notes: 'Submission for Godot Wild Jam #70 with the theme of \'Folklore\''
  },
  powerOfFriendship: {
    media: undefined,
    url: 'https://edjuu.itch.io/power-of-friendship',
    title: 'POWER OF FRIENDSHIP',
    description: '',
    notes: 'Submission for GMTK Game Jam 2024 with the theme of \'Scaling\''
  },
  spinAndStrike: {
    media: undefined,
    url: 'https://edjuu.itch.io/spin-and-strike',
    title: 'Spin And Strike',
    description: '',
    notes: 'Submission for Pirate Software - Game Jam 16 with the theme of \'You are the Weapon\''
  },
}

export const constants = {
  navItems,
  heroDisc,
  webDev,
  gameDev,
}