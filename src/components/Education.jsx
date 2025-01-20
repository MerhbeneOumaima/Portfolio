import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';
import netImage from '../assets/Education/poly.png'; // Import your education images
import emkaImage from '../assets/Education/essths.png'; 

export default function Education() {
  const educationWithImages = EDUCATION.map((education) => {
    let imageUrl;
    if (education.imageUrl === '../assets/Education/poly.png') {
      imageUrl = netImage;
    } else if (education.imageUrl === '../assets/Education/essths.png') {
      imageUrl = emkaImage;
    }
    return { ...education, imageUrl };
  });

  const handleImageClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Education
      </motion.h1>
      <div>
        {educationWithImages.map((education, index) => (
          <div key={index} className="mb-8 flex flex-col items-center lg:flex-row lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4 text-center lg:text-left'>
              <p className='mb-2 text-sm text-neutral-400'>{education.year}</p>
              <img
                src={education.imageUrl} 
                alt={`${education.year} education`}
                className='w-40 h-40 lg:w-60 lg:h-32 object-cover mx-auto lg:mx-0 mb-2 lg:mb-0 cursor-pointer' 
                onClick={() => handleImageClick(education.url)}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold text-center lg:text-left'>
                {education.degree} -{' '}
                <span className='text-sm text-purple-100'>
                  {education.university}
                </span>
              </h6>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
