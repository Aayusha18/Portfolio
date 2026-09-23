import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  SearchIcon,
  TargetIcon,
  LightbulbIcon,
  TestTubeIcon,
  BrainCircuitIcon,
  BarChart3Icon,
  UsersIcon,
  TrendingUpIcon,
  AwardIcon,
  BookOpenIcon,
  GraduationCapIcon,
  SparklesIcon } from
'lucide-react';
import { Navbar } from '../components/Navbar';
export function MetaverseEducationDetail() {
  const navigate = useNavigate();
  const researchStages = [
  {
    icon: SearchIcon,
    title: 'Literature Review',
    subtitle: 'Research Foundation',
    description:
    'Analyzed 50+ academic studies on AR/VR and Metaverse in education',
    insights: [
    'Identified key adoption factors',
    'Reviewed immersive learning trends',
    'Mapped technology barriers']

  },
  {
    icon: UsersIcon,
    title: 'Survey Design',
    subtitle: 'Data Collection',
    description: 'Designed and distributed survey to 100+ participants',
    insights: [
    'Demographic profiling',
    'Technology familiarity assessment',
    'Adoption intent measurement']

  },
  {
    icon: BarChart3Icon,
    title: 'Data Analysis',
    subtitle: 'Pattern Discovery',
    description: 'Processed survey data using Python, Pandas, and SQL',
    insights: [
    'Identified behavioral patterns',
    'Statistical correlations',
    'Feature engineering']

  },
  {
    icon: BrainCircuitIcon,
    title: 'AI Model Development',
    subtitle: 'Predictive Modeling',
    description:
    'Built ML models using KNN, SVM, and Decision Tree algorithms',
    insights: [
    'Model training & tuning',
    'Cross-validation testing',
    'Performance optimization']

  },
  {
    icon: TestTubeIcon,
    title: 'Evaluation',
    subtitle: 'Insights & Recommendations',
    description: 'Extracted strategic insights from model predictions',
    insights: [
    '85% prediction accuracy',
    'Key adoption drivers identified',
    'Product strategy recommendations']

  }];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />

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
              <GraduationCapIcon className="w-10 h-10 text-neutral-900 dark:text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
                Metaverse Education
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {['AI Research', 'Predictive Modeling', 'Data Analytics'].map(
                (tag) =>
                <span
                  key={tag}
                  className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-semibold uppercase tracking-wider">
                  
                    {tag}
                  </span>

              )}
            </div>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              Research-driven exploration of how AI and analytics reveal the
              potential of Metaverse-based education.
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
                Core Question
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
                Who is most likely to embrace immersive learning — and why?
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
              
              <h3 className="text-xl font-bold mb-4">Approach</h3>
              <p className="text-sm leading-relaxed font-light text-neutral-300 dark:text-neutral-600">
                Combined literature review, user surveys, and machine learning
                to predict adoption patterns.
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
                Impact
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
                85% prediction accuracy with actionable insights for EdTech
                product strategy.
              </p>
            </motion.div>
          </div>

          {/* Research Journey */}
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
              Research Process
            </h3>

            {/* Desktop Journey */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute top-8 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-800" />
                <div className="grid grid-cols-5 gap-6">
                  {researchStages.map((stage, index) =>
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
              {researchStages.map((stage, index) =>
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

      {/* Survey Results */}
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
            
            Survey Insights
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
              
              <img
                src="/image.png"
                alt="Metaverse Education Survey Results"
                className="w-full h-auto grayscale" />
              
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
              className="space-y-6">
              
              <div className="bg-neutral-900 dark:bg-white rounded-2xl p-8 text-white dark:text-neutral-900">
                <div className="text-6xl font-bold mb-4">73%</div>
                <p className="text-lg font-light text-neutral-300 dark:text-neutral-600">
                  Expressed interest in using the Metaverse for education
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
                <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                  22%
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 font-light">
                  Were unsure, citing cost and privacy concerns
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
                <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                  5%
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 font-light">
                  Uninterested, preferring traditional methods
                </p>
              </div>
            </motion.div>
          </div>

          {/* Additional Insights */}
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
            className="bg-white dark:bg-neutral-950 rounded-2xl p-10 border border-neutral-200 dark:border-neutral-800">
            
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-8 text-center uppercase tracking-wider">
              Key Findings
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                'Engineering and tech backgrounds showed higher awareness',
                'Perceived usefulness was the top adoption driver',
                'Ease of use significantly influenced interest'].
                map((finding, i) =>
                <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white dark:text-neutral-900 text-xs font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-neutral-600 dark:text-neutral-400 font-light">
                      {finding}
                    </span>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                {[
                'System compatibility was a key consideration',
                'Privacy concerns were the main barrier',
                'Cost was a secondary adoption factor'].
                map((finding, i) =>
                <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white dark:text-neutral-900 text-xs font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-neutral-600 dark:text-neutral-400 font-light">
                      {finding}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Model Results */}
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
            
            AI Model Performance
          </motion.h2>

          {/* Model Comparison Table */}
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
            className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 mb-12">
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b border-neutral-300 dark:border-neutral-700">
                    <th className="text-left py-4 px-4 text-neutral-900 dark:text-white font-semibold uppercase tracking-wider text-xs">
                      Model
                    </th>
                    <th className="text-center py-4 px-4 text-neutral-900 dark:text-white font-semibold uppercase tracking-wider text-xs">
                      Accuracy
                    </th>
                    <th className="text-center py-4 px-4 text-neutral-900 dark:text-white font-semibold uppercase tracking-wider text-xs">
                      Precision
                    </th>
                    <th className="text-center py-4 px-4 text-neutral-900 dark:text-white font-semibold uppercase tracking-wider text-xs">
                      Recall
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                  {
                    model: 'Decision Tree',
                    accuracy: '77%',
                    precision: '74%',
                    recall: '75%'
                  },
                  {
                    model: 'SVM',
                    accuracy: '82%',
                    precision: '80%',
                    recall: '81%'
                  },
                  {
                    model: 'KNN',
                    accuracy: '85%',
                    precision: '83%',
                    recall: '84%',
                    highlight: true
                  }].
                  map((row, index) =>
                  <tr
                    key={index}
                    className={`border-b border-neutral-200 dark:border-neutral-800 ${row.highlight ? 'bg-neutral-100 dark:bg-neutral-800' : ''}`}>
                    
                      <td className="py-5 px-4 font-medium text-neutral-900 dark:text-white">
                        {row.model}
                        {row.highlight &&
                      <span className="ml-3 text-xs bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-2 py-1 rounded-full font-semibold">
                            Best
                          </span>
                      }
                      </td>
                      <td className="text-center py-5 px-4 text-neutral-600 dark:text-neutral-400 font-light">
                        {row.accuracy}
                      </td>
                      <td className="text-center py-5 px-4 text-neutral-600 dark:text-neutral-400 font-light">
                        {row.precision}
                      </td>
                      <td className="text-center py-5 px-4 text-neutral-600 dark:text-neutral-400 font-light">
                        {row.recall}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-6 text-center font-light">
              KNN achieved the highest accuracy, making it the most effective in
              predicting user interest in the Metaverse.
            </p>
          </motion.div>

          {/* Model Details */}
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
            className="bg-neutral-900 dark:bg-white rounded-2xl p-10 text-white dark:text-neutral-900">
            
            <div className="flex items-center gap-4 mb-8 justify-center">
              <BrainCircuitIcon className="w-8 h-8" />
              <h3 className="text-2xl font-bold tracking-tight">
                The AI Model
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm text-neutral-400 dark:text-neutral-500">
                  Technical Stack
                </h4>
                <ul className="space-y-3 text-sm font-light text-neutral-300 dark:text-neutral-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-current rounded-full" /> Built
                    using Scikit-learn
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-current rounded-full" /> Trained
                    on survey data
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-current rounded-full" /> Applied
                    KNN, SVM, and Decision Tree
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-current rounded-full" />{' '}
                    Evaluated using multiple metrics
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm text-neutral-400 dark:text-neutral-500">
                  Key Features
                </h4>
                <ul className="space-y-3 text-sm font-light text-neutral-300 dark:text-neutral-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-current rounded-full" />{' '}
                    Demographic profiling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-current rounded-full" />{' '}
                    Technology familiarity scores
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-current rounded-full" />{' '}
                    Behavioral pattern analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-current rounded-full" /> Adoption
                    likelihood prediction
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
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
            
            Key Highlights
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {[
            {
              icon: BookOpenIcon,
              number: '50+',
              label: 'Research Papers'
            },
            {
              icon: UsersIcon,
              number: '100+',
              label: 'Survey Participants'
            },
            {
              icon: BrainCircuitIcon,
              number: '3',
              label: 'AI Models'
            },
            {
              icon: AwardIcon,
              number: '85%',
              label: 'Prediction Accuracy'
            },
            {
              icon: SparklesIcon,
              number: '3',
              label: 'Adoption Drivers'
            }].
            map((stat, index) =>
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
                delay: index * 0.1
              }}
              className="bg-white dark:bg-neutral-950 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 text-center">
              
                <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-neutral-900 dark:text-white" />
                </div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
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
              "This project wasn't just about building a model — it was about
              understanding how technology, data, and human behavior intersect
              to shape the future of learning."
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