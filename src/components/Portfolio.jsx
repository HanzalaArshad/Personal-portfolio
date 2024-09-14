import { div } from 'framer-motion/client';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import { AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
  {
    img: project1,
    title: "Landing Page",
    description: "Landing page for the book shop",
    links: {
      site: "https://book-nama.vercel.app/",
      github: "https://github.com/HanzalaArshad/React-projects/tree/main/Project1",
    },
  },
  {
    img: project2,
    title: "Contact Form",
    description: "Simple Contact Form Page",
    links: {
      site: "#",
      github: "https://github.com/HanzalaArshad/React-projects/tree/main/project2",
    },
  },
  {
    img: project3,
    title: "Dice Game",
    description: "A Dice game with Interactive Ui",
    links: {
      site: "https://dicegame-brown.vercel.app/",
      github: "https://github.com/HanzalaArshad/React-projects/tree/main/project3",
    },
  },
  {
    img: project4,
    title: "Restaurant website",
    description: "API Based Restaurant Website",
    links: {
      site: "https://resturant-app-blond.vercel.app/",
      github: "https://github.com/HanzalaArshad/React-projects/tree/main/project4",
    },
  },
  {
    img: project5,
    title: "Contact List",
    description: "Firebase based Contact List with CRUD Operation",
    links: {
      site: "https://contact-list-firbase.vercel.app/",
      github: "https://github.com/HanzalaArshad/React-projects/tree/main/project5",
    },
  },
  {
    img: project6,
    title: "AI CHATBOT",
    description: "AI ChatBot using Gemini API",
    links: {
      site: "https://chatbot-byhanzala.vercel.app/",
      github: "https://github.com/HanzalaArshad/chatAi",
    },
  },
];

function Portfolio() {
  return (
    <div className='max-w-[2000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>PORTFOLIO</h2>

      {projects.map((project, index) => (

        <Reveal>
        <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
          <div className='w-full md:w-1/2 p-4'>
            <img
              src={project.img}
              alt={project.title}
              className='w-full h-full object-cover rounded-lg shadow-lg'
            />
          </div> 
          <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
            <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
            <p className='text-gray-300 mb-4'>{project.description}</p>
            <div className='flex space-x-4'> 
              <a href={project.links.site}  className='text-gray-200 bg-blue-900 rounded-lg p-2  hover:bg-purple-800 transition duration-200'>Live Site</a>

              <a href={project.links.github}  className='text-gray-200 bg-blue-900 rounded-lg p-2  hover:bg-purple-800 transition duration-200'><AiOutlineGithub/></a>
            </div>
          </div>
        </div>

        </Reveal>
      ))}
    </div>
  );
}

export default Portfolio;
