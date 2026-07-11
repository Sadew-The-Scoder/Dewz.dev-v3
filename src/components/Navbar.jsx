import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../consts/index.js';
import { MdClose, MdMenu } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/75 backdrop-blur-md border-b border-slate-900/50">
      {/* Responsive container | Mobile -> px-4 pc -> md:px-8 */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* logo */}
        <div className="">
          <a href="#" className="text-2xl md:text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent tracking-wider">Dewz V3</a>
        </div>

        {/* Desktop Nav | hidden md:flex*/}
        <nav className="hidden md:flex">
          <ul className="flex items-center list-none space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a className="font-medium text-sm text-slate-300 hover:text-secondary transition-colors relative py-1" href={link.path}>{link.name}</a></li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu | flex md:hidden */}
        <button onClick={toggleMenu} className="md:hidden hover:cursor-pointer text-2xl hover:bg-accent p-2 rounded-md focus:outline-none transition-colors text-slate-300 hover:text-white">
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>

      </div>

      {/* Mobile drop-down menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
            className="fixed top-16 left-0 min-h-[calc(100dvh-64px)] w-80 z-50 md:hidden bg-slate-950/95 border-l border-slate-900 backdrop-blur-lg shadow-2xl flex flex-col"
          >
            {/* Paddings in the mobile px-6 py-4*/}
            <nav className="w-full min-h-[calc(100dvh-64px)] flex items-center justify-center px-2">
              <ul className="flex flex-col list-none w-full h-full">
                {navLinks.map((link) => (
                  <li className="border-b border-slate-900/50 pb-3 last:border-none flex items-center justify-center" key={link.name}>
                    <a className="flex item-center justify-center text-lg font-medium text-slate-300 hover:text-secondary transition-colors py-2 w-full rounded-md hover:bg-slate-700/20" href={link.path}
                      onClick={toggleMenu}
                    >{link.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header >
  )
}

export default Navbar