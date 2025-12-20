import React from 'react';
import Certificationsitem from './Certificationsitem';
import { assets } from '@/assets/assets';

const data = [
  {
    year: '2024',
    title: 'The Complete 2024 Web Development Bootcamp',
    duration: 'Udemy - Completed',
    // Cleaned up the details to be more readable
    details: "Successfully completed the full-stack bootcamp under Dr. Angela Yu. Covered JavaScript, React, Node.js, API, Docker, PostgreSQL, and more.",
    // Option A: Use the imported asset from your local file
    image: assets.fullstack, 
    // Option B: Use a URL (if you prefer the LinkedIn link)
    // image: 'https://media.licdn.com/...' 
  },
  {
    year: '2025',
    title: 'DevOps Beginners to Advanced with Projects',
    duration: 'Udemy - In Progress',
    details: "Mastering CI/CD pipelines, Docker containers, Kubernetes orchestration, and AWS cloud infrastructure.",
    // Ensure 'devops' is exported in your assets.js file!
    image: assets.devops 
  }
];

const Certifications = () => {
  return (
    <div id="Certifications" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
       <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-12">
         Certifications and Achievements
       </h1>

       {/* Single container for the timeline */}
       <div className='flex flex-col relative'>
          {data.map((item, idx) => (
            <Certificationsitem
              key={idx}
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
              // Pass the specific image for this item
              img={item.image} 
            />
          ))}
       </div>
    </div>
  );
};

export default Certifications;