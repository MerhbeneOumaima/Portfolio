import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>
        Projects
      </motion.h1>
      
      <div className='flex flex-wrap justify-center'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap justify-center'>
            <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:1}}
              className='w-full lg:w-1/4 mb-4 lg:mb-0 lg:mr-8'
            >
             

 
              {project.images && (
                
  <img
    src={project.images[0]} // Affiche uniquement la première image du tableau
    alt={project.title}
    className="mb-6 rounded cursor-pointer max-w-full max-h-full"
    onClick={() =>
      setSelectedImage({
        images: project.images,
        currentIndex: 0, // Commence avec la première image
      })} // Ouvre toutes les images dans le modal
  />
  
)}
            </motion.div>
            <motion.div
            
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1}}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech,index)=>(
                <span key ={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> 
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      {/* Modal to display selected image */}
      {selectedImage && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
    <div className="relative flex items-center justify-center">
      {/* Flèche gauche */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full"
        onClick={() =>
          setSelectedImage((prev) => {
            const currentIndex = prev.currentIndex || 0; // Récupère l'index actuel
            const newIndex = (currentIndex - 1 + prev.images.length) % prev.images.length;
            return { ...prev, currentIndex: newIndex }; // Met à jour uniquement l'index courant
          })
        }
      >
        &#8592;
      </button>

      {/* Image affichée */}
      <img
        src={selectedImage.images[selectedImage.currentIndex || 0]} // Affiche l'image à l'index courant
        alt="Selected Project"
        className="max-w-full max-h-screen rounded-lg"
      />

      {/* Flèche droite */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full"
        onClick={() =>
          setSelectedImage((prev) => {
            const currentIndex = prev.currentIndex || 0; // Récupère l'index actuel
            const newIndex = (currentIndex + 1) % prev.images.length;
            return { ...prev, currentIndex: newIndex }; // Met à jour uniquement l'index courant
          })
        }
      >
        &#8594;
      </button>
    </div>

    {/* Bouton pour fermer */}
    <button
      className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded"
      onClick={() => setSelectedImage(null)} // Ferme le modal
    >
      Close
    </button>
  </div>
)}

    </div>
  );
}

export default Projects;
