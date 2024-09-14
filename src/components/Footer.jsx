import { div } from 'framer-motion/client'
import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>

      <div className='space-y-4'>
        <h3 className='text-2xl tetx-gray-200 font-semibold'>HANZALA ARSHAD</h3>

        <div className='flex flex-grow gap-6 text-gray-100 text-4xl '>
          <a href="https://github.com/HanzalaArshad" className='text-gray-400'><FaGithubSquare/></a>
          <a href="https://www.linkedin.com/in/hanzalaarshad/" className='text-blue-400'><FaLinkedin/></a>
        </div>

      </div>
      <p className='text-gray-50 text-center'>@2024 HANZALA ARSHAD ARAIN</p>
        
    </div>
   


  )
}

export default Footer