// 

import { useState } from 'react';
import { motion } from 'motion/react';

const BASE_URL = import.meta.env.BASE_URL;

function Navigation() {
  return (
    <ul className='nav-ul'>
      <li className='nav-li'><a className='nav-link' href='#home'>Home</a></li>
      <li className='nav-li'><a className='nav-link' href='#about'>About</a></li>
      <li className='nav-li'><a className='nav-link' href='#education'>Educations</a></li>
      <li className='nav-li'><a className='nav-link' href='#contact'>Contact</a></li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-3 sm:py-4'>
          {/* Brand Name with Live Status Indicator */}
          <div className='flex items-center gap-3'>
            <a href={`/${BASE_URL}`} className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>
              Gyan Aditya
            </a>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-mint/10 border border-mint/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
              </span>
              <span className="text-[10px] font-semibold text-mint uppercase tracking-wider">Available</span>
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} className='w-6 h-6' alt='toggle' />
          </button>
          
          <nav className='hidden sm:flex'><Navigation/></nav>
        </div> 
      </div>
      
      {isOpen && (
        <motion.div className='block overflow-hidden text-center sm:hidden bg-primary/95 border-b border-white/5' initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <nav onClick={() => setIsOpen(!isOpen)} className='pb-5 pt-2'><Navigation/></nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;