import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  TrendingUpIcon,
  UsersIcon,
  VideoIcon,
  MessageCircleIcon,
  HeartIcon,
  EyeIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  SearchIcon,
  TargetIcon,
  LightbulbIcon,
  WrenchIcon,
  TestTubeIcon,
  PlayCircleIcon,
  XIcon } from
'lucide-react';
import { Navbar } from '../components/Navbar';
export function CampusCompassDetail() {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const journeyStages = [
  {
    icon: SearchIcon,
    title: 'Empathize',
    subtitle: 'User Research',
    description: 'Conducted surveys and interviews with graduate students',
    insights: [
    'Students miss 60% of events',
    'Check 5+ platforms daily',
    'Email overload is real']

  },
  {
    icon: TargetIcon,
    title: 'Define',
    subtitle: 'Problem Statement',
    description: 'Identified core pain points and user needs',
    insights: [
    'Scattered communication',
    'Information overload',
    'Need for centralization']

  },
  {
    icon: LightbulbIcon,
    title: 'Ideate',
    subtitle: 'Solution Brainstorming',
    description: 'Explored platform options and engagement strategies',
    insights: [
    'Instagram as platform',
    'Visual storytelling approach',
    'Weekly reel format']

  },
  {
    icon: WrenchIcon,
    title: 'Prototype',
    subtitle: 'MVP Development',
    description: 'Built Instagram account with LinkTree integration',
    insights: [
    'Content calendar created',
    'Brand identity established',
    'Engagement strategy defined']

  },
  {
    icon: TestTubeIcon,
    title: 'Test',
    subtitle: 'Validation & Iteration',
    description: 'Launched MVP and gathered user feedback',
    insights: [
    '88.2% would follow',
    '3.2K profile views',
    'Positive user feedback']

  }];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />

      {/* Floating Video Button */}
      <motion.button
        initial={{
          scale: 0,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          delay: 1,
          type: 'spring'
        }}
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        onClick={() => setIsVideoModalOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 group">
        
        <PlayCircleIcon className="w-6 h-6" />
        <span className="font-semibold hidden group-hover:inline-block pr-2 transition-all text-sm">
          Watch Explainer
        </span>
      </motion.button>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen &&
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
          onClick={() => setIsVideoModalOpen(false)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          
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
            className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800">
            
              <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-white dark:hover:bg-black transition-colors">
              
                <XIcon className="w-6 h-6 text-neutral-900 dark:text-white" />
              </button>

              <div className="bg-neutral-100 dark:bg-neutral-800 p-6 border-b border-neutral-200 dark:border-neutral-700">
                <h3 className="text-2xl font-bold flex items-center gap-3 text-neutral-900 dark:text-white">
                  <PlayCircleIcon className="w-8 h-8" />
                  Campus Compass Explainer
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  See the journey behind the MVP
                </p>
              </div>

              <div
              className="relative w-full"
              style={{
                paddingTop: '56.25%'
              }}>
              
                <iframe
                src="https://drive.google.com/file/d/1r0-AyGYsHuUtzR6cxG7DHmaHytvW-86S/preview"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay"
                allowFullScreen />
              
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.button
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white mb-8 transition-colors text-sm font-medium uppercase tracking-wider">
            
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Projects
          </motion.button>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="max-w-3xl">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight leading-tight">
              Campus Compass
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Human Centered Design', 'MVP', 'Product Strategy'].map(
                (tag) =>
                <span
                  key={tag}
                  className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-semibold uppercase tracking-wider">
                  
                    {tag}
                  </span>

              )}
            </div>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              Bridging campus engagement gaps through design thinking and
              digital accessibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem → Solution Journey */}
      <section className="py-24 px-6 bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-24">
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
              className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
              
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                Problem
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
                Graduate students miss events due to scattered communication
                across multiple channels.
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
                delay: 0.1
              }}
              className="bg-neutral-900 dark:bg-white rounded-2xl p-8 text-white dark:text-neutral-900">
              
              <h3 className="text-xl font-bold mb-4">Solution</h3>
              <p className="text-sm leading-relaxed font-light text-neutral-300 dark:text-neutral-600">
                Instagram-based MVP centralizing events through visual
                storytelling and familiar platform.
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
                delay: 0.2
              }}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
              
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                Approach
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
                Design thinking methodology with rapid iteration and user
                validation.
              </p>
            </motion.div>
          </div>

          {/* Design Thinking Journey */}
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
            className="mb-12">
            
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center tracking-tight">
              Design Thinking Journey
            </h3>

            {/* Desktop Journey */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute top-8 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-800" />
                <div className="grid grid-cols-5 gap-6">
                  {journeyStages.map((stage, index) =>
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
                    className="relative">
                    
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white flex items-center justify-center relative z-10">
                          <stage.icon className="w-6 h-6 text-neutral-900 dark:text-white" />
                        </div>
                      </div>
                      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-5 border border-neutral-200 dark:border-neutral-800 h-full">
                        <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                          {stage.title}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold uppercase tracking-wider mb-3">
                          {stage.subtitle}
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed font-light">
                          {stage.description}
                        </p>
                        <div className="space-y-2">
                          {stage.insights.map((insight, i) =>
                        <div key={i} className="flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white mt-2 flex-shrink-0" />
                              <span className="text-xs text-neutral-600 dark:text-neutral-400 font-light">
                                {insight}
                              </span>
                            </div>
                        )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Journey */}
            <div className="md:hidden space-y-6">
              {journeyStages.map((stage, index) =>
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
                className="flex gap-4">
                
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white flex items-center justify-center flex-shrink-0">
                    <stage.icon className="w-5 h-5 text-neutral-900 dark:text-white" />
                  </div>
                  <div className="flex-1 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-5 border border-neutral-200 dark:border-neutral-800">
                    <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold uppercase tracking-wider mb-3">
                      {stage.subtitle}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed font-light">
                      {stage.description}
                    </p>
                    <div className="space-y-2">
                      {stage.insights.map((insight, i) =>
                    <div key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white mt-2 flex-shrink-0" />
                          <span className="text-xs text-neutral-600 dark:text-neutral-400 font-light">
                            {insight}
                          </span>
                        </div>
                    )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Empathy Map & Personas */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
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
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white text-center mb-16 tracking-tight">
            
            Understanding Our Users
          </motion.h2>

          {/* Empathy Map */}
          <div className="mb-20">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-8 text-center uppercase tracking-wider">
              Empathy Map
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
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
                className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
                
                <div className="flex items-center gap-3 mb-6">
                  <EyeIcon className="w-6 h-6 text-neutral-900 dark:text-white" />
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Says & Thinks
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 font-light">
                  <li>"I always miss important events"</li>
                  <li>"There's too much information scattered everywhere"</li>
                  <li>"I wish there was one place for everything"</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
                
                <div className="flex items-center gap-3 mb-6">
                  <HeartIcon className="w-6 h-6 text-neutral-900 dark:text-white" />
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Feels
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 font-light">
                  <li>Overwhelmed by multiple channels</li>
                  <li>FOMO about missing networking opportunities</li>
                  <li>Frustrated with email overload</li>
                </ul>
              </motion.div>
              <motion.div
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
                className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
                
                <div className="flex items-center gap-3 mb-6">
                  <ThumbsDownIcon className="w-6 h-6 text-neutral-900 dark:text-white" />
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Pains
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 font-light">
                  <li>Missed career opportunities</li>
                  <li>Information overload from 5+ platforms</li>
                  <li>Last-minute event discoveries</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
                
                <div className="flex items-center gap-3 mb-6">
                  <ThumbsUpIcon className="w-6 h-6 text-neutral-900 dark:text-white" />
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Gains
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 font-light">
                  <li>Centralized event information</li>
                  <li>Visual, engaging content</li>
                  <li>Platform they already use daily</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Personas */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-8 text-center uppercase tracking-wider">
              User Personas
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
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
                className="bg-neutral-900 dark:bg-white rounded-2xl p-8 text-white dark:text-neutral-900">
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white dark:bg-neutral-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <UsersIcon className="w-8 h-8 text-neutral-900 dark:text-white" />
                  </div>
                  <h4 className="text-xl font-bold">The Networker</h4>
                  <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-1">
                    Sarah, 24 | MBA Student
                  </p>
                </div>
                <div className="space-y-4 text-sm font-light">
                  <p>
                    <strong className="font-semibold">Goal:</strong> Attend
                    career-building events
                  </p>
                  <p>
                    <strong className="font-semibold">Challenge:</strong> Misses
                    events due to email overload
                  </p>
                  <p>
                    <strong className="font-semibold">Needs:</strong> Quick,
                    visual event updates
                  </p>
                </div>
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
                  delay: 0.1
                }}
                className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <UsersIcon className="w-8 h-8 text-neutral-900 dark:text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
                    The Busy Achiever
                  </h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    Mike, 26 | MS Student
                  </p>
                </div>
                <div className="space-y-4 text-sm font-light text-neutral-600 dark:text-neutral-400">
                  <p>
                    <strong className="font-semibold text-neutral-900 dark:text-white">
                      Goal:
                    </strong>{' '}
                    Balance academics and social life
                  </p>
                  <p>
                    <strong className="font-semibold text-neutral-900 dark:text-white">
                      Challenge:
                    </strong>{' '}
                    Limited time to check multiple platforms
                  </p>
                  <p>
                    <strong className="font-semibold text-neutral-900 dark:text-white">
                      Needs:
                    </strong>{' '}
                    One-stop event hub
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Metrics */}
      <section className="py-24 px-6 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
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
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white text-center mb-16 tracking-tight">
            
            Impact & Results
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
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
              className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
              
              <div className="max-w-sm mx-auto mb-8 border border-neutral-200 dark:border-neutral-700 p-2 bg-white dark:bg-neutral-950">
                <img
                  src="/Screenshot_2025-11-06_165145.png"
                  alt="Campus Compass Metrics Dashboard"
                  className="w-full h-auto grayscale" />
                
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-1">
                    3.2K
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                    Profile Views
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-1">
                    196
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                    Interactions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-1">
                    89
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                    New Followers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-1">
                    55
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                    Content Shared
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
              
              <div className="max-w-sm mx-auto border border-neutral-200 dark:border-neutral-700 p-2 bg-white dark:bg-neutral-950">
                <img
                  src="/Screenshot_2025-11-06_165209.png"
                  alt="Campus Compass Views Breakdown"
                  className="w-full h-auto grayscale" />
                
              </div>
            </motion.div>
          </div>

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
            className="bg-neutral-900 dark:bg-white rounded-2xl p-12 text-white dark:text-neutral-900">
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="max-w-sm mx-auto border border-neutral-700 dark:border-neutral-200 p-2 bg-neutral-800 dark:bg-neutral-50">
                <img
                  src="/Screenshot_2025-11-06_165258.png"
                  alt="Would you follow Campus Compass poll results"
                  className="w-full h-auto grayscale" />
                
              </div>
              <div>
                <div className="mb-8">
                  <div className="text-6xl font-bold mb-4">88.2%</div>
                  <p className="text-xl font-light text-neutral-300 dark:text-neutral-600">
                    of surveyed students said they would follow Campus Compass
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-neutral-900 dark:text-white text-xs font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="font-light text-neutral-300 dark:text-neutral-600">
                      "Finally, I can see all events in one place!"
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-neutral-900 dark:text-white text-xs font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="font-light text-neutral-300 dark:text-neutral-600">
                      "The reels make it so easy to stay updated."
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features & Reflection */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
            {
              icon: VideoIcon,
              label: 'Weekly Event Reels'
            },
            {
              icon: TrendingUpIcon,
              label: 'LinkTree Integration'
            },
            {
              icon: UsersIcon,
              label: 'Community Engagement'
            },
            {
              icon: MessageCircleIcon,
              label: 'Direct Feedback'
            }].
            map((feature, index) =>
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
                delay: index * 0.05
              }}
              className="bg-white dark:bg-neutral-950 rounded-xl p-6 text-center border border-neutral-200 dark:border-neutral-800">
              
                <feature.icon className="w-8 h-8 text-neutral-900 dark:text-white mx-auto mb-4" />
                <p className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">
                  {feature.label}
                </p>
              </motion.div>
            )}
          </div>

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
            className="max-w-4xl mx-auto text-center mb-16">
            
            <blockquote className="text-2xl md:text-3xl text-neutral-900 dark:text-white font-light leading-relaxed">
              "Great products don't always need complex tech — sometimes,
              empathy and accessibility make the biggest impact."
            </blockquote>
          </motion.div>

          <div className="text-center">
            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-semibold flex items-center gap-2 mx-auto transition-colors text-sm uppercase tracking-wider">
              
              <ArrowLeftIcon className="w-4 h-4" />
              Back to All Projects
            </motion.button>
          </div>
        </div>
      </section>
    </div>);

}