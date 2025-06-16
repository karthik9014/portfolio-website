import { AppData } from './types';
import profilePic from './assets/profilePic.png';
export const appData: AppData = {
    user: {
        name: 'Kartheek',
        role: 'Senior Front End Developer',
        greeting: "Hello, I'm",
    },
    about: {
        aboutImg: profilePic,
        experience: '3.6+ Years Working',
        company: 'ADP Private Limited',
        projects: '10+ Completed',
        aboutInfo: `Hello! I'm Kartheek, a Frontend Developer with 3.6+ years of experience crafting scalable and responsive web applications.

            I specialize in <strong>React.js, TypeScript, Redux Toolkit, and Tailwind CSS</strong> etc. I’ve worked on diverse enterprise solutions like <strong>fund transfer approvals, collections dashboards, AI chatbot interfaces, and e-commerce applications</strong>.
            
            Currently at <strong>ADP Private Limited</strong>, I’ve led feature-rich UI projects, contributed to <strong>legacy codebase migrations</strong>, and ensured code quality through <strong>Playwright-based automation testing</strong>.
            
            I’m also a certified <strong>Node.js developer</strong> and continuously explore full-stack technologies as I work toward becoming a <strong>MERN stack engineer</strong>.
            
             I strive to combine clean architecture with delightful user experiences.`,
    },
    skillsFrontend: [
        { course: 'React JS', expertise: 'Experienced' },
        { course: 'TypeScript', expertise: 'Experienced' },
        { course: 'JavaScript', expertise: 'Experienced' },
        { course: 'Stencil JS', expertise: 'Intermediate' },
        { course: 'HTML', expertise: 'Experienced' },
        { course: 'CSS', expertise: 'Experienced' },
        { course: 'Tailwind CSS', expertise: 'Experienced' },
    ],
    skillsBackend: [
        { course: 'Node JS', expertise: 'Intermediate' },
        { course: 'Express JS', expertise: 'Intermediate' },
        { course: 'MongoDB', expertise: 'Intermediate' },
        { course: 'Mongoose', expertise: 'Intermediate' },
    ],
    skillsAutomation: [
        { course: 'Playwright', expertise: 'Intermediate' },
        { course: 'Jest', expertise: 'Basic' },
    ],
    projects: [
        {
            id: 1,
            title: 'Portfolio Website',
            description:
                'A personal portfolio website to showcase my skills, projects, and experience. Built using modern frontend technologies and fully responsive across devices.',
            image: 'src\\assets\\portfolio-img.PNG',
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'framer-motion'],
            demoLink: 'https://your-portfolio-url.com',
            githubLink: 'https://github.com/username/portfolio',
        },
        {
            id: 2,
            title: 'Dev Tinder (Full-Stack App)',
            description: 'A Tinder-style networking platform for developers with secure JWT authentication and real-time updates.',
            image: 'src\\assets\\dev-tinder.PNG',
            technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit'],
            demoLink: '',
            githubLink: 'https://github.com/karthik9014/devTinder',
            inProgress: true,
        },
        // {
        //     id: 2,
        //     title: 'YouTube Clone',
        //     description:
        //         'A clone of the YouTube interface with video player, search functionality, and responsive layout. Uses the YouTube Data API.',
        //     image: 'src\\assets\\yt-image.jpg',
        //     technologies: ['React', 'Tailwind CSS', 'JavaScript', 'YouTube API'],
        //     demoLink: '',
        //     githubLink: '',
        // },
        {
            id: 3,
            title: 'Expense Tracker',
            description: 'A simple expense tracking app to monitor income and expenses with persistent data using localStorage.',
            image: 'src\\assets\\E-tracker.PNG',
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
            demoLink: '',
            githubLink: '',
        },
    ],
    contact: {
        email: 'pvpvkartheek99@gmail.com',
        phone: '+919014880818',
        location: 'Hyderabad, India',
        socials: {
            linkedin: 'https://www.linkedin.com/in/venkata-kartheek-pagolu-abc/',
            github: 'https://github.com/karthik9014',
            twitter: 'https://twitter.com/username',
            instagram: 'https://instagram.com/username',
        },
    },
};
