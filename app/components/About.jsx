import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = (isDarkMode) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-m-20'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
>
        <motion.h4 className='text-center mb-2 text-lg font-ovo'
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
        
        >Introduction</motion.h4>
        <motion.h2 className='text-center text-5xl font-ovo'
             initial={{opacity:0,y:-20}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:0.5,delay:0.5}}
        >About me</motion.h2>
        <motion.div 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:0.8}}
        className='w-full items-center my-20'>
            {/* <motion.div 
            
            initial={{opacity:0,scale:0.9}}
             whileInView={{opacity:1,scale:1}}
             transition={{duration:0.6}}
            classNam='w-64 sm:w-80 rounded-3xl max-w-none'>
              <Image src={assets.user_image} alt='user' className=' w-[450px] h-1000px  rounded-3xl' />
            </motion.div> */}
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.8 ,duration:0.6}}
            className=''>
              <p className=' text-center mb-10  font-ovo'>
              I am a Software Engineering Undergraduate at Sabaragamuwa University of Sri Lanka, evolving into an AI Engineer. Unlike traditional developers, I don't just write code; I design intelligent systems.My expertise lies in Medical AI and Computer Vision, demonstrated by my research in Descriptive ECG Image Interpretation. I combine a strong foundation in the MERN stack (Next.js/React) with Python-based ML frameworks (PyTorch/TensorFlow) to build end-to-end AI solutions. I am passionate about MLOps—ensuring that models are not just accurate, but scalable, deployable via Docker, and integrated into seamless CI/CD pipelines.
              </p>
              <motion.ul 
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:0.8,delay:1}}
              className='grid grid-cols-1 sm:grid-cols-3 gap-6'>

                {infoList.map(({icon,iconDark,title,description},index)=>(

                    <motion.li 
                    whileHover={{scale:1.05}}
                    className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 ' key={index}>

                        <Image className='w-7 mt-3' src={icon} alt={title}/>

                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>

                        <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                    </motion.li>
                
                ))}
              </motion.ul>
              <motion.h4 
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:1.3}}
              className='my-6 text-gray-700 font-ovo dark:text-white/80'>Tools I use </motion.h4>
              <motion.ul
              
              className='flex items-center justify-center gap-3 sm:gap-5'>
                {toolsData.map((tool,index)=>(
                    <motion.li 
                    whileHover={{scale:1.1}}
                    key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 '>
                       <Image src={tool} alt='tool' className='w-3 sm:w-7 '/>
                    </motion.li>
                ))}
              </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About