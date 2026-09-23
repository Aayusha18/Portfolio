import React from 'react';
import { motion } from 'framer-motion';
import { NowSnapshot } from './about/NowSnapshot';

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
      
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-12 text-center tracking-tight">
          
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8">
            
            <div className="border-l-2 border-neutral-900 dark:border-white pl-6">
              <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                I'm a systems thinker who lives at the intersection of data, design, and strategy. Like Notion, I bring order to chaos. Like Figma, I build for the people using it. Like Claude, I'm endlessly curious and a little obsessed with getting things right. Right now that looks like helping involveMINT build a mutual credit network for minority-owned businesses, and designing a WordPress learning platform for New Leaf Behavioral Health so that mental health education actually reaches the people who need it. Whether I'm debugging a matching algorithm, mapping a user journey, or shipping an AI pipeline at 2am, I'm always chasing the same thing: turning messy, complicated problems into something that just works. At my core, I'm an explorer of ideas who bridges data, design, and strategy to craft solutions that make a real difference, one iteration at a time.
              </p>
            </div>
          </motion.div>

          {/* Right side — live snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            
            <NowSnapshot />
          </motion.div>
        </div>
      </div>
    </section>);

}