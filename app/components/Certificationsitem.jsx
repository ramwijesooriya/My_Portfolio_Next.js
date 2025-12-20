import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const Certificationsitem = ({ year, title, duration, details, img }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        {/* Timeline Dot */}
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        
        {/* Header Section */}
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">
            {title}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        
        {/* Description */}
        <p className="my-2 text-base font-normal text-stone-500">
          {details}
        </p>

        {/* Image Section - Only renders if 'img' prop exists */}
        {img && (
          <div className="mt-4 max-w-96">
            <Image 
              src={img} 
              alt={`${title} certification`} 
              // These width/heights are "intrinsic" to prevent layout shift
              // You can also use "fill" if you wrap it in a relative div
              width={500} 
              height={300}
              className="rounded-md shadow-md h-auto"
            />
          </div>
        )}
      </li>
    </ol>
  );
};

export default Certificationsitem;