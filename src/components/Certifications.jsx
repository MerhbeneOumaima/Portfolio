import React from 'react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>Certifications</motion.h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <motion.div
          className="flex flex-col items-center"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5 }}
          onClick={() => handleRedirect("https://www.pmi.org/certifications/pmi-project-management-ready")}
          style={{ cursor: "pointer" }}
        >
          <img className="h-auto max-w-full rounded-lg mb-10" style={{ maxWidth: '60%', height: 'auto' }} src="/pmi.png" alt="" />
          <p className="text-center text-lg">Project Managemen Institute - PMI </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          onClick={() => handleRedirect("https://www.credly.com/badges/dfd5592b-c1c7-4c9e-b066-08c7c350af09/public_url")}
          style={{ cursor: "pointer" }}
        >
          <img className="h-auto max-w-full rounded-lg mb-10" style={{ maxWidth: '60%', height: 'auto' }} src="/CCNA1.png" alt="" />
          <p className="text-center text-lg">CCNA: Switching, Routing, and Wireless Essentials</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          onClick={() => handleRedirect("https://www.credly.com/badges/f46265bb-0e41-410c-83a7-48edaba8a8fb/public_url")}
          style={{ cursor: "pointer" }}
        >
          <img className="h-auto max-w-full rounded-lg mb-10" style={{ maxWidth: '60%', height: 'auto' }} src="/CCNA.png" alt="" />
          <p className="text-center text-lg">CCNA: Introduction to Networks</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5 }}
          onClick={() => handleRedirect("https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/?practice-assessment-type=certification")}
          style={{ cursor: "pointer" }}
        >
          <img className="h-auto max-w-full rounded-lg mb-10" style={{ maxWidth: '60%', height: 'auto' }} src="/azuredataf.png" alt="" />
          <p className="text-center text-lg">Microsoft - Azure Data Fondamentals </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          onClick={() => handleRedirect("https://learn.microsoft.com/fr-fr/training/paths/power-plat-fundamentals/")}
          style={{ cursor: "pointer" }}
        >
          <img className="h-auto max-w-full rounded-lg mb-10" style={{ maxWidth: '60%', height: 'auto' }} src="/PL900.png" alt="" />
          <p className="text-center text-lg">Microsoft - power platform fundamentals (pl-900)</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          onClick={() => handleRedirect("https://certiport.pearsonvue.com/Certifications/ITSpecialist/Certification/Certify.aspx")}
          style={{ cursor: "pointer" }}
        >
          <img className="h-auto max-w-full rounded-lg mb-10" style={{ maxWidth: '60%', height: 'auto' }} src="/python.png" alt="" />
          <p className="text-center text-lg">IT Specialist - Python</p>
        </motion.div>
      </div>
    </div>
  );
}
