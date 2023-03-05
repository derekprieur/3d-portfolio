import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    freelance,
    optionsoft,
    carrent,
    jobit,
    tripguide,
    threejs,
    catgpt,
    yariga,
} from "../assets";

const projects = [
    {
        name: "CatGPT",
        description:
            "ChatGPT clone w/ React, Next.js 13, TypeScript, Tailwind CSS, & Firebase.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "ai",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: catgpt,
        project_link: "https://cat-gpt-rouge.vercel.app/",
        source_code_link: "https://github.com/derekprieur/catGPT",
    },
    {
        name: "Yariga",
        description:
            "Full Stack MERN app w/ CRUD, Auth, & Charts.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "authentication",
                color: "pink-text-gradient",
            },
        ],
        image: yariga,
        project_link: "https://refine-property-dashboard.vercel.app/",
        source_code_link: "https://github.com/derekprieur/refine_property_dashboard",
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Front End Developer",
        icon: mobile,
    },
    {
        title: "Back End Developer",
        icon: backend,
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
        name: "TypeScript",
        icon: typescript,
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
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Web Developer",
        company_name: "Freelance",
        icon: freelance,
        iconBg: "#ffffff",
        date: "March 2022 - Current",
        points: [
            "Developing and maintaining user-friendly web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including mentors, project managers, and other developers to create high-quality products.",
            "Writing clean, efficient, and reusable code that is easy to maintain and scale.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Debugging and troubleshooting issues that arise during the development process.",
            "Managing version control systems such as Git and collaborating with other developers on code reviews and pull requests.",
            "Staying up-to-date with emerging trends and technologies in web development, and making recommendations for improvements to the technology stack or development processes.",
            "Managing your own time and workload, and meeting project deadlines.",
        ],
    },
    {
        title: "QA Analyst",
        company_name: "OptionSoft Technologies",
        icon: optionsoft,
        iconBg: "#ffffff",
        date: "Aug 2018 - Current",
        points: [
            "Key contributor to analyzing functional, user experience and technical requirements for entire catalog of company products.",
            "Testing software to ensure it meets company specifications.",
            "Documenting issues in a well-written and easy to reproduce format.",
            "Working directly with other developers on issues/improvements to our programs.",
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
];


export { services, technologies, experiences, testimonials, projects };