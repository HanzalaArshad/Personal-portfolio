import React from 'react';
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiGithubBadge,
  DiMongodb,
} from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandFramerMotion } from 'react-icons/tb';
import Reveal from './Reveal';

const skills = [
  {
    category: 'FrontEnd',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <DiCss3 className="text-blue-500 " /> },
      { name: 'Sass', icon: <DiSass className="text-pink-600 " /> },
      { name: 'Bootstrap', icon: <DiBootstrap className="text-purple-600" /> },
      { name: 'TailwindCSS', icon: <RiTailwindCssFill className="text-blue-400" /> },
      { name: 'JavaScript', icon: <DiJavascript1 className="text-yellow-600" /> },
      { name: 'React', icon: <DiReact className="text-blue-600" /> },
      { name: 'Framer Motion', icon: <TbBrandFramerMotion className="text-purple-600" /> },
    ],
  },
  {
    category: 'FullStack',
    technologies: [
      { name: 'NodeJS', icon: <DiNodejsSmall className="text-green-500" /> },
      { name: 'MongoDB', icon: <DiMongodb className="text-green-500" /> },
      { name: 'GitHub', icon: <DiGithubBadge className="text-gray-500" /> },
      { name: 'React', icon: <DiReact className="text-blue-500" /> },
    ],
  },
];

function Skill() {
  return (
    <div className="flex flex-col max-w-[650px] mx-auto justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">

      <Reveal>
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <p className="text-center mb-8">I worked on various FrontEnd projects and am learning BackEnd development.</p>

      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8  ">
        {skills.map((skillCategory, index) => (
          <div key={index} className='border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2'>
            <h3 className="text-xl font-bold mb-4 text-center">{skillCategory.category}</h3>
            <div className="grid grid-cols-2 gap-4 text-9xl ">
              {skillCategory.technologies.map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center space-x-2">
                  {tech.icon}
                  <p className="text-sm">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </Reveal>
    </div>
  );
}

export default Skill;
