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
  scrollprogressindicator,
  imageslider,
  starrating,
  randomcolorgenerator,
  accordion,
  book_store,
  math_magician,
  awesome_books,
  qi_summit,
  to_do_list,
  to_do_app,
  leaderboard,
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
    name: "X",
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
    name: "Scroll Progress Indicator",
    description:
      "Scroll Progress Indicator is an interactive app that displays the progress of a user scrolling through the page. The progress is displayed both by a progress bar and by percentage. This scroll progress indicator could be integrated into any app that requires a similar functionality.",
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
    image: scrollprogressindicator,
    live_code_link: "https://anyars-encarta.github.io/scroll-progress-indicator/",
    source_code_link: "https://github.com/anyars-encarta/scroll-progress-indicator",
  },
  {
    name: "Image Slider",
    description:
      "Encarta Image Slider is an interactive app that fetches images from an API endpoint. Users could slide through the images by clicking on the left and right arrows at the extreme ends of the images. Users could also jump to specific images by clicking on the individual circle indicators at the bottom of the images.",
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
    image: imageslider,
    live_code_link: "https://anyars-encarta.github.io/encarta-image-slider/",
    source_code_link: "https://github.com/anyars-encarta/encarta-image-slider",
  },
  {
    name: "Star Rating",
    description:
      "Encarta Stars Rating is an interactive app with a functionality to give stars rating. The stars are highlighted as the user hovers over them. The highlight stops on a particular star the user clicks on.",
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
    image: starrating,
    live_code_link: "https://anyars-encarta.github.io/encarta-star-rating/",
    source_code_link: "https://github.com/anyars-encarta/encarta-star-rating",
  },
  {
    name: "Random Color Generator",
    description:
      "Encarta Random Color Generator is an interactive app with a functionality to generate and change the background color of the app. The colors could be generated using either the HEX or the RGB format.",
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
    image: randomcolorgenerator,
    live_code_link: "https://anyars-encarta.github.io/encarta-random-color-generator/",
    source_code_link: "https://github.com/anyars-encarta/encarta-random-color-generator",
  },
  {
    name: "Accordion",
    description:
      "Encarta Accordion is an interactive app with an expand/collapse action. The details for each heading is displayed when the user clicks on the heading. Once one header is expanded, all other expanded headings are closed automatically. There is an option to enable multiple selection that allows the user to expand multiple headings at the same time.",
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
    image: accordion,
    live_code_link: "https://anyars-encarta.github.io/encarta-accordion/",
    source_code_link: "https://github.com/anyars-encarta/encarta-accordion",
  },
  {
    name: "Book Store",
    description:
      "The Book Store app was designed to manage variety of book collections. The user can add books as well as view variety of books available. The user can also view their reading progress of each book. Though that functionality has not been implemented yet, the visual display has been developed to enhance the user interface and for users to understand how the app works. The books added are stored in the local storage of the users computer. On the launch of the app, the books are fetched from the local storage and displayed on the UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: book_store,
    live_code_link: "https://anyars-encarta.github.io/book-store/",
    source_code_link: "https://github.com/anyars-encarta/book-store",
  },
  {
    name: "Math Magician",
    description:
      "This is a Math Magician app designed to handle and perform mathematical calculations. It has a Home Page which welcomes users to the app, a Calculator page which shows the calculator for calculations and a Quote page which displays quotes tht refresh every 15 seconds.",
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
    image: math_magician,
    live_code_link: "https://anyars-encarta.github.io/math-magician/",
    source_code_link: "https://github.com/anyars-encarta/math-magician",
  },
  {
    name: "Awesome Books",
    description:
      "Awesome Books is a simple program for adding a list of books. This project was built with HTML, CSS and JavaScript. The page displays books added and gives the chance to remove books from the list.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: awesome_books,
    live_code_link: "https://mulugithub.github.io/Awesome_Books/",
    source_code_link: "https://github.com/anyars-encarta/Awesome-Books",
  },
  // {
  //   name: "Quiality Improvement Summit 2023",
  //   description:
  //     "This is a website about Quality Improvement Summit 2023 organised by Encarta Change Managers Incorporated. The event aims at bringing individuals from different disciplines who are all passionate about Quality in all aspects of human endeavour.",
  //   tags: [
  //     {
  //       name: "HTML 5",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS 3",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: qi_summit,
  //   live_code_link: "https://anyars-encarta.github.io/First-Capstone/",
  //   source_code_link: "https://github.com/anyars-encarta/First-Capstone",
  // },
  // {
  //   name: "To Do List",
  //   description:
  //     "Personal to Do App is a program for keeping track of my to do activities with dates functionality. This project was built with HTML, CSS and JavaScript. The page displays tasks added to the list, with options to edit or remove tasks from the list.",
  //   tags: [
  //     {
  //       name: "HTML 5",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS 3",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: to_do_list,
  //   live_code_link: "https://anyars-encarta.github.io/Personal-to-Do-App/",
  //   source_code_link: "https://github.com/anyars-encarta/Personal-to-Do-App",
  // },
  {
    name: "To Do App",
    description:
      "To Do App is a program for keeping track of my to do activities with dates functionality. This project was built with HTML, CSS and JavaScript. The page displays tasks added to the list, with options to edit or remove tasks from the list.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: to_do_app,
    live_code_link: "https://anyars-encarta.github.io/To-do-list/dist/",
    source_code_link: "https://github.com/anyars-encarta/To-do-list",
  },
  {
    name: "Leaderboard",
    description:
      "This is a Leaderboard List App project to display scores of players. The added scores are saved to the Cloud Functions Engagement API. They are also preserved to the localStorage. On app launch, the saved scores are fetched from the Cloud Functions Engagement API.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    live_code_link: "https://anyars-encarta.github.io/Leaderboard-List-App/dist/",
    source_code_link: "https://github.com/anyars-encarta/Leaderboard-List-App",
  },
];

export { socialNetworks, services, technologies, experiences, testimonials, projects };
