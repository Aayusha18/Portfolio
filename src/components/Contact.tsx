import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, LinkedinIcon, GithubIcon, MapPinIcon } from 'lucide-react';
export function Contact() {
  const contactInfo = [
  {
    icon: <MailIcon size={20} />,
    label: 'Email',
    value: 'aayushingavi@gmail.com',
    link: 'mailto:aayushingavi@gmail.com'
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: 'LinkedIn',
    value: 'Aayusha Shingavi',
    link: 'https://www.linkedin.com/in/aayusha-shingavi/'
  },
  {
    icon: <GithubIcon size={20} />,
    label: 'GitHub',
    value: 'github.com/Aayusha18',
    link: 'https://github.com/Aayusha18'
  },
  {
    icon: <MapPinIcon size={20} />,
    label: 'Location',
    value: 'New York City',
    link: null
  }];

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-neutral-500 dark:text-neutral-500 text-lg max-w-2xl mx-auto font-light">
            Have a project in mind or want to discuss product management? I'd
            love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="max-w-2xl mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 10
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.1
              }}
              className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 flex items-center gap-4">
              
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-0.5">
                    {info.label}
                  </p>
                  {info.link ?
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 dark:text-white font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                  
                      {info.value}
                    </a> :

                <p className="text-neutral-900 dark:text-white font-medium">
                      {info.value}
                    </p>
                }
                </div>
              </motion.div>
            )}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <motion.a
              href="https://www.linkedin.com/in/aayusha-shingavi/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 flex items-center justify-center transition-colors"
              aria-label="LinkedIn">
              
              <LinkedinIcon size={20} />
            </motion.a>
            <motion.a
              href="https://github.com/Aayusha18"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 flex items-center justify-center transition-colors"
              aria-label="GitHub">
              
              <GithubIcon size={20} />
            </motion.a>
            <motion.a
              href="mailto:aayushingavi@gmail.com"
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 flex items-center justify-center transition-colors"
              aria-label="Email">
              
              <MailIcon size={20} />
            </motion.a>
          </div>

          <p className="text-center mt-8 text-neutral-500 dark:text-neutral-500 text-sm font-light">
            I'm always interested in hearing about new opportunities,
            collaborations, or just having a conversation about product
            management and technology.
          </p>
        </motion.div>
      </div>
    </section>);

}