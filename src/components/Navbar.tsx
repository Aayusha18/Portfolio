import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  const navItems = [
  {
    label: 'Home',
    id: 'home'
  },
  {
    label: 'About',
    id: 'about'
  },
  {
    label: 'My Work',
    id: 'projects'
  },
  {
    label: 'Experience',
    id: 'experience'
  },
  {
    label: 'Contact',
    id: 'contact'
  }];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/60 dark:bg-neutral-950/60 backdrop-blur-md' : 'bg-neutral-950 dark:bg-neutral-950'}`}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5
      }}>
      
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="hidden md:flex items-center justify-evenly w-full">
            {navItems.map((item) =>
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative transition-colors duration-300 font-bold text-sm uppercase tracking-wider ${isScrolled ? 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white' : 'text-neutral-400 hover:text-white'}`}>
              
                {item.label}
              </button>
            )}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
              aria-label="Toggle theme">
              
              {theme === 'light' ?
              <MoonIcon className="w-5 h-5" /> :

              <SunIcon className="w-5 h-5" />
              }
            </button>
          </div>
          <div className="md:hidden flex items-center justify-between w-full">
            <span
              className={`text-sm font-semibold tracking-tight ${isScrolled ? 'text-neutral-900 dark:text-white' : 'text-white'}`}>
              
              AS
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
                aria-label="Toggle theme">
                
                {theme === 'light' ?
                <MoonIcon className="w-5 h-5" /> :

                <SunIcon className="w-5 h-5" />
                }
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}>
                
                {isMobileMenuOpen ?
                <XIcon className="w-6 h-6" /> :

                <MenuIcon className="w-6 h-6" />
                }
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            className={`md:hidden mt-4 pb-4 border-t pt-4 ${isScrolled ? 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950' : 'border-neutral-800 bg-neutral-950'}`}>
            
              <div className="flex flex-col gap-4">
                {navItems.map((item) =>
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left transition-colors py-2 font-medium text-base ${isScrolled ? 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white' : 'text-neutral-400 hover:text-white'}`}>
                
                    {item.label}
                  </button>
              )}
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.nav>);

}