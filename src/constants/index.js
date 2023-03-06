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
    threejs,
    catgpt,
    yariga,
    chirp,
    quicktask,
    keymaster,
    pix,
    salesscope,
    filmpire,
    chainreaction,
    datazenith,
    herbivore,
    evogym,
    nft,
    lucky,
    blog,
    crowdfunding,
    newssquad,
    metaversus,
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
        name: "Pix",
        description:
            "Full Stack MERN AI image generation app.",
        tags: [
            {
                name: "node",
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
        image: pix,
        project_link: "https://pix-ai.vercel.app/",
        source_code_link: "https://github.com/derekprieur/ai-image",
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
    {
        name: "Filmpire",
        description:
            "AI powered movie app with React.js & Material UI.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "material-ui",
                color: "green-text-gradient",
            },
            {
                name: "api",
                color: "pink-text-gradient",
            },
        ],
        image: filmpire,
        project_link: "https://filmpire-dprieur.netlify.app/",
        source_code_link: "https://github.com/derekprieur/filmpire",
    },
    {
        name: "Metaversus",
        description:
            "Modern Next 13 Website With Framer Motion & Tailwind CSS.",
        tags: [
            {
                name: "framer-motion",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "nextjs",
                color: "pink-text-gradient",
            },
        ],
        image: metaversus,
        project_link: "https://metaversus-mu.vercel.app/",
        source_code_link: "https://github.com/derekprieur/metaversus",
    },
    {
        name: "Chain Reaction",
        description:
            "Crypto dashboard w/React, Tailwind CSS & Firebase auth/db.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "firebase",
                color: "pink-text-gradient",
            },
        ],
        image: chainreaction,
        project_link: "https://chainreaction-dprieur.vercel.app/",
        source_code_link: "https://github.com/derekprieur/crypto-dashboard",
    },
    {
        name: "Evogym",
        description:
            "Responsive fitness website built w/TypeScript.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "framer-motion",
                color: "pink-text-gradient",
            },
        ],
        image: evogym,
        project_link: "https://evogym-dprieur.vercel.app/",
        source_code_link: "https://github.com/derekprieur/gym-typescript",
    },
    {
        name: "NetRunner NFT Marketplace",
        description:
            "NFT Drop Dapp w/ Next.js.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "blockchain",
                color: "pink-text-gradient",
            },
        ],
        image: nft,
        project_link: "https://netrunner-marketplace.vercel.app/",
        source_code_link: "https://github.com/derekprieur/nft-drop",
    },
    {
        name: "Chirp",
        description:
            "Chat app with Firebase backend & user authentication.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "authentication",
                color: "pink-text-gradient",
            },
        ],
        image: chirp,
        project_link: "https://chirp-dprieur.vercel.app/",
        source_code_link: "https://github.com/derekprieur/chat-app",
    },
    {
        name: "Crowd Funding",
        description:
            "Web3 Crowdfunding platform.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "solidity",
                color: "pink-text-gradient",
            },
        ],
        image: crowdfunding,
        project_link: "https://crowd-funding-dprieur.vercel.app/",
        source_code_link: "https://github.com/derekprieur/crowd-funding",
    },
    {
        name: "DataZenith",
        description:
            "Data Analytics landing page w/React & Tailwind CSS.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
        ],
        image: datazenith,
        project_link: "https://datazenith.netlify.app/",
        source_code_link: "https://github.com/derekprieur/data-site",
    },
    {
        name: "Lucky Draw Lottery",
        description:
            "Crypto lottery app w/ TypeScript & ThirdWeb.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "green-text-gradient",
            },
            {
                name: "solidity",
                color: "green-text-gradient",
            },
        ],
        image: lucky,
        project_link: "https://luckydraw-lottery.vercel.app/",
        source_code_link: "https://github.com/derekprieur/lottery",
    },
    {
        name: "Quick Task",
        description:
            "Simple Todo application with React, Tailwind CSS & Firebase.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "authentication",
                color: "pink-text-gradient",
            },
        ],
        image: quicktask,
        project_link: "https://quick-task.vercel.app/",
        source_code_link: "https://github.com/derekprieur/todo",
    },
    {
        name: "Ninja News Squad",
        description:
            "Live News App with Next.js 13.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "api",
                color: "pink-text-gradient",
            },
        ],
        image: newssquad,
        project_link: "https://ninjanewssquad.vercel.app/",
        source_code_link: "https://github.com/derekprieur/news-app",
    },
    {
        name: "Herbivore Harvest",
        description:
            "Responsive food delivery website w/React.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
        ],
        image: herbivore,
        project_link: "https://herbivoreharvest.vercel.app/",
        source_code_link: "https://github.com/derekprieur/delivery-site",
    },
    {
        name: "Key Master",
        description:
            "Password generation application with React & Tailwind CSS.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
        ],
        image: keymaster,
        project_link: "https://key-master.vercel.app/",
        source_code_link: "https://github.com/derekprieur/password-generator",
    },
    {
        name: "Daily Blog Blog",
        description:
            "Modern blog powered by Next.js 13, Sanity v3, TypeScript and Tailwind.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "sanity",
                color: "green-text-gradient",
            }
        ],
        image: blog,
        project_link: "https://blog-derekprieur.vercel.app/",
        source_code_link: "https://github.com/derekprieur/blog",
    },
    {
        name: "Sales Scope",
        description:
            "Customer analytics dashboard with React, Chart.js & Tailwind.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "analytics",
                color: "green-text-gradient",
            },
        ],
        image: salesscope,
        project_link: "https://salse-scope.vercel.app/",
        source_code_link: "https://github.com/derekprieur/user-dashboard",
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