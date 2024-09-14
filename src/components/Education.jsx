import React from 'react'
import {motion} from 'framer-motion'
import Reveal from './Reveal'


const education=[
  {
    Institute:"UNIVERSITY OF SINDH",
    period:"2022-Present",
    description: "3rd Year Bachelor of Computer Science Student."
  },

  {
    Institute:"Quaid e Azam Rangers School and College Hyderabad.",
    period:"2019-2021",
    description: "Completed My Intermediate with 78% Marks. "
  },

  
  {
    Institute:"Quaid e Azam Rangers School and College Hyderabad",
    period:"2009-2018",
    description: "Completed my Matriculation with 80% Marks "
  },
]

function Education() {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>EDUCATION</h1>

      <motion.div 
       className='space-y-8 '
       initial ="hidden"
       aniamate="visible"

      >

        {education.map((education,index)=>(
          <Reveal>
          <motion.div
          key={index}
          initial="hidden "
          whileInView="visible"
          viewport={{once:false ,amount:0.3}}
          transition={{duration:1}}

          className=' border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'

          >

            <h2 className='text-gray-100 text-2xl font-semibold'  >{education.Institute}</h2>
            <p  className='text-gray-300 text-2xl' >{education.period}</p>
            <p  className='text-gray-400 text-2xl mt-4' >{education.description}</p>


          </motion.div>
          </Reveal>
        ))}
        
      </motion.div>

    </div>
  )
}

export default Education