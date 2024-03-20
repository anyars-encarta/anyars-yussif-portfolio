import {
  github,
  linkedin,
  twitter,
  medium,
  youtube,
  facebook,
  instagram,
  stackoverflow,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  ruby,
  postgresql,
  rails,
  mysql,
  meta,
  starbucks,
  tesla,
  shopify,
  githubprofilefinder,
  qrcodegenerator,
  jobit,
  tripguide,
  threejs,
  DVLA,
  GHS,
  BMC,
  microverse,
} from "../assets";

const socialNetworks = [
  {
    name: "github",
    icon: github,
    link: 'https://github.com/anyars-encarta',
  },
  {
    name: "linkedin",
    icon: linkedin,
    link: 'https://www.linkedin.com/in/anyars-yussif/',
  },
  {
    name: "twitter",
    icon: twitter,
    link: 'https://twitter.com/anyarsencarta',
  },
  {
    name: "medium",
    icon: medium,
    link: 'https://medium.com/@anyarsencarta',
  },
  {
    name: "youtube",
    icon: youtube,
    link: 'www.youtube.com/@anyarsencarta',
  },
  {
    name: "facebook",
    icon: facebook,
    link: 'https://web.facebook.com/encartadegreat/',
  },
  {
    name: "instagram",
    icon: instagram,
    link: 'https://www.instagram.com/anyarsyussif/',
  },
  {
    name: "stackoverflow",
    icon: stackoverflow,
    link: 'https://stackoverflow.com/users/22085924/anyars-yussif',
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Ruby on Rails",
    icon: rails,
  },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  // },
];

const experiences = [
  {
    title: "National Service Personnel",
    company_name: "Driver and Vehicle Licencing Authority",
    icon: DVLA,
    iconBg: "#383E56",
    date: "August 2010 - September 2011",
    points: [
      "Before the introduction of computerized licensing, I developed an excel-based database for the district office where I served. The database enhanced the sorting and retrieval of clients' licenses and roadworthy documents by 90%.",
      "Having no IT infrastructure, I installed and networked a single Printer for the entire building which saved the office huge amounts they spent on buying printers, cartridges and toners. For my performance, I was maintained to work for the district on contract for 2 years after my service.",
    ],
  },
  {
    title: "System Network Administrator",
    company_name: "Gushegu District Hospital",
    icon: GHS,
    iconBg: "#E6DEDD",
    date: "October 2011 - September 2016",
    points: [
      "Using a manual folder filing system for patient care, I researched online articles and materials out of which I developed an electronic folder filing and retrieval system to alleviate the delays associated with patient folder retrieval. I later enhanced the system to include a Health Insurance Claims Management which generated claims in XML format for submission to the Insurance Authority. I was sponsored to obtain an MCSE certification for my performance in addition to the CompTIA A+, N+ and Linux + I already had.",
      "When I joined the hospital as a contract staff, the management were making plans to buy printers for each administrative office. I rather made them buy a single Network Photocopier which I configured and networked for the entire hospital to use. Considering the amount the facility saved which they could have spent in procuring multiple printers, 20% of the saved amount was awarded to me.",
    ],
  },
  {
    title: "I. T. Manager",
    company_name: "Baptist Medical Centre, Nalerigu",
    icon: BMC,
    iconBg: "#383E56",
    date: "September 2016 - Present",
    points: [
      "Despite having only qualification in networking, I developed and deployed a client-server Store Inventory Management System by relying on only online articles and tutorials to salvage the issues the facility was facing regarding stock and inventory. The software improved efficiency in stores management, significantly reduced expenditure on procurements, and raised revenue by 70%.",
      "In addition to my normal IT duties, I also served in the capacity of an In-service Training Coordinator. The numerous capacity building trainings and workshops I organized for staff significantly improved staff performance. I was awarded with a certificate of recognition for outstanding performance for that role.",
    ],
  },
  {
    title: "Full-stack Web Developer",
    company_name: "Highlighted Personal Projects",
    icon: microverse,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Mentoring junior developers, Peer programming, Project based learning, Collaboration.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GitHub Profile Finder",
    description:
      "GitHub Profile Finder is an interactive app that fetches user Github account information based on a specified username search string. The app makes use of the GitHub's public API. The API requests are currently limited to the 60 requests per hour due to GitHub's authentication policies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Webpack",
        color: "pink-text-gradient",
      },
    ],
    image: githubprofilefinder,
    live_code_link: "https://anyars-encarta.github.io/github-profile-finder/",
    source_code_link: "https://github.com/anyars-encarta/github-profile-finder",
  },
  {
    name: "QR Code Generator",
    description:
      "QR Code Generator is an interactive app that generates QR Codes based on user's input. It uses React's QRCode third party library. The QR Code is generated based on what the user types in the input field. This app could be integrated into any app that requires QR Code generation functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "webpack",
        color: "pink-text-gradient",
      },
    ],
    image: qrcodegenerator,
    live_code_link: "https://anyars-encarta.github.io/qr-code-generator/",
    source_code_link: "https://github.com/anyars-encarta/qr-code-generator",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    live_code_link: "#",
    source_code_link: "https://github.com/",
  },
];

export { socialNetworks, services, technologies, experiences, testimonials, projects };
