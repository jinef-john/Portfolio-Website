import {
  mobile,
  backend,
  creator,
  web,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  github,
} from "../assets";
import nyumbani from "../assets/nyumbani.png";
import soko from "../assets/soko.png";
import skoolpro from "../assets/skoolpro.png";

import cheetsheet from "../assets/cheetsheet.png";
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
    title: "AI | ML Engineer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "devicon-html5-plain colored",
  },
  {
    name: "CSS 3",
    icon: "devicon-css3-plain colored",
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain colored",
  },
  {
    name: "React JS",
    icon: "devicon-react-original colored",
  },
  {
    name: "Redux Toolkit",
    icon: "devicon-redux-original colored",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-plain colored",
  },
  {
    name: "Node JS",
    icon: "devicon-nodejs-plain colored",
  },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain colored",
  },
  {
    name: "Three JS",
    icon: "devicon-threejs-original colored",
  },
  {
    name: "Git",
    icon: "devicon-git-plain colored",
  },
  {
    name: "Figma",
    icon: "devicon-figma-plain colored",
  },
  {
    name: "Docker",
    icon: "devicon-docker-plain colored",
  },
  {
    name: "Python",
    icon: "devicon-python-plain colored",
  },
  {
    name: "Next.js",
    icon: "devicon-nextjs-original colored",
  },
  {
    name: "Express.js",
    icon: "devicon-express-original colored",
  },
];

const experiences = [
  {
    title: "FreeLancer",
    company_name: "Fivver/Upwork",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgtI3lDDZ6mWtxZoFmhaGKMVSWUQWHILeIA&s",
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Jun 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Deploying applications to production environments and ensuring their stability.",
      "Customizing and optimizing applications for performance and scalability.",
    ],
  },
  {
    title: "Data Scientist/ML Engineer",
    company_name: "TSC Commision",
    icon: "https://pbs.twimg.com/profile_images/1468181083577626624/xz85n9gy_400x400.jpg",
    iconBg: "#383E56",
    date: "Aug 2022 - Nov 2022",
    points: [
      "Maintained databases and data pipelines to ensure data integrity and availability.",
      "Learnt Network protocols and security measures to protect sensitive data.",
      "Configured Printers and other devices to ensure proper connectivity and functionality.",
      "Customer support and troubleshooting for hardware and software issues.",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "AWS Internship",
    icon: "https://cdn.worldvectorlogo.com/logos/amazon-web-services.svg",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Implemented CI/CD pipelines to automate testing and deployment processes.",
      "Monitored system performance and optimized resource usage.",
      "Collaborated with development teams to ensure seamless integration of new features.",
      "Maintained cloud infrastructure and managed server configurations.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "WorkForce",
    icon: github,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications and Native applications using React.js, Node.js, and other related technologies.",
      "Building and consuming RESTful APIs to connect front-end and back-end systems.",
      "Microservices architecture to enhance scalability and maintainability.",
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
    name: "Nyumbani Rentals",
    description:
      "A web application that allows users to search for rental properties, view property details, and contact landlords directly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: nyumbani,
    source_code_link: "https://main.d1fdqtm1sq1vr1.amplifyapp.com/",
  },
  {
    name: "soko",
    description:
      "An eccommerce platform that enables users to buy and sell products online, featuring a user-friendly interface and secure payment options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: soko,
    source_code_link: "https://soko-zeta.vercel.app/",
  },
  {
    name: "skoolpro",
    description:
      "A comprehensive school management system that allows administrators to manage student records, attendance, and grades efficiently.",
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
    image: skoolpro,
    source_code_link: "https://skool-kappa.vercel.app/",
  },
  {
    name: "CheetSheet",
    description:
      "A web application that provides quick access to programming language syntax and commands, helping developers save time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cheetsheet,
    source_code_link: "https://big-o-cheatsheet.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
