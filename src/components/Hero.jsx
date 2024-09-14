import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import ShinnyEffect from './ShinnyEffect'
import { AiOutlineGithub,AiOutlineLinkedin,AiOutlineInstagram } from 'react-icons/ai'
import { DiCss3,DiHtml5,DiJavascript,DiNodejsSmall,DiReact,DiJava,DiPython } from 'react-icons/di'

import { TbBrandCpp } from "react-icons/tb";

import { FaBootstrap } from "react-icons/fa";
import { FaJs } from "react-icons/fa";





import hanzala from '../assets/hanzala2.png'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const Hero = () => {
  return (
    
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
       <div className='grid md:grid-cols-2  place-items-center gap-8'>

        <motion.div 
        initial={{opacity:0,y:-50}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:1}}

        >

          <TypeAnimation 
            sequence={[
              "Reactjs Developer",
              1000,
              "JavaScript Developer",
              1000,
              "Consultant",
              1000
            ]}
            speed={50}
            repeat={Infinity}
            className='font-bold text-gray-400 text-xl md:text-5xl italic mb--4'
          />
        
         <motion.p    
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{duration:1,delay:0.5}}

        className='text-gray-200 ,md:text-7xl text-5xl tracking-tight mb-4'
>
       ASSLAM ALIKUM <br/>
       <span className='text-purple-500'>HANZALA ARSHAD</span>

         </motion.p>


         
         <motion.p    
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{duration:1,delay:1}}

        className='text-gray-300 max-w-[300px] md:max-w-[500px],md:text-2xl text-lg tracking-tight mb-6'
>
        I am a Passionate React Developer 

         </motion.p>
         
        <motion.div 
        initial={{opacity:0,y:-50}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:1}}
        
        className='flex flex-row items-center gap-6 my-4 md:mb-0'
        >
          <motion.button whileHover={{scale:1.05,boxShadow:"0px 0px 8px rgba(0,0,0,0.3)"}} className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl' >

            DownLoad Cv
          </motion.button>
      
          <div className='flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20' >

            

            <motion.a whileHover={{scale:1.2}} href='https://github.com/HanzalaArshad'>
              <AiOutlineGithub/>

            </motion.a>

            
            <motion.a whileHover={{scale:1.2}} href='https://www.linkedin.com/in/hanzalaarshad/'>
              <AiOutlineLinkedin/>

            </motion.a>

            <motion.a whileHover={{scale:1.2}} href='https://www.instagram.com/hanzala_arshad1'>
              <AiOutlineInstagram/>

            </motion.a>

            



          </div>
        
        </motion.div>

        
        </motion.div>

      
<motion.img src={hanzala} alt="Hanzala" 
  className='w-[300px] md:w-[450px] border border-purple-500'
  initial={{opacity:0,scale:0.8}}
  whileInView={{opacity:1,scale:1}}
  viewport={{once:true}}
  transition={{duration:1,delay:1.5}}

/>
      
       </div>


       <motion.div 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         viewport={{once:true}}
         transition={{duration:1,delay:2}}
         className="flex flex-col md:flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24 gap-4"
          

       >

        <p className='text-gray-100 mr-4 '>TECH THAT I KNOW</p>


        <DiHtml5 className="text-orange-500 mx-2 hover:text-orange-600 hover:scale-110 transition duration-300 " />
  <DiCss3 className="text-blue-500 mx-2 hover:text-blue-600 hover:scale-110 transition duration-300" />
  <FaJs className="text-yellow-500 mx-2 hover:text-yellow-600 hover:scale-110 transition duration-300" />
  <DiReact className="text-blue-500 mx-2 hover:text-blue-600 hover:scale-110 transition duration-300" />
  
  <TbBrandCpp className="text-blue-500 mx-2 hover:text-blue-600 hover:scale-110 transition duration-300" />
  <DiJava className="text-red-500 mx-2 hover:text-red-600 hover:scale-110 transition duration-300" />
  <DiPython className="text-blue-500 mx-2 hover:text-blue-600 hover:scale-110 transition duration-300" />

       </motion.div>

       <div className='relative'>
  <div className='absolute inset-0 hidden md:block'>
    <ShinnyEffect left={0} top={0} size={1400} />
  </div>
</div>

    </div>
  )
}

export default Hero;