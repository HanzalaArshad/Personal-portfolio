import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div className='px-6 max-w-[1000px] mx-auto md:my-12' id="contact">
      
      <motion.div 
        className='flex flex-col md:flex-row justify-between items-start'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when the element is 30% visible
        variants={fadeInUp} // Use the animation variant
      >
        {/* About Me Section */}
        <motion.div 
          className='text-gray-300 my-3 w-full md:w-1/2'
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp} // Applies fade-in up effect
        >
          <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span></h3>
          <p className='text-justify leading-7 w-11/12'>
            My name is Hanzala Arshad, a passionate and dedicated computer science student currently in my 6th semester. With a strong foundation in Python, Java, and C++, and a burgeoning interest in web development and data science, I am excited to share my journey and aspirations.
          </p>

          <div className='flex mt-10 items-center gap-7'>
            <div className='bg-gray-800/40 p-5 rounded-lg'>
              <h3 className='md:text-4xl text-2xl font-semibold text-white'>20<span>+</span></h3>
              <p className='text-xs md:text-base'><span>React</span> Projects</p>
            </div>

            <div className='bg-gray-800/40 p-5 rounded-lg'>
              <h3 className='md:text-4xl text-2xl font-semibold text-white'>300<span>+</span></h3>
              <p className='text-xs md:text-base'><span>JS</span> Problems  Solutions</p>
            </div>

            <div className='bg-gray-800/40 p-5 rounded-lg'>
              <h3 className='md:text-4xl text-2xl font-semibold text-white'>2<span>+</span></h3>
              <p className='text-xs md:text-base'><span>Data Science</span> Projects in Python</p>
            </div>
          </div>
        </motion.div>

        {/* Let's Connect Section */}
        <motion.div 
          className='w-full md:w-1/2'
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp} // Apply scroll animation to this section too
        >
          <form 
            action="https://getform.io/f/avreqwxa"
            method='POST'
            className='max-w-6xl p-5 md:p-12'
            id="form"
          >
            <p className='text-gray-100 font-bold text-xl mb-2'>Let's Connect</p>

            <input 
              type="text"
              id="name"
              placeholder='Your Name... '
              name="name"
              required
              className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4  text-black'
            />
            <input 
              type="email"
              id="email"
              placeholder='Your Email... '
              name="email"
              required
              className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4  text-black'
            />
            <textarea
              id="textarea"
              required
              placeholder='Your Message... '
              cols="30"
              rows="4"
              className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 text-black
              '
            />
            <button
              type="submit"
            
              className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
