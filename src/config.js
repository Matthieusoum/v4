module.exports = {
  siteTitle: 'Matthieu Soum | Growth & Business Development',
  siteDescription: 'Hello, I am a growth & business manager based in Paris, FR. My mission consists to build a strong method to bring new opportunities and increase sales for companies.',
  siteKeywords: 'Matthieu Soum, Matthieu, Soum, MatthieuSoum, business developer, account executive, account manager, business, SDR, BDR, sales development representative, business development representative, digital marketing, growth, growth marketing',
  siteUrl: 'https://soum.co',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-171507141-1',
  googleVerification: 'O7z8yCnuSLO4L7OVWKRLJ7J7GaZnf3DoYcwgrSrr8zk',
  name: 'Matthieu Soum',
  location: 'Paris, FR',
  email: 'matthieu@soum.co',
  github: 'https://github.com/matthieusoum',
  linkedin: 'https://linkedin.com/in/matthieusoum',
  socialMedia: [
    /*{
      name: 'GitHub',
      url: 'https://github.com/matthieusoum',
    },*/
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/matthieusoum',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
