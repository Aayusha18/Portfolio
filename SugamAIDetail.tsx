import React, { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  SearchIcon,
  TargetIcon,
  LightbulbIcon,
  WrenchIcon,
  TestTubeIcon,
  UsersIcon,
  ClockIcon,
  CheckCircleIcon,
  FileTextIcon,
  ChromeIcon,
  DatabaseIcon,
  ShieldIcon,
  SparklesIcon,
  TrendingUpIcon,
  PlayCircleIcon,
  XIcon } from
'lucide-react';
import { Navbar } from '../components/Navbar';
export function SugamAIDetail() {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const journeyStages = [
  {
    icon: SearchIcon,
    title: 'Empathize',
    subtitle: 'User Research',
    description: 'Interviewed HR credentialing teams to identify pain points',
    insights: [
    'Repetitive form-filling',
    'Manual data duplication',
    'Compliance risks']

  },
  {
    icon: TargetIcon,
    title: 'Define',
    subtitle: 'Problem Statement',
    description: 'Identified inefficiency in multi-form data duplication',
    insights: ['4-6 week delays', 'No centralized data', 'High error rates']
  },
  {
    icon: LightbulbIcon,
    title: 'Ideate',
    subtitle: 'Solution Design',
    description: 'Designed dual-system: web app + Chrome extension',
    insights: [
    'AI-powered extraction',
    'Automated form-filling',
    'Human-in-loop validation']

  },
  {
    icon: WrenchIcon,
    title: 'Prototype',
    subtitle: 'MVP Development',
    description: 'Built AI pipeline with OCR, extraction, and autofill',
    insights: [
    'AWS Textract integration',
    'LangChain parsing',
    'Chrome extension API']

  },
  {
    icon: TestTubeIcon,
    title: 'Test',
    subtitle: 'Validation & Iteration',
    description: 'Refined validation logic and UX with healthcare admins',
    insights: [
    '>90% autofill accuracy',
    '+70% efficiency gain',
    'HIPAA compliance']

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
                  Sugam AI Explainer
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  See how AI transforms healthcare credentialing
                </p>
              </div>

              <div
              className="relative w-full"
              style={{
                paddingTop: '56.25%'
              }}>
              
                <iframe
                src="https://www.youtube.com/embed/CjkalZcX1FM"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
            
            <div className="flex items-center gap-4 mb-6">
              <SparklesIcon className="w-10 h-10 text-neutral-900 dark:text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
                Sugam AI
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {['AI/ML', 'Healthcare Automation', 'Chrome Extension'].map(
                (tag) =>
                <span
                  key={tag}
                  className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-semibold uppercase tracking-wider">
                  
                    {tag}
                  </span>

              )}
            </div>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              Transforming 4-6 week credentialing workflows into 5-7 days
              through intelligent automation.
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
                Healthcare credentialing requires manual data entry across
                dozens of forms, causing 4-6 week delays and compliance risks.
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
                AI-driven dual system (web app + Chrome extension) that
                automates data extraction and form-filling with &gt;90%
                accuracy.
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
                Design thinking with AI/ML integration: OCR parsing, validation,
                and human-in-loop review system.
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
                      delay: index * 0.15
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

      {/* System Architecture */}
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
            
            System Architecture
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
              
              <div className="flex items-center gap-4 mb-6">
                <DatabaseIcon className="w-8 h-8 text-neutral-900 dark:text-white" />
                <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Web Application
                </h4>
              </div>
              <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 font-light">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                  Upload CVs & supporting documents
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                  OCR + AI extraction (AWS Textract & LangChain)
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                  PostgreSQL data storage with validation
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                  HR dashboard for review & approval
                </li>
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
              
              <div className="flex items-center gap-4 mb-6">
                <ChromeIcon className="w-8 h-8 text-neutral-900 dark:text-white" />
                <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Chrome Extension
                </h4>
              </div>
              <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 font-light">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                  Integrated autofill for live portals
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                  Secure API call to fetch provider data
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                  Auto-fills online forms and PDFs
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                  HIPAA-compliant with audit logging
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Data Flow */}
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
            className="bg-neutral-900 dark:bg-white rounded-2xl p-8">
            
            <h4 className="text-lg font-semibold text-white dark:text-neutral-900 mb-6 text-center uppercase tracking-wider">
              Data Flow Pipeline
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {[
              'Resume Upload',
              'OCR/LangChain',
              'Database',
              'Validation',
              'Extension Autofill',
              'Review & Submit'].
              map((step, i, arr) =>
              <Fragment key={step}>
                  <span className="bg-white dark:bg-neutral-900 px-4 py-2 rounded-lg font-medium text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800">
                    {step}
                  </span>
                  {i < arr.length - 1 &&
                <span className="text-neutral-500 dark:text-neutral-400">
                      →
                    </span>
                }
                </Fragment>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* UI Showcase */}
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
            
            Interface Showcase
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
            {
              src: "/Screenshot_2025-11-06_215732.png",
              label: 'Dashboard Overview'
            },
            {
              src: "/Screenshot_2025-11-06_215751.png",
              label: 'Data Entry'
            },
            {
              src: "/Screenshot_2025-11-06_215814.png",
              label: 'Validation'
            },
            {
              src: "/Screenshot_2025-11-06_215829.png",
              label: 'Settings'
            }].
            map((screenshot, index) =>
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
              className="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800">
              
                <div className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 p-2 mb-4">
                  <img
                  src={screenshot.src}
                  alt={screenshot.label}
                  className="w-full h-auto grayscale" />
                
                </div>
                <p className="text-center text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">
                  {screenshot.label}
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
            className="max-w-4xl mx-auto bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
            
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 text-center uppercase tracking-wider">
              Chrome Extension
            </h3>
            <div className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 p-2">
              <img
                src="/Screenshot_2025-11-06_212657.png"
                alt="Sugam AI Chrome Extension Interface"
                className="w-full h-auto grayscale" />
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
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
            
            Impact & Results
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
            {
              icon: ClockIcon,
              value: '5-7 days',
              label: 'Credentialing Time',
              sub: 'from 4-6 weeks'
            },
            {
              icon: CheckCircleIcon,
              value: '>90%',
              label: 'Autofill Accuracy',
              sub: 'validated'
            },
            {
              icon: TrendingUpIcon,
              value: '+70%',
              label: 'HR Efficiency',
              sub: 'time saved'
            },
            {
              icon: FileTextIcon,
              value: '<10',
              label: 'Manual Edits',
              sub: 'from 100+ fields'
            }].
            map((metric, i) =>
            <motion.div
              key={i}
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
                delay: i * 0.1
              }}
              className="text-center">
              
                <div className="w-16 h-16 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-neutral-900 dark:text-white" />
                </div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-500 font-light">
                  {metric.sub}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Tech Stack & Future Scope */}
      <section className="py-24 px-6 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-8 text-center uppercase tracking-wider">
              Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
              'LangChain',
              'AWS Textract',
              'Next.js',
              'Node.js',
              'PostgreSQL',
              'Flask',
              'Chrome Extension API'].
              map((tech, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.05
                }}
                className="bg-neutral-50 dark:bg-neutral-900 px-6 py-3 rounded-full text-sm font-medium text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800">
                
                  {tech}
                </motion.div>
              )}
            </div>
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
              "Sugam AI bridges healthcare administration and intelligent
              automation — transforming credentialing from a manual bottleneck
              into a seamless, AI-assisted workflow."
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