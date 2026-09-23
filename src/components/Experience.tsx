import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BriefcaseIcon,
  UsersIcon,
  CalendarIcon,
  ChevronRightIcon,
  TrendingUpIcon,
  XIcon } from
'lucide-react';
interface Experience {
  type: 'industry' | 'leadership';
  role: string;
  organization: string;
  duration: string;
  startDate: Date;
  summary?: string;
  metrics?: string[];
  highlights: string[];
  icon: typeof BriefcaseIcon;
}
export function Experience() {
  const [selectedExperience, setSelectedExperience] =
  useState<Experience | null>(null);
  // Industry experiences
  const industryExperiences: Experience[] = [
  {
    type: 'industry',
    role: 'Product & Data Analyst Intern',
    organization: 'involveMINT',
    duration: '2026 – Present',
    startDate: new Date('2026-06-01'),
    summary:
    'involveMINT is a nonprofit building a community exchange network on mutual credit instead of USD — connecting low-income, women-owned, and minority-owned businesses (especially food-based ones) in a circular economy where transactions net to zero across the network.',
    metrics: ['15+ partner businesses', '$8,600+ community credits exchanged'],
    highlights: [
    'Own QA and product-side testing for the matching algorithm — a cyclical motif model inspired by the Sardex mutual credit system that pairs businesses by type, products offered, products needed, and cyclical trade patterns',
    'Identify failure modes from the user experience layer, document bugs with reproduction steps and business impact, and triage fixes directly with the software developer',
    'Lead migration of the Panda data dashboard from the legacy app to the new platform, defining requirements for transaction tracking, wallet balances, credit/debit stats, and treasury wallet impact',
    'Give network administrators clear visibility into exchange health across the progressive web app (text + push notifications)',
    'Run product and project management for a lean two-person technical team — sprint coordination frameworks, decision logs, and handoff documentation'],

    icon: BriefcaseIcon
  },
  {
    type: 'industry',
    role: 'Platform Configuration Associate (Volunteer)',
    organization: 'New Leaf Behavioral Health',
    duration: '2026 – Present',
    startDate: new Date('2026-05-01'),
    summary:
    'New Leaf is a nonprofit outpatient mental health organization. I am designing, configuring, and launching a WordPress learning platform for two audiences: the public learning life skills (assertiveness, conflict management, boundary setting) and healthcare professionals seeking clinical model training and continuing education.',
    metrics: ['2 audience paths', 'Research & configuration phase'],
    highlights: [
    'Comparing WordPress plugin-based options against white-label LMS/CMS platforms on cost, scalability, maintenance, and interactive learning support',
    "Translating the founder's ideas and team discussions into a structured platform requirements document",
    'Defining user journeys for both audiences — landing page → login → courses → content → assessments → results — with a sitemap outline',
    'Assessing integrations for Stripe payments, promo codes, time-limited access, newsletter/CRM capture, inline quiz scoring, and video hosting',
    'Designing separate subdomains and entry points for each audience on shared infrastructure',
    'Creating shared documentation and a decision log so future volunteers can pick up seamlessly',
    'Deliverables: CMS/LMS comparison matrix, requirements doc, user flow & sitemap, plugin shortlist with cost estimates, and initial prototype components'],

    icon: BriefcaseIcon
  },
  {
    type: 'industry',
    role: 'Product Manager',
    organization: 'Chat360',
    duration: 'July 2023 – Mar 2024',
    startDate: new Date('2023-09-01'),
    highlights: [
    'Defined and prioritized product requirements, user stories, and roadmaps for omnichannel chatbot and voice AI solutions',
    'Led Agile ceremonies and collaborated cross-functionally using Jira',
    'Strengthened cross-functional collaboration, improving sprint efficiency by 20%'],

    icon: BriefcaseIcon
  },
  {
    type: 'industry',
    role: 'Data Analyst',
    organization: 'Vishwakarma Institute of Technology',
    duration: 'Aug 2022 – May 2023',
    startDate: new Date('2022-08-01'),
    highlights: [
    'Conducted in-depth review of 50+ academic papers on Metaverse in education',
    'Performed comparative analysis revealing 40% higher retention in Metaverse learning',
    'Designed and led structured survey of 150 students, processed 500+ responses'],

    icon: BriefcaseIcon
  }].
  sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  // PMC at Stevens journey
  const pmcJourney: Experience[] = [
  {
    type: 'leadership',
    role: 'President',
    organization: 'Product Management Club at Stevens',
    duration: 'Jun 2025 – May 2026',
    startDate: new Date('2025-06-01'),
    highlights: [
    'Lead 200+ member community focused on product innovation and AI',
    'Mentor executive members and coordinate external speakers',
    'Drive creative strategy for events and product case competitions'],

    icon: UsersIcon
  },
  {
    type: 'leadership',
    role: 'Vice President',
    organization: 'Product Management Club at Stevens',
    duration: 'Jan 2025 – May 2025',
    startDate: new Date('2025-01-01'),
    highlights: [
    'Managed operations for 200+ club members',
    'Organized workshops, networking sessions, and mentorship programs',
    'Increased participation by 40%'],

    icon: UsersIcon
  },
  {
    type: 'leadership',
    role: 'Marketing Volunteer',
    organization: 'Product Management Club at Stevens',
    duration: 'Sep 2024 – Dec 2024',
    startDate: new Date('2024-09-01'),
    highlights: [
    'Designed promotional materials and coordinated logistics',
    'Handled marketing outreach and campus branding'],

    icon: UsersIcon
  }];

  // Vishwakarma journey
  const vishwakarmaJourney: Experience[] = [
  {
    type: 'leadership',
    role: 'Club Mentor',
    organization: 'Vishwakarma Expression Hub',
    duration: 'Jun 2022 – May 2023',
    startDate: new Date('2022-06-01'),
    highlights: [
    'Guided new team leads through leadership development',
    'Conducted training on communication and collaboration'],

    icon: UsersIcon
  },
  {
    type: 'leadership',
    role: 'Club Lead',
    organization: 'Vishwakarma Expression Hub',
    duration: 'Aug 2021 – Jun 2022',
    startDate: new Date('2021-08-01'),
    highlights: [
    'Restructured and scaled 60+ member creative team',
    'Launched events with 500+ attendees, increasing engagement by 50%'],

    icon: UsersIcon
  },
  {
    type: 'leadership',
    role: 'Head of Management',
    organization: 'Vishwakarma Expression Hub',
    duration: 'Oct 2020 – Jul 2021',
    startDate: new Date('2020-10-01'),
    highlights: [
    'Led cross-functional operations for 50+ members',
    'Built internal systems for event tracking',
    'Nurtured creative community of 300+'],

    icon: UsersIcon
  }];

  // Other leadership
  const otherLeadership: Experience[] = [
  {
    type: 'leadership',
    role: 'Graduate Peer Leader',
    organization: 'Stevens Graduate Student Life',
    duration: 'Jan 2025 – May 2025',
    startDate: new Date('2025-01-01'),
    highlights: [
    'Mentored new students through onboarding and campus acclimation',
    'Created welcoming environment for peers'],

    icon: UsersIcon
  }];

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
      
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
          className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            My Journey
          </h2>
          <p className="text-neutral-500 dark:text-neutral-500 text-lg max-w-2xl mx-auto font-light">
            A story of growth across product, leadership, and innovation
          </p>
        </motion.div>

        {/* Industry Experience Section */}
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
          className="mb-20">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <BriefcaseIcon className="w-5 h-5 text-neutral-900 dark:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Industry Experience
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industryExperiences.map((experience, index) =>
            <motion.div
              key={index}
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
                delay: index * 0.1
              }}
              whileHover={{
                scale: 1.05
              }}>
              
                <ExperienceCard
                experience={experience}
                onClick={() => setSelectedExperience(experience)} />
              
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Leadership Experience Section */}
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
          }}>
          
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <UsersIcon className="w-5 h-5 text-neutral-900 dark:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Leadership Experience
            </h3>
          </div>

          {/* PMC Journey */}
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
            className="mb-16">
            
            <div className="flex items-center gap-3 mb-2">
              <TrendingUpIcon className="w-5 h-5 text-neutral-900 dark:text-white" />
              <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">
                Product Management Club at Stevens
              </h4>
              <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 ml-4" />
            </div>
            <p className="text-neutral-500 dark:text-neutral-500 mb-8 italic text-sm pl-8">
              From volunteer to president — building a thriving PM community
            </p>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800" />
              <div className="space-y-6">
                {pmcJourney.map((experience, index) =>
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.1
                  }}
                  whileHover={{
                    scale: 1.03
                  }}
                  className="relative pl-16">
                  
                    <div className="absolute left-[1.125rem] top-6 w-3 h-3 rounded-full bg-neutral-900 dark:bg-white border-2 border-neutral-50 dark:border-neutral-900" />
                    <ExperienceCard
                    experience={experience}
                    onClick={() => setSelectedExperience(experience)}
                    showOrganization={false} />
                  
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Vishwakarma Journey */}
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
            className="mb-16">
            
            <div className="flex items-center gap-3 mb-2">
              <TrendingUpIcon className="w-5 h-5 text-neutral-900 dark:text-white" />
              <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">
                Vishwakarma Expression Hub
              </h4>
              <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 ml-4" />
            </div>
            <p className="text-neutral-500 dark:text-neutral-500 mb-8 italic text-sm pl-8">
              Scaling creative communities and nurturing future leaders
            </p>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800" />
              <div className="space-y-6">
                {vishwakarmaJourney.map((experience, index) =>
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.1
                  }}
                  whileHover={{
                    scale: 1.03
                  }}
                  className="relative pl-16">
                  
                    <div className="absolute left-[1.125rem] top-6 w-3 h-3 rounded-full bg-neutral-900 dark:bg-white border-2 border-neutral-50 dark:border-neutral-900" />
                    <ExperienceCard
                    experience={experience}
                    onClick={() => setSelectedExperience(experience)}
                    showOrganization={false} />
                  
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Other Leadership */}
          {otherLeadership.length > 0 &&
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
            }}>
            
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
                <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Additional Leadership
                </h4>
              </div>

              <div className="grid gap-6">
                {otherLeadership.map((experience, index) =>
              <motion.div
                key={index}
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
                  delay: index * 0.1
                }}
                whileHover={{
                  scale: 1.05
                }}>
                
                    <ExperienceCard
                  experience={experience}
                  onClick={() => setSelectedExperience(experience)} />
                
                  </motion.div>
              )}
              </div>
            </motion.div>
          }
        </motion.div>

        {/* Quote Banner */}
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
          className="mt-20 bg-neutral-900 dark:bg-neutral-800 border dark:border-neutral-700 rounded-xl p-8 text-center">
          
          <blockquote className="text-xl text-white font-light italic">
            "Leadership gave me perspective; product building gave me purpose."
          </blockquote>
        </motion.div>

        {/* Experience Overlay Modal */}
        <AnimatePresence>
          {selectedExperience &&
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={() => setSelectedExperience(null)}>
            
              <motion.div
              initial={{
                scale: 0.95,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              exit={{
                scale: 0.95,
                opacity: 0
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden w-[80vw] max-w-3xl max-h-[80vh] overflow-y-auto border border-neutral-200 dark:border-neutral-800">
              
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs mb-4 ${selectedExperience.type === 'industry' ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium'}`}>
                      
                        <selectedExperience.icon className="w-3 h-3" />
                        {selectedExperience.type === 'industry' ?
                      'Industry' :
                      'Leadership'}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
                        {selectedExperience.role}
                      </h3>
                      <p className="text-neutral-500 dark:text-neutral-400 font-medium text-lg">
                        {selectedExperience.organization}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500 mt-3">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{selectedExperience.duration}</span>
                      </div>
                    </div>
                    <button
                    onClick={() => setSelectedExperience(null)}
                    className="flex-shrink-0 text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                    
                      <XIcon className="w-6 h-6" />
                    </button>
                  </div>

                  {selectedExperience.summary &&
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-light mb-6">
                      {selectedExperience.summary}
                    </p>
                }

                  {selectedExperience.metrics &&
                <div className="flex flex-wrap gap-2 mb-8">
                      {selectedExperience.metrics.map((metric) =>
                  <span
                    key={metric}
                    className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-3 py-1.5 rounded-lg text-sm font-medium">
                    
                          {metric}
                        </span>
                  )}
                    </div>
                }

                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 uppercase tracking-wider">
                      Key Contributions
                    </h4>
                    <ul className="space-y-4">
                      {selectedExperience.highlights.map((highlight, i) =>
                    <motion.li
                      key={i}
                      initial={{
                        opacity: 0,
                        x: -10
                      }}
                      animate={{
                        opacity: 1,
                        x: 0
                      }}
                      transition={{
                        delay: i * 0.1
                      }}
                      className="flex items-start gap-4 text-neutral-600 dark:text-neutral-400">
                      
                          <div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold">✓</span>
                          </div>
                          <span className="leading-relaxed">{highlight}</span>
                        </motion.li>
                    )}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </section>);

}
function ExperienceCard({
  experience,
  onClick,
  showOrganization = true




}: {experience: Experience;onClick: () => void;showOrganization?: boolean;}) {
  const isIndustry = experience.type === 'industry';
  return (
    <div onClick={onClick} className="cursor-pointer group">
      <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 transition-all hover:border-neutral-300 dark:hover:border-neutral-700">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="mb-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs ${isIndustry ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium'}`}>
                
                <experience.icon className="w-3 h-3" />
                {isIndustry ? 'Industry' : 'Leadership'}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white leading-tight mb-1">
              {experience.role}
            </h3>
            {showOrganization &&
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium mb-2">
                {experience.organization}
              </p>
            }
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-500">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>{experience.duration}</span>
            </div>
          </div>

          <div className="flex-shrink-0 text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>);

}