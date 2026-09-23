import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRightIcon, MailIcon } from 'lucide-react';
export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen bg-white dark:bg-neutral-950 w-full">
      
      <div className="grid md:grid-cols-2 w-full min-h-screen">
        {/* Left side (text) */}
        <div className="flex flex-col justify-center min-h-screen px-6 md:px-16 lg:px-24 py-24 order-last md:order-first">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}>
            
            <span className="block text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-500 font-medium mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-[1.1] tracking-tight">
              Hi, I'm{' '}
              <span className="text-truffle dark:text-flame">
                Aayusha Shingavi
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-medium mt-4 h-8">
              <TypeAnimation
                sequence={[
                'AI Product Manager',
                2000,
                'Here to Build Products',
                2000,
                'Systems Thinker',
                2000,
                'Probably Overanalyzing Something',
                2000,
                'Designing for Humans',
                2000,
                'Fueled by Curiosity',
                2000,
                'Empathy Driven',
                2000]
                }
                wrapper="span"
                speed={50}
                repeat={Infinity} />
              
            </div>
            <p className="text-base text-neutral-500 dark:text-neutral-500 leading-relaxed mt-6 max-w-md font-light">
              I think like a system, design like a creator, and question like a
              search engine. Building products (and myself) one iteration at a
              time.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-7 py-3 bg-neutral-950 dark:bg-flame text-white dark:text-abyssal rounded-full font-semibold text-sm tracking-wide hover:bg-truffle dark:hover:bg-[#ffc285] transition-colors">
                
                Explore My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-7 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full font-semibold text-sm tracking-wide hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                
                Let's Connect
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right side (photo) */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.8
          }}
          className="order-first md:order-none h-[50vh] md:h-auto md:min-h-screen w-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-8 md:p-12 lg:p-16">
          
          <div className="w-full h-full border border-neutral-300 dark:border-neutral-700 overflow-hidden">
            <img
              src="/wmremove-transformed.png"
              alt="Aayusha Shingavi"
              className="w-full h-full object-cover object-center" />
            
          </div>
        </motion.div>
      </div>
    </section>);

}