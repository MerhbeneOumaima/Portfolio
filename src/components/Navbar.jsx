import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 relative">
      
      <div className='absolute right-0 flex items-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/oumaima-merhb%C3%A8ne-987752274/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/MerhbeneOumaima" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100006449435460&locale=fr_FR" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/merhbene_oumayma/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};
