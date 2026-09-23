import React, { useState, useRef, Fragment, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XIcon,
  SparklesIcon,
  LightbulbIcon,
  RocketIcon,
  SearchIcon,
  TargetIcon,
  WrenchIcon,
  TestTubeIcon,
  EyeIcon,
  HeartIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  UsersIcon,
  VideoIcon,
  TrendingUpIcon,
  MessageCircleIcon,
  DatabaseIcon,
  ChromeIcon,
  CheckCircleIcon,
  ClockIcon,
  FileTextIcon,
  BrainCircuitIcon,
  BarChart3Icon,
  BookOpenIcon,
  AwardIcon,
  GraduationCapIcon,
  PlayCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  ScanFaceIcon,
  ActivityIcon,
  ZapIcon,
  ShieldCheckIcon,
  MicIcon } from
'lucide-react';
interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  metrics?: string[];
  tools?: string[];
  highlights?: string[];
  hasDetailPage?: boolean;
}
export function Projects() {
  const [activeTab, setActiveTab] = useState<'ai' | 'product' | 'case'>(
    'product'
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const aiProjects: Project[] = [
  {
    title: 'Exploring the Potential of the Metaverse in Education',
    subtitle: 'AI-Powered Research & Predictive Modeling',
    description:
    'Research-driven exploration combining literature review, user surveys, and ML models to predict Metaverse adoption in education.',
    image:
    'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop',
    metrics: [
    '85% prediction accuracy',
    '100+ survey participants',
    '50+ papers reviewed'],

    highlights: [
    'Built KNN, SVM, and Decision Tree models',
    'Identified key adoption drivers through data analysis',
    'Delivered strategic insights for EdTech product positioning'],

    tools: ['Python', 'Scikit-learn', 'Pandas', 'SQL', 'Data Visualization'],
    hasDetailPage: true
  },
  {
    title: 'COVID-19 Detection using X-ray & CT Scans',
    subtitle: 'Deep Learning for Medical Diagnostics',
    description:
    'Developed and optimized deep learning models (ResNet50, VGG19, Xception) for medical image classification.',
    image:
    'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop',
    highlights: [
    'Applied segmentation and feature extraction techniques',
    'Built an AI web interface for diagnostics',
    'Achieved high accuracy in COVID-19 detection'],

    tools: ['Python', 'TensorFlow', 'ResNet50', 'VGG19', 'Xception']
  },
  {
    title: 'Hate Speech Detection for Facebook',
    subtitle: 'ML-Powered Content Moderation',
    description:
    'Designed dataset and trained ML model with reinforcement learning for automated content flagging.',
    image:
    'https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?w=600&h=400&fit=crop',
    metrics: ['75% accuracy', 'Automated harmful content detection'],
    highlights: [
    'Proposed blockchain-based transparency improvements',
    'Implemented reinforcement learning techniques'],

    tools: ['Python', 'ML', 'Reinforcement Learning', 'NLP']
  },
  {
    title: 'Personal Finance Analytics Dashboard',
    subtitle: 'Power BI Data Visualization',
    description:
    'Developed interactive Power BI dashboard for comprehensive financial tracking and analysis.',
    image:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    highlights: [
    'Applied DAX for income, savings, and net worth analysis',
    'Created time-series visuals and drill-down analytics',
    'Enabled data-driven financial decisions'],

    tools: ['Power BI', 'DAX', 'Excel', 'Data Visualization']
  },
  {
    title: 'PulsePoint: Hybrid Workforce Intelligence',
    subtitle: 'HR Analytics Platform',
    description:
    'Built HR analytics dashboard to track and optimize workforce patterns.',
    image:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    metrics: ['+15% Friday WFH rate identified'],
    highlights: [
    'Automated reporting and visualized workforce trends',
    'Enabled data-driven policy decisions',
    'Improved workforce planning efficiency'],

    tools: ['Power BI', 'SQL', 'HR Analytics']
  }];

  const productProjects: Project[] = [
  {
    title: 'Campus Compass',
    subtitle: 'Graduate Student Engagement MVP',
    description:
    'What if students never had to search for campus opportunities again? Campus Compass turns fragmented campus communication into a simple discovery experience..',
    image:
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop',
    metrics: [
    '3.2K profile views',
    '100+ followers',
    '500+ reel views',
    '4 feature requests'],

    highlights: [
    'Applied design thinking methodology',
    'Rapid MVP development and testing',
    'Strong organic engagement growth'],

    tools: [
    'Human Centered Design Thinking',
    'Instagram',
    'Content Strategy'],

    hasDetailPage: true
  },
  {
    title: 'Sugam AI',
    subtitle: 'Healthcare Licensing & Credentialing Platform',
    description:
    'What if hospitals never had to manually fill credentialing forms again? Sugam uses AI to automate provider licensing workflows.',
    image:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    metrics: [
    '70% reduction in licensing cycle time',
    '>90% autofill accuracy'],

    highlights: [
    'Integrated OCR (AWS Textract) + LangChain for form autofill',
    'Built web app + Chrome extension',
    'Human-in-loop validation system',
    'Presented at Sevaro AI Challenge'],

    tools: [
    'AWS Textract',
    'LangChain',
    'React',
    'Python',
    'Chrome Extension'],

    hasDetailPage: true
  },
  {
    title: 'EmotiHire',
    subtitle: 'Emotional Analytics for Virtual Interviews',
    description:
    'Can we capture emotional signals in a structured way during virtual interviews? EmotiHire explores AI-driven enthusiasm and stress detection to support better hiring decisions.',
    image:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
    metrics: [
    'Real-time detection',
    '2 key signals tracked',
    'Human-in-loop design'],

    highlights: [
    'Facial landmark detection for enthusiasm & stress',
    'Lightweight dashboard for recruiter context',
    "Augments judgment — doesn't replace it"],

    tools: ['Facial Landmark Detection', 'React', 'AI/ML', 'Product Design'],
    hasDetailPage: true
  },
  {
    title: 'VoiceSquare',
    subtitle: 'Voice-Powered POS Intelligence for Square Merchants',
    description:
    'Built a voice-controlled interface for Square POS using Claude AI to understand natural speech, saving merchants 15-20 minutes daily.',
    image:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
    metrics: [
    '95%+ speech accuracy',
    '<2s response time',
    '4.7/5 user satisfaction',
    '15-20 min saved daily'],

    highlights: [
    'Integrated Claude AI (Anthropic API) for natural language understanding — parses intent, extracts parameters, returns structured JSON',
    'Solved real pain point: coffee shop owner interrupted 30+ times per shift to check POS manually',
    "Added visual confirmation because users don't fully trust voice-only systems",
    'Built robust error handling for unpredictable AI failures',
    "At scale across Square's 4M merchants: 1M hours saved daily"],

    tools: [
    'Claude AI (Anthropic)',
    'Square API',
    'React',
    'Voice Recognition',
    'NLP'],

    hasDetailPage: true
  }];

  const caseStudies: Project[] = [
  {
    title: 'Whatnot Electronics',
    subtitle: 'Owning a Category at +444% YoY Growth',
    description:
    'A category-management case study for Whatnot: how I would turn the fastest-growing transactional category into a community-anchored destination through targeted seller acquisition, trust infrastructure, and growth experiments.',
    image:
    'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&h=400&fit=crop',
    metrics: [
    '+444% GMV YoY',
    '5% commission lever',
    '90-day roadmap',
    '3 growth experiments'],

    highlights: [
    'Defined problem statement with platform-level evidence',
    'Mapped 3 user segments + dual empathy maps',
    'Built seller acquisition playbook targeting refurb resellers',
    'Designed weekly category health dashboard with SQL logic'],

    tools: [
    'Category Strategy',
    'User Research',
    'Growth Experiments',
    'SQL / Analytics'],

    hasDetailPage: true
  }];

  const projects =
  activeTab === 'ai' ?
  aiProjects :
  activeTab === 'product' ?
  productProjects :
  caseStudies;
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };
  const hasRichDetail = (title: string) =>
  [
  'Campus Compass',
  'Sugam AI',
  'EmotiHire',
  'VoiceSquare',
  'Whatnot Electronics',
  'Exploring the Potential of the Metaverse in Education'].
  includes(title);
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-neutral-950">
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
          className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            My Work
          </h2>
          <p className="text-neutral-500 dark:text-neutral-500 text-lg max-w-4xl mx-auto font-light whitespace-nowrap">
            Explore my journey through AI, product development, and strategic
            initiatives
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
          {
            id: 'product',
            label: 'Product',
            icon: RocketIcon
          },
          {
            id: 'ai',
            label: 'AI / Analytics',
            icon: SparklesIcon
          },
          {
            id: 'case',
            label: 'Case Studies',
            icon: LightbulbIcon
          }].
          map((tab) =>
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-5 py-2.5 rounded-full transition-all flex items-center gap-2 text-sm ${activeTab === tab.id ? 'bg-neutral-950 dark:bg-flame text-white dark:text-abyssal font-semibold' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700'}`}>
            
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          )}
        </div>

        <motion.div
          key={activeTab}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.4
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {projects.map((project, index) =>
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
            }}
            onClick={() => handleProjectClick(project)}
            className="group cursor-pointer h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden transition-all hover:border-neutral-300 dark:hover:border-neutral-700 flex flex-col">
            
              <div className="aspect-[3/2] overflow-hidden w-full">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 font-medium mt-1">
                  {project.subtitle}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed font-light line-clamp-2 flex-grow">
                  {project.description}
                </p>
                {project.tools &&
              <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool, i) =>
                <span
                  key={i}
                  className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded-full">
                  
                        {tool}
                      </span>
                )}
                    {project.tools.length > 3 &&
                <span className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded-full">
                        +{project.tools.length - 3}
                      </span>
                }
                  </div>
              }
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Overlay Modal */}
        <AnimatePresence>
          {selectedProject &&
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
            onClick={() => setSelectedProject(null)}>
            
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
              className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden w-[80vw] max-h-[80vh] overflow-y-auto border border-neutral-200 dark:border-neutral-800 relative">
              
                {/* Close button */}
                <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-4 float-right mr-4 mt-4 z-10 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                
                  <XIcon className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-10 pt-2">
                  {hasRichDetail(selectedProject.title) ?
                <RichDetailContent project={selectedProject} /> :

                <BasicDetailContent project={selectedProject} />
                }
                </div>
              </motion.div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </section>);

}
/* ─── Basic overlay for projects without rich detail ─── */
function BasicDetailContent({ project }: {project: Project;}) {
  return (
    <>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1 tracking-tight">
          {project.title}
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400 font-medium text-sm">
          {project.subtitle}
        </p>
      </div>

      <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed font-light">
        {project.description}
      </p>

      {project.metrics &&
      <div className="mb-8">
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 uppercase tracking-wider">
            Key Metrics
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((metric, i) =>
          <span
            key={i}
            className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-3 py-1.5 rounded-lg text-sm font-medium">
            
                {metric}
              </span>
          )}
          </div>
        </div>
      }

      {project.highlights &&
      <div className="mb-8">
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 uppercase tracking-wider">
            Highlights
          </h4>
          <ul className="space-y-3">
            {project.highlights.map((highlight, i) =>
          <li
            key={i}
            className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400 text-sm font-light">
            
                <div className="w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="leading-relaxed">{highlight}</span>
              </li>
          )}
          </ul>
        </div>
      }

      {project.tools &&
      <div>
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 uppercase tracking-wider">
            Tools & Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) =>
          <span
            key={i}
            className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-3 py-1.5 rounded-full text-sm font-medium">
            
                {tool}
              </span>
          )}
          </div>
        </div>
      }
    </>);

}
/* ─── Rich detail overlay for featured projects ─── */
function RichDetailContent({ project }: {project: Project;}) {
  if (project.title === 'Campus Compass') return <CampusCompassOverlay />;
  if (project.title === 'Sugam AI') return <SugamAIOverlay />;
  if (project.title === 'EmotiHire') return <EmotiHireOverlay />;
  if (project.title === 'VoiceSquare') return <VoiceSquareOverlay />;
  if (project.title === 'Whatnot Electronics')
  return <WhatnotElectronicsOverlay />;
  if (project.title === 'Exploring the Potential of the Metaverse in Education')
  return <MetaverseOverlay />;
  return null;
}
/* ═══════════════════════════════════════════════════════
   CAMPUS COMPASS — Rich Overlay
   ═══════════════════════════════════════════════════════ */
function CampusCompassOverlay() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const presentationSlides = [
  {
    src: "/1.jpg",
    label: 'Campus Compass — Title'
  },
  {
    src: "/2.jpg",
    label: 'The Problem: Fragmented Discovery'
  },
  {
    src: "/3.jpg",
    label: 'Two Graduate Student Personas'
  },
  {
    src: "/4.jpg",
    label: 'User Journey: Before vs. After'
  },
  {
    src: "/5.jpg",
    label: 'Design Thinking Process'
  },
  {
    src: "/6.jpg",
    label: 'MVP Product Architecture'
  },
  {
    src: "/7.jpg",
    label: 'Product Roadmap'
  },
  {
    src: "/8.jpg",
    label: 'Validation & Engagement Metrics'
  },
  {
    src: "/9.jpg",
    label: 'Growth Flywheel'
  },
  {
    src: "/10.jpg",
    label: 'Key Learnings & Future Vision'
  }];

  const scrollToSlide = (index: number) => {
    const clamped = Math.max(0, Math.min(index, presentationSlides.length - 1));
    setCurrentSlide(clamped);
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * clamped,
        behavior: 'smooth'
      });
    }
  };
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
    <div className="space-y-10 relative">
      {/* Presentation Carousel */}
      <div className="relative -mx-8 md:-mx-10 -mt-2 rounded-xl overflow-hidden">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const slideIndex = Math.round(el.scrollLeft / el.offsetWidth);
            setCurrentSlide(slideIndex);
          }}>
          
          {presentationSlides.map((slide, i) =>
          <div key={i} className="flex-shrink-0 w-full snap-center">
              <img
              src={slide.src}
              alt={slide.label}
              className="w-full h-auto" />
            
            </div>
          )}
        </div>

        {/* Navigation arrows */}
        {currentSlide > 0 &&
        <button
          onClick={() => scrollToSlide(currentSlide - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
          
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        }
        {currentSlide < presentationSlides.length - 1 &&
        <button
          onClick={() => scrollToSlide(currentSlide + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
          
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        }

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {presentationSlides.map((_, i) =>
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`rounded-full transition-all ${i === currentSlide ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/70'}`} />

          )}
        </div>

        {/* Slide label */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
            {currentSlide + 1} / {presentationSlides.length} —{' '}
            {presentationSlides[currentSlide]?.label}
          </span>
        </div>
      </div>

      {/* Header */}
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {['Human Centered Design', 'MVP', 'Product Strategy'].map((tag) =>
          <span
            key={tag}
            className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-semibold uppercase tracking-wider">
            
              {tag}
            </span>
          )}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
          Campus Compass
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
          Bridging campus engagement gaps through design thinking and digital
          accessibility.
        </p>
      </div>

      {/* Problem / Solution / Approach */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
          <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
            Problem
          </h4>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
            Graduate students miss events due to scattered communication across
            multiple channels.
          </p>
        </div>
        <div className="bg-neutral-900 dark:bg-white rounded-xl p-6">
          <h4 className="text-base font-bold text-white dark:text-neutral-900 mb-3">
            Solution
          </h4>
          <p className="text-sm leading-relaxed font-light text-neutral-300 dark:text-neutral-600">
            Instagram-based MVP centralizing events through visual storytelling
            and familiar platform.
          </p>
        </div>
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
          <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
            Approach
          </h4>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
            Design thinking methodology with rapid iteration and user
            validation.
          </p>
        </div>
      </div>

      {/* Design Thinking Journey */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-6 text-center tracking-tight">
          Design Thinking Journey
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {journeyStages.map((stage, index) =>
          <div
            key={index}
            className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700">
            
              <div className="w-10 h-10 rounded-full border-2 border-neutral-900 dark:border-white flex items-center justify-center mb-3 mx-auto">
                <stage.icon className="w-4 h-4 text-neutral-900 dark:text-white" />
              </div>
              <h5 className="text-sm font-bold text-neutral-900 dark:text-white text-center mb-1">
                {stage.title}
              </h5>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center font-medium mb-2">
                {stage.subtitle}
              </p>
              <div className="space-y-1">
                {stage.insights.map((insight, i) =>
              <div key={i} className="flex items-start gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 font-light">
                      {insight}
                    </span>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Empathy Map */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 text-center tracking-tight">
          Empathy Map
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center gap-2 mb-3">
              <EyeIcon className="w-4 h-4 text-neutral-900 dark:text-white" />
              <h5 className="text-sm font-bold text-neutral-900 dark:text-white">
                Says & Thinks
              </h5>
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-light">
              <li>"I always miss important events"</li>
              <li>"There's too much information scattered everywhere"</li>
              <li>"I wish there was one place for everything"</li>
            </ul>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center gap-2 mb-3">
              <HeartIcon className="w-4 h-4 text-neutral-900 dark:text-white" />
              <h5 className="text-sm font-bold text-neutral-900 dark:text-white">
                Feels
              </h5>
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-light">
              <li>Overwhelmed by multiple channels</li>
              <li>FOMO about missing networking opportunities</li>
              <li>Frustrated with email overload</li>
            </ul>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center gap-2 mb-3">
              <ThumbsDownIcon className="w-4 h-4 text-neutral-900 dark:text-white" />
              <h5 className="text-sm font-bold text-neutral-900 dark:text-white">
                Pains
              </h5>
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-light">
              <li>Missed career opportunities</li>
              <li>Information overload from 5+ platforms</li>
              <li>Last-minute event discoveries</li>
            </ul>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center gap-2 mb-3">
              <ThumbsUpIcon className="w-4 h-4 text-neutral-900 dark:text-white" />
              <h5 className="text-sm font-bold text-neutral-900 dark:text-white">
                Gains
              </h5>
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-light">
              <li>Centralized event information</li>
              <li>Visual, engaging content</li>
              <li>Platform they already use daily</li>
            </ul>
          </div>
        </div>
      </div>

      {/* User Personas */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 text-center tracking-tight">
          User Personas
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900 dark:bg-white rounded-xl p-6 text-white dark:text-neutral-900">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                <UsersIcon className="w-6 h-6 text-neutral-900 dark:text-white" />
              </div>
              <h5 className="text-base font-bold">The Networker</h5>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                Sarah, 24 | MBA Student
              </p>
            </div>
            <div className="space-y-2 text-sm font-light">
              <p>
                <strong className="font-semibold">Goal:</strong> Attend
                career-building events
              </p>
              <p>
                <strong className="font-semibold">Challenge:</strong> Misses
                events due to email overload
              </p>
              <p>
                <strong className="font-semibold">Needs:</strong> Quick, visual
                event updates
              </p>
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-700 rounded-full mx-auto mb-3 flex items-center justify-center">
                <UsersIcon className="w-6 h-6 text-neutral-900 dark:text-white" />
              </div>
              <h5 className="text-base font-bold text-neutral-900 dark:text-white">
                The Busy Achiever
              </h5>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Mike, 26 | MS Student
              </p>
            </div>
            <div className="space-y-2 text-sm font-light text-neutral-600 dark:text-neutral-400">
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
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 text-center tracking-tight">
          Impact & Results
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="text-center bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700">
            <div className="text-2xl font-bold text-neutral-900 dark:text-white">
              3.2K
            </div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mt-1">
              Profile Views
            </div>
          </div>
          <div className="text-center bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700">
            <div className="text-2xl font-bold text-neutral-900 dark:text-white">
              196
            </div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mt-1">
              Interactions
            </div>
          </div>
          <div className="text-center bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700">
            <div className="text-2xl font-bold text-neutral-900 dark:text-white">
              89
            </div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mt-1">
              New Followers
            </div>
          </div>
          <div className="text-center bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700">
            <div className="text-2xl font-bold text-neutral-900 dark:text-white">
              55
            </div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mt-1">
              Content Shared
            </div>
          </div>
        </div>
        <div className="bg-neutral-900 dark:bg-white rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-white dark:text-neutral-900 mb-2">
            88.2%
          </div>
          <p className="text-neutral-300 dark:text-neutral-600 font-light">
            of surveyed students said they would follow Campus Compass
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
        map((feature, i) =>
        <div
          key={i}
          className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 text-center border border-neutral-200 dark:border-neutral-700">
          
            <feature.icon className="w-6 h-6 text-neutral-900 dark:text-white mx-auto mb-2" />
            <p className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">
              {feature.label}
            </p>
          </div>
        )}
      </div>

      {/* Quote */}
      <blockquote className="text-lg md:text-xl text-neutral-900 dark:text-white font-light leading-relaxed text-center italic">
        "Great products don't always need complex tech — sometimes, empathy and
        accessibility make the biggest impact."
      </blockquote>

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
          delay: 0.5,
          type: 'spring'
        }}
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        onClick={() => setIsVideoModalOpen(true)}
        className="sticky bottom-6 float-right bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 group z-10">
        
        <PlayCircleIcon className="w-5 h-5" />
        <span className="font-semibold hidden group-hover:inline-block pr-1 transition-all text-sm">
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
          className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
          
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
    </div>);

}
/* ═══════════════════════════════════════════════════════
   SUGAM AI — Rich Overlay
   ═══════════════════════════════════════════════════════ */
function SugamAIOverlay() {
  const [isSugamVideoOpen, setIsSugamVideoOpen] = useState(false);
  const [sugamSlide, setSugamSlide] = useState(0);
  const sugamCarouselRef = useRef<HTMLDivElement>(null);
  const sugamSlides = [
  {
    src: "/1-1.jpg",
    label: 'Sugam AI — Title'
  },
  {
    src: "/2-1.jpg",
    label: 'The Credentialing Bottleneck'
  },
  {
    src: "/3-1.jpg",
    label: 'Why This Matters'
  },
  {
    src: "/4-1.jpg",
    label: 'The Key Insight'
  },
  {
    src: "/5-1.jpg",
    label: 'Product Vision'
  },
  {
    src: "/6-1.jpg",
    label: 'Solution Architecture'
  },
  {
    src: "/7-1.jpg",
    label: 'Product Components'
  },
  {
    src: "/8-1.jpg",
    label: 'System Workflow'
  },
  {
    src: "/9-1.jpg",
    label: 'Potential Impact'
  },
  {
    src: "/10-1.jpg",
    label: 'Future Vision'
  }];

  const scrollSugamSlide = (index: number) => {
    const clamped = Math.max(0, Math.min(index, sugamSlides.length - 1));
    setSugamSlide(clamped);
    if (sugamCarouselRef.current) {
      const slideWidth = sugamCarouselRef.current.offsetWidth;
      sugamCarouselRef.current.scrollTo({
        left: slideWidth * clamped,
        behavior: 'smooth'
      });
    }
  };
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
    <div className="space-y-10 relative">
      {/* Presentation Carousel */}
      <div className="relative -mx-8 md:-mx-10 -mt-2 rounded-xl overflow-hidden">
        <div
          ref={sugamCarouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const slideIndex = Math.round(el.scrollLeft / el.offsetWidth);
            setSugamSlide(slideIndex);
          }}>
          
          {sugamSlides.map((slide, i) =>
          <div key={i} className="flex-shrink-0 w-full snap-center">
              <img
              src={slide.src}
              alt={slide.label}
              className="w-full h-auto" />
            
            </div>
          )}
        </div>
        {sugamSlide > 0 &&
        <button
          onClick={() => scrollSugamSlide(sugamSlide - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
          
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        }
        {sugamSlide < sugamSlides.length - 1 &&
        <button
          onClick={() => scrollSugamSlide(sugamSlide + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
          
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        }
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {sugamSlides.map((_, i) =>
          <button
            key={i}
            onClick={() => scrollSugamSlide(i)}
            className={`rounded-full transition-all ${i === sugamSlide ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/70'}`} />

          )}
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
            {sugamSlide + 1} / {sugamSlides.length} —{' '}
            {sugamSlides[sugamSlide]?.label}
          </span>
        </div>
      </div>

      {/* Try the Dashboard */}
      <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700 text-center">
        <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 uppercase tracking-wider">
          Try the Dashboard
        </p>
        <a
          href="https://bit.ly/SugamAI_Dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
          
          <ExternalLinkIcon className="w-4 h-4" />
          Open Sugam AI Dashboard
        </a>
      </div>

      {/* Header */}
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {['AI/ML', 'Healthcare Automation', 'Chrome Extension'].map((tag) =>
          <span
            key={tag}
            className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-semibold uppercase tracking-wider">
            
              {tag}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 mb-2">
          <SparklesIcon className="w-7 h-7 text-neutral-900 dark:text-white" />
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Sugam AI
          </h3>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
          Transforming 4-6 week credentialing workflows into 5-7 days through
          intelligent automation.
        </p>
      </div>

      {/* Problem / Solution / Approach */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
          <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
            Problem
          </h4>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
            Healthcare credentialing requires manual data entry across dozens of
            forms, causing 4-6 week delays and compliance risks.
          </p>
        </div>
        <div className="bg-neutral-900 dark:bg-white rounded-xl p-6">
          <h4 className="text-base font-bold text-white dark:text-neutral-900 mb-3">
            Solution
          </h4>
          <p className="text-sm leading-relaxed font-light text-neutral-300 dark:text-neutral-600">
            AI-driven dual system (web app + Chrome extension) that automates
            data extraction and form-filling with &gt;90% accuracy.
          </p>
        </div>
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
          <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
            Approach
          </h4>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
            Design thinking with AI/ML integration: OCR parsing, validation, and
            human-in-loop review system.
          </p>
        </div>
      </div>

      {/* Design Thinking Journey */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-6 text-center tracking-tight">
          Design Thinking Journey
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {journeyStages.map((stage, index) =>
          <div
            key={index}
            className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700">
            
              <div className="w-10 h-10 rounded-full border-2 border-neutral-900 dark:border-white flex items-center justify-center mb-3 mx-auto">
                <stage.icon className="w-4 h-4 text-neutral-900 dark:text-white" />
              </div>
              <h5 className="text-sm font-bold text-neutral-900 dark:text-white text-center mb-1">
                {stage.title}
              </h5>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center font-medium mb-2">
                {stage.subtitle}
              </p>
              <div className="space-y-1">
                {stage.insights.map((insight, i) =>
              <div key={i} className="flex items-start gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 font-light">
                      {insight}
                    </span>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* System Architecture */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 text-center tracking-tight">
          System Architecture
        </h4>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center gap-3 mb-4">
              <DatabaseIcon className="w-6 h-6 text-neutral-900 dark:text-white" />
              <h5 className="text-base font-bold text-neutral-900 dark:text-white">
                Web Application
              </h5>
            </div>
            <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 font-light">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-4 h-4 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                Upload CVs & supporting documents
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-4 h-4 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                OCR + AI extraction (AWS Textract & LangChain)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-4 h-4 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                PostgreSQL data storage with validation
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-4 h-4 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                HR dashboard for review & approval
              </li>
            </ul>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center gap-3 mb-4">
              <ChromeIcon className="w-6 h-6 text-neutral-900 dark:text-white" />
              <h5 className="text-base font-bold text-neutral-900 dark:text-white">
                Chrome Extension
              </h5>
            </div>
            <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 font-light">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-4 h-4 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                Integrated autofill for live portals
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-4 h-4 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                Secure API call to fetch provider data
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-4 h-4 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                Auto-fills online forms and PDFs
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-4 h-4 text-neutral-900 dark:text-white mt-0.5 flex-shrink-0" />
                HIPAA-compliant with audit logging
              </li>
            </ul>
          </div>
        </div>

        {/* Data Flow */}
        <div className="bg-neutral-900 dark:bg-white rounded-xl p-5">
          <h5 className="text-sm font-semibold text-white dark:text-neutral-900 mb-4 text-center uppercase tracking-wider">
            Data Flow Pipeline
          </h5>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            {[
            'Resume Upload',
            'OCR/LangChain',
            'Database',
            'Validation',
            'Extension Autofill',
            'Review & Submit'].
            map((step, i, arr) =>
            <Fragment key={step}>
                <span className="bg-white dark:bg-neutral-900 px-3 py-1.5 rounded-lg font-medium text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800">
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
        </div>
      </div>

      {/* Impact Metrics */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 text-center tracking-tight">
          Impact & Results
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          <div
            key={i}
            className="text-center bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700">
            
              <metric.icon className="w-6 h-6 text-neutral-900 dark:text-white mx-auto mb-2" />
              <div className="text-xl font-bold text-neutral-900 dark:text-white">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-neutral-500 font-light">
                {metric.sub}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 uppercase tracking-wider text-center">
          Technology Stack
        </h4>
        <div className="flex flex-wrap justify-center gap-2">
          {[
          'LangChain',
          'AWS Textract',
          'Next.js',
          'Node.js',
          'PostgreSQL',
          'Flask',
          'Chrome Extension API'].
          map((tech) =>
          <span
            key={tech}
            className="bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-full text-sm font-medium text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700">
            
              {tech}
            </span>
          )}
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-lg md:text-xl text-neutral-900 dark:text-white font-light leading-relaxed text-center italic">
        "Sugam AI bridges healthcare administration and intelligent automation —
        transforming credentialing from a manual bottleneck into a seamless,
        AI-assisted workflow."
      </blockquote>

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
          delay: 0.5,
          type: 'spring'
        }}
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        onClick={() => setIsSugamVideoOpen(true)}
        className="sticky bottom-6 float-right bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 group z-10">
        
        <PlayCircleIcon className="w-5 h-5" />
        <span className="font-semibold hidden group-hover:inline-block pr-1 transition-all text-sm">
          Watch Explainer
        </span>
      </motion.button>

      {/* Video Modal */}
      <AnimatePresence>
        {isSugamVideoOpen &&
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
          onClick={() => setIsSugamVideoOpen(false)}
          className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
          
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
              onClick={() => setIsSugamVideoOpen(false)}
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
    </div>);

}
/* ═══════════════════════════════════════════════════════
   EMOTIHIRE — Rich Overlay
   ═══════════════════════════════════════════════════════ */
function EmotiHireOverlay() {
  const [emotiSlide, setEmotiSlide] = useState(0);
  const emotiCarouselRef = useRef<HTMLDivElement>(null);
  const emotiSlides = [
  {
    src: "/1-2.jpg",
    label: 'EmotiHire — Title'
  },
  {
    src: "/2-2.jpg",
    label: 'The Remote Hiring Challenge'
  },
  {
    src: "/3-2.jpg",
    label: 'Why This Matters'
  },
  {
    src: "/4-2.jpg",
    label: 'Strategic Focus: Two Signals'
  },
  {
    src: "/5-2.jpg",
    label: 'Product Vision'
  },
  {
    src: "/6-2.jpg",
    label: 'Technical Foundation'
  },
  {
    src: "/7-2.jpg",
    label: 'System Architecture'
  },
  {
    src: "/8-2.jpg",
    label: 'Live Dashboard Experience'
  },
  {
    src: "/9-2.jpg",
    label: 'Ethical Design Considerations'
  },
  {
    src: "/10-2.jpg",
    label: 'Future Opportunities'
  }];

  const scrollEmotiSlide = (index: number) => {
    const clamped = Math.max(0, Math.min(index, emotiSlides.length - 1));
    setEmotiSlide(clamped);
    if (emotiCarouselRef.current) {
      const slideWidth = emotiCarouselRef.current.offsetWidth;
      emotiCarouselRef.current.scrollTo({
        left: slideWidth * clamped,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="space-y-10 relative">
      {/* Presentation Carousel */}
      <div className="relative -mx-8 md:-mx-10 -mt-2 rounded-xl overflow-hidden">
        <div
          ref={emotiCarouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const slideIndex = Math.round(el.scrollLeft / el.offsetWidth);
            setEmotiSlide(slideIndex);
          }}>
          
          {emotiSlides.map((slide, i) =>
          <div key={i} className="flex-shrink-0 w-full snap-center">
              <img
              src={slide.src}
              alt={slide.label}
              className="w-full h-auto" />
            
            </div>
          )}
        </div>
        {emotiSlide > 0 &&
        <button
          onClick={() => scrollEmotiSlide(emotiSlide - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
          
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        }
        {emotiSlide < emotiSlides.length - 1 &&
        <button
          onClick={() => scrollEmotiSlide(emotiSlide + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
          
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        }
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {emotiSlides.map((_, i) =>
          <button
            key={i}
            onClick={() => scrollEmotiSlide(i)}
            className={`rounded-full transition-all ${i === emotiSlide ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/70'}`} />

          )}
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
            {emotiSlide + 1} / {emotiSlides.length} —{' '}
            {emotiSlides[emotiSlide]?.label}
          </span>
        </div>
      </div>

      {/* Try the Dashboard */}
      <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700 text-center">
        <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 uppercase tracking-wider">
          Try the Dashboard
        </p>
        <a
          href="https://www.magicpatterns.com/c/6k91v2v7nxyi6p2ztuhmcw/preview"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
          
          <ExternalLinkIcon className="w-4 h-4" />
          Open EmotiHire Dashboard
        </a>
      </div>

      {/* Header */}
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
          'AI/ML',
          'Emotional Analytics',
          'Remote Hiring',
          'Product Design'].
          map((tag) =>
          <span
            key={tag}
            className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-semibold uppercase tracking-wider">
            
              {tag}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 mb-2">
          <ScanFaceIcon className="w-7 h-7 text-neutral-900 dark:text-white" />
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
            EmotiHire
          </h3>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
          Exploring how AI-driven emotional signal detection can give recruiters
          additional context during virtual interviews.
        </p>
      </div>

      {/* The Observation — Pull Quote */}
      <div className="bg-neutral-900 dark:bg-white rounded-2xl p-8 md:p-10">
        <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4 font-semibold">
          The Observation
        </p>
        <blockquote className="text-xl md:text-2xl text-white dark:text-neutral-900 font-light leading-relaxed">
          "During mock interviews and recordings, I noticed that small cues — a
          brief smile, hesitation, or tension — were easy to miss through a
          webcam."
        </blockquote>
        <p className="text-neutral-400 dark:text-neutral-500 text-sm mt-6 font-light leading-relaxed">
          Virtual interviews make it harder for recruiters to read non-verbal
          signals like engagement or nervousness. The subtle cues that inform
          in-person judgments get lost through a screen.
        </p>
      </div>

      {/* The Question */}
      <div className="text-center py-4">
        <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3 font-semibold">
          The Question
        </p>
        <h4 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
          Can we capture emotional signals
          <br />
          in a structured way during virtual interviews?
        </h4>
      </div>

      {/* Two Signals — Not Many */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 text-center tracking-tight">
          Strategic Focus
        </h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mb-6 font-light">
          Instead of building a complex emotion-recognition system, EmotiHire
          focuses on two signals that matter most in interviews.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-neutral-900 dark:bg-white" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
                <ZapIcon className="w-5 h-5 text-white dark:text-neutral-900" />
              </div>
              <h5 className="text-lg font-bold text-neutral-900 dark:text-white">
                Enthusiasm
              </h5>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              Signals engagement, motivation, and genuine interest in the
              opportunity. Detected through facial expressions like smiling,
              raised eyebrows, and animated responses.
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-neutral-900 dark:bg-white" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
                <ActivityIcon className="w-5 h-5 text-white dark:text-neutral-900" />
              </div>
              <h5 className="text-lg font-bold text-neutral-900 dark:text-white">
                Stress
              </h5>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              Indicates cognitive load, anxiety levels, and pressure response
              during questioning. Tracked through micro-expressions, tension
              patterns, and hesitation cues.
            </p>
          </div>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mt-4 font-light italic">
          Rather than classifying dozens of emotional states, EmotiHire focuses
          on the two indicators most relevant to hiring decisions.
        </p>
      </div>

      {/* The Approach */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 text-center tracking-tight">
          The Approach
        </h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
            <ScanFaceIcon className="w-6 h-6 text-neutral-900 dark:text-white mb-3" />
            <h5 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
              Facial Landmark Detection
            </h5>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              Lightweight system that tracks facial landmarks in real time to
              identify enthusiasm and stress patterns during video interviews.
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
            <BarChart3Icon className="w-6 h-6 text-neutral-900 dark:text-white mb-3" />
            <h5 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
              Real-Time Visualization
            </h5>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              Signals are visualized through a simple dashboard, giving
              recruiters a timeline view of emotional patterns across the
              interview.
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
            <ShieldCheckIcon className="w-6 h-6 text-neutral-900 dark:text-white mb-3" />
            <h5 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
              Human-in-the-Loop
            </h5>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              The goal isn't to replace interviewer judgment, but to give
              recruiters additional context about how candidates experience the
              interview.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="bg-neutral-900 dark:bg-white rounded-2xl p-8">
        <div className="grid md:grid-cols-[auto_1fr] gap-6 items-center">
          <div className="w-16 h-16 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center mx-auto md:mx-0">
            <ScanFaceIcon className="w-8 h-8 text-neutral-900 dark:text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white dark:text-neutral-900 mb-2">
              Augment, Not Replace
            </h4>
            <p className="text-sm text-neutral-300 dark:text-neutral-600 font-light leading-relaxed">
              EmotiHire provides structured emotional context to support
              interviewer judgment — it doesn't automate hiring decisions. This
              project was an exploration of how AI, behavioral signals, and
              product design can come together to support better decision-making
              in remote hiring.
            </p>
          </div>
        </div>
      </div>

      {/* What This Project Explores */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 text-center tracking-tight">
          What This Project Explores
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
          {
            icon: ScanFaceIcon,
            label: 'AI + Behavioral Signals'
          },
          {
            icon: BarChart3Icon,
            label: 'Real-Time Analytics'
          },
          {
            icon: UsersIcon,
            label: 'Recruiter Experience'
          },
          {
            icon: ShieldCheckIcon,
            label: 'Ethical AI Design'
          }].
          map((item, i) =>
          <div
            key={i}
            className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 text-center border border-neutral-200 dark:border-neutral-700">
            
              <item.icon className="w-6 h-6 text-neutral-900 dark:text-white mx-auto mb-2" />
              <p className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-lg md:text-xl text-neutral-900 dark:text-white font-light leading-relaxed text-center italic">
        "The best hiring tools don't make decisions for you — they help you see
        what you might have missed."
      </blockquote>
    </div>);

}
/* ═══════════════════════════════════════════════════════
   VOICESQUARE — Rich Overlay
   ═══════════════════════════════════════════════════════ */
function VoiceSquareOverlay() {
  const [vsSlide, setVsSlide] = useState(0);
  const vsCarouselRef = useRef<HTMLDivElement>(null);
  const vsSlides = [
  {
    src: "/1-3.jpg",
    label: 'VoiceSquare — Title'
  },
  {
    src: "/2-3.jpg",
    label: 'The Operational Friction'
  },
  {
    src: "/3-3.jpg",
    label: 'Impact of POS Interruptions'
  },
  {
    src: "/4-3.jpg",
    label: 'User Research Insights'
  },
  {
    src: "/5-3.jpg",
    label: 'Defining the Opportunity'
  },
  {
    src: "/6-3.jpg",
    label: 'Introducing VoiceSquare'
  },
  {
    src: "/7-3.jpg",
    label: 'Product Experience Journey'
  },
  {
    src: "/8-3.jpg",
    label: 'System Architecture'
  },
  {
    src: "/9-3.jpg",
    label: 'MVP Feature Prioritization'
  },
  {
    src: "/10-3.jpg",
    label: 'Impact & Future Vision'
  }];

  const scrollVsSlide = (index: number) => {
    const clamped = Math.max(0, Math.min(index, vsSlides.length - 1));
    setVsSlide(clamped);
    if (vsCarouselRef.current) {
      const slideWidth = vsCarouselRef.current.offsetWidth;
      vsCarouselRef.current.scrollTo({
        left: slideWidth * clamped,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="space-y-10 relative">
      {/* Presentation Carousel */}
      <div className="relative -mx-8 md:-mx-10 -mt-2 rounded-xl overflow-hidden">
        <div
          ref={vsCarouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const slideIndex = Math.round(el.scrollLeft / el.offsetWidth);
            setVsSlide(slideIndex);
          }}>
          
          {vsSlides.map((slide, i) =>
          <div key={i} className="flex-shrink-0 w-full snap-center">
              <img
              src={slide.src}
              alt={slide.label}
              className="w-full h-auto" />
            
            </div>
          )}
        </div>
        {vsSlide > 0 &&
        <button
          onClick={() => scrollVsSlide(vsSlide - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
          
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        }
        {vsSlide < vsSlides.length - 1 &&
        <button
          onClick={() => scrollVsSlide(vsSlide + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
          
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        }
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {vsSlides.map((_, i) =>
          <button
            key={i}
            onClick={() => scrollVsSlide(i)}
            className={`rounded-full transition-all ${i === vsSlide ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/70'}`} />

          )}
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
            {vsSlide + 1} / {vsSlides.length} — {vsSlides[vsSlide]?.label}
          </span>
        </div>
      </div>

      {/* Try the Dashboard */}
      <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700 text-center">
        <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 uppercase tracking-wider">
          Try the Application
        </p>
        <a
          href="https://voice-square-1--aayushingavi.replit.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
          
          <ExternalLinkIcon className="w-4 h-4" />
          Try the Application
        </a>
      </div>

      {/* Header */}
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {['AI/NLP', 'Voice Interface', 'Square API', 'Product Design'].map(
            (tag) =>
            <span
              key={tag}
              className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-semibold uppercase tracking-wider">
              
                {tag}
              </span>

          )}
        </div>
        <div className="flex items-center gap-3 mb-2">
          <MicIcon className="w-7 h-7 text-neutral-900 dark:text-white" />
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
            VoiceSquare
          </h3>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
          A hands-free voice interface enabling small business owners to manage
          their POS systems naturally during peak hours — transforming how
          merchants interact with their business data.
        </p>
      </div>

      {/* The Pain Point — Pull Quote */}
      <div className="bg-neutral-900 dark:bg-white rounded-2xl p-8 md:p-10">
        <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4 font-semibold">
          The Pain Point
        </p>
        <blockquote className="text-xl md:text-2xl text-white dark:text-neutral-900 font-light leading-relaxed">
          "A coffee shop owner was interrupted 30+ times per shift just to check
          the POS manually — walking to the terminal, navigating menus, losing
          focus on customers."
        </blockquote>
        <p className="text-neutral-400 dark:text-neutral-500 text-sm mt-6 font-light leading-relaxed">
          Small business owners check their POS systems 30+ times per shift,
          often during peak hours when their hands are busy making products or
          serving customers. Each interruption breaks workflow and costs time.
        </p>
      </div>

      {/* Problem / Solution / Approach */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
          <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
            Problem
          </h4>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
            Merchants need instant access to business data but current POS
            systems require manual navigation that interrupts customer service
            and workflow.
          </p>
        </div>
        <div className="bg-neutral-900 dark:bg-white rounded-xl p-6">
          <h4 className="text-base font-bold text-white dark:text-neutral-900 mb-3">
            Solution
          </h4>
          <p className="text-sm leading-relaxed font-light text-neutral-300 dark:text-neutral-600">
            Voice-controlled interface powered by Claude AI that understands
            natural speech and returns structured POS data — no hands, no
            screens, no interruptions.
          </p>
        </div>
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
          <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
            Approach
          </h4>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
            User research with merchants, rapid prototyping with Claude AI +
            Square API, and iterative testing with visual confirmation layer.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 text-center tracking-tight">
          How It Works
        </h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mb-6 font-light">
          Natural language in, structured business data out.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          {[
          {
            step: '01',
            title: 'Speak',
            desc: 'Merchant asks a question in natural language — "What were my sales today?"'
          },
          {
            step: '02',
            title: 'Understand',
            desc: 'Claude AI parses intent, extracts parameters, and maps to Square API endpoints.'
          },
          {
            step: '03',
            title: 'Fetch',
            desc: 'System queries Square API for real-time data — orders, payments, inventory.'
          },
          {
            step: '04',
            title: 'Confirm',
            desc: 'Results displayed visually + spoken back. Users see and hear the answer.'
          }].
          map((item, i) =>
          <div
            key={i}
            className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700 relative overflow-hidden">
            
              <div className="absolute top-0 left-0 w-1 h-full bg-neutral-900 dark:bg-white" />
              <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                {item.step}
              </span>
              <h5 className="text-base font-bold text-neutral-900 dark:text-white mt-2 mb-2">
                {item.title}
              </h5>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Key Design Decision */}
      <div className="bg-neutral-900 dark:bg-white rounded-2xl p-8">
        <div className="grid md:grid-cols-[auto_1fr] gap-6 items-center">
          <div className="w-16 h-16 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center mx-auto md:mx-0">
            <EyeIcon className="w-8 h-8 text-neutral-900 dark:text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white dark:text-neutral-900 mb-2">
              Visual Confirmation: Trust Through Transparency
            </h4>
            <p className="text-sm text-neutral-300 dark:text-neutral-600 font-light leading-relaxed">
              Users don't fully trust voice-only systems. VoiceSquare adds a
              visual confirmation layer — every voice response is paired with
              on-screen data so merchants can verify at a glance. This design
              choice came directly from user testing.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 text-center tracking-tight">
          Impact & Results
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
          {
            icon: MicIcon,
            value: '95%+',
            label: 'Speech Accuracy',
            sub: 'intent recognition'
          },
          {
            icon: ClockIcon,
            value: '<2s',
            label: 'Response Time',
            sub: 'end-to-end'
          },
          {
            icon: TrendingUpIcon,
            value: '15-20 min',
            label: 'Time Saved',
            sub: 'per shift daily'
          },
          {
            icon: UsersIcon,
            value: '4.7/5',
            label: 'User Satisfaction',
            sub: 'merchant rating'
          }].
          map((metric, i) =>
          <div
            key={i}
            className="text-center bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700">
            
              <metric.icon className="w-6 h-6 text-neutral-900 dark:text-white mx-auto mb-2" />
              <div className="text-xl font-bold text-neutral-900 dark:text-white">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-neutral-500 font-light">
                {metric.sub}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scale Potential */}
      <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3 font-semibold">
          At Scale
        </p>
        <div className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
          1M+ hours saved daily
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light">
          Across Square's 4M+ merchants — if each saves 15 minutes per day
        </p>
      </div>

      {/* Tech Stack */}
      <div>
        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 uppercase tracking-wider text-center">
          Technology Stack
        </h4>
        <div className="flex flex-wrap justify-center gap-2">
          {[
          'Claude AI (Anthropic)',
          'Square API',
          'React',
          'Web Speech API',
          'NLP',
          'TypeScript'].
          map((tech) =>
          <span
            key={tech}
            className="bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-full text-sm font-medium text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700">
            
              {tech}
            </span>
          )}
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-lg md:text-xl text-neutral-900 dark:text-white font-light leading-relaxed text-center italic">
        "The best interfaces disappear — VoiceSquare lets merchants run their
        business without ever touching a screen."
      </blockquote>
    </div>);

}
/* ═══════════════════════════════════════════════════════
   METAVERSE EDUCATION — Rich Overlay
   ═══════════════════════════════════════════════════════ */
function MetaverseOverlay() {
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
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {['AI Research', 'Predictive Modeling', 'Data Analytics'].map(
            (tag) =>
            <span
              key={tag}
              className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-semibold uppercase tracking-wider">
              
                {tag}
              </span>

          )}
        </div>
        <div className="flex items-center gap-3 mb-2">
          <GraduationCapIcon className="w-7 h-7 text-neutral-900 dark:text-white" />
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Metaverse Education
          </h3>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
          Research-driven exploration of how AI and analytics reveal the
          potential of Metaverse-based education.
        </p>
      </div>

      {/* Core Question / Approach / Impact */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
          <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
            Core Question
          </h4>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
            Who is most likely to embrace immersive learning — and why?
          </p>
        </div>
        <div className="bg-neutral-900 dark:bg-white rounded-xl p-6">
          <h4 className="text-base font-bold text-white dark:text-neutral-900 mb-3">
            Approach
          </h4>
          <p className="text-sm leading-relaxed font-light text-neutral-300 dark:text-neutral-600">
            Combined literature review, user surveys, and machine learning to
            predict adoption patterns.
          </p>
        </div>
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
          <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-3">
            Impact
          </h4>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light">
            85% prediction accuracy with actionable insights for EdTech product
            strategy.
          </p>
        </div>
      </div>

      {/* Research Process */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-6 text-center tracking-tight">
          Research Process
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {researchStages.map((stage, index) =>
          <div
            key={index}
            className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700">
            
              <div className="w-10 h-10 rounded-full border-2 border-neutral-900 dark:border-white flex items-center justify-center mb-3 mx-auto">
                <stage.icon className="w-4 h-4 text-neutral-900 dark:text-white" />
              </div>
              <h5 className="text-sm font-bold text-neutral-900 dark:text-white text-center mb-1">
                {stage.title}
              </h5>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center font-medium mb-2">
                {stage.subtitle}
              </p>
              <div className="space-y-1">
                {stage.insights.map((insight, i) =>
              <div key={i} className="flex items-start gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 font-light">
                      {insight}
                    </span>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Survey Insights */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 text-center tracking-tight">
          Survey Insights
        </h4>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-neutral-900 dark:bg-white rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white dark:text-neutral-900 mb-2">
              73%
            </div>
            <p className="text-sm font-light text-neutral-300 dark:text-neutral-600">
              Expressed interest in using the Metaverse for education
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 text-center border border-neutral-200 dark:border-neutral-700">
            <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
              22%
            </div>
            <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
              Were unsure, citing cost and privacy concerns
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 text-center border border-neutral-200 dark:border-neutral-700">
            <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
              5%
            </div>
            <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">
              Uninterested, preferring traditional methods
            </p>
          </div>
        </div>

        {/* Key Findings */}
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
          <h5 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 uppercase tracking-wider text-center">
            Key Findings
          </h5>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {[
            'Engineering and tech backgrounds showed higher awareness',
            'Perceived usefulness was the top adoption driver',
            'Ease of use significantly influenced interest',
            'System compatibility was a key consideration',
            'Privacy concerns were the main barrier',
            'Cost was a secondary adoption factor'].
            map((finding, i) =>
            <div key={i} className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white dark:text-neutral-900 text-[8px] font-bold">
                    ✓
                  </span>
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                  {finding}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Model Performance */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 text-center tracking-tight">
          AI Model Performance
        </h4>
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-300 dark:border-neutral-600">
                  <th className="text-left py-3 px-3 text-neutral-900 dark:text-white font-semibold uppercase tracking-wider text-xs">
                    Model
                  </th>
                  <th className="text-center py-3 px-3 text-neutral-900 dark:text-white font-semibold uppercase tracking-wider text-xs">
                    Accuracy
                  </th>
                  <th className="text-center py-3 px-3 text-neutral-900 dark:text-white font-semibold uppercase tracking-wider text-xs">
                    Precision
                  </th>
                  <th className="text-center py-3 px-3 text-neutral-900 dark:text-white font-semibold uppercase tracking-wider text-xs">
                    Recall
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <td className="py-3 px-3 font-medium text-neutral-900 dark:text-white">
                    Decision Tree
                  </td>
                  <td className="text-center py-3 px-3 text-neutral-600 dark:text-neutral-400 font-light">
                    77%
                  </td>
                  <td className="text-center py-3 px-3 text-neutral-600 dark:text-neutral-400 font-light">
                    74%
                  </td>
                  <td className="text-center py-3 px-3 text-neutral-600 dark:text-neutral-400 font-light">
                    75%
                  </td>
                </tr>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <td className="py-3 px-3 font-medium text-neutral-900 dark:text-white">
                    SVM
                  </td>
                  <td className="text-center py-3 px-3 text-neutral-600 dark:text-neutral-400 font-light">
                    82%
                  </td>
                  <td className="text-center py-3 px-3 text-neutral-600 dark:text-neutral-400 font-light">
                    80%
                  </td>
                  <td className="text-center py-3 px-3 text-neutral-600 dark:text-neutral-400 font-light">
                    81%
                  </td>
                </tr>
                <tr className="bg-neutral-100 dark:bg-neutral-700">
                  <td className="py-3 px-3 font-medium text-neutral-900 dark:text-white">
                    KNN
                    <span className="ml-2 text-xs bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-2 py-0.5 rounded-full font-semibold">
                      Best
                    </span>
                  </td>
                  <td className="text-center py-3 px-3 text-neutral-600 dark:text-neutral-400 font-light">
                    85%
                  </td>
                  <td className="text-center py-3 px-3 text-neutral-600 dark:text-neutral-400 font-light">
                    83%
                  </td>
                  <td className="text-center py-3 px-3 text-neutral-600 dark:text-neutral-400 font-light">
                    84%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* The AI Model */}
        <div className="bg-neutral-900 dark:bg-white rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <BrainCircuitIcon className="w-6 h-6 text-white dark:text-neutral-900" />
            <h5 className="text-base font-bold text-white dark:text-neutral-900 tracking-tight">
              The AI Model
            </h5>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h6 className="font-semibold mb-3 uppercase tracking-wider text-xs text-neutral-400 dark:text-neutral-500">
                Technical Stack
              </h6>
              <ul className="space-y-2 text-sm font-light text-neutral-300 dark:text-neutral-600">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-current rounded-full" /> Built
                  using Scikit-learn
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-current rounded-full" /> Trained on
                  survey data
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-current rounded-full" /> Applied
                  KNN, SVM, and Decision Tree
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-current rounded-full" /> Evaluated
                  using multiple metrics
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-3 uppercase tracking-wider text-xs text-neutral-400 dark:text-neutral-500">
                Key Features
              </h6>
              <ul className="space-y-2 text-sm font-light text-neutral-300 dark:text-neutral-600">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-current rounded-full" />{' '}
                  Demographic profiling
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-current rounded-full" /> Technology
                  familiarity scores
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-current rounded-full" /> Behavioral
                  pattern analysis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-current rounded-full" /> Adoption
                  likelihood prediction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
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
        map((stat, i) =>
        <div
          key={i}
          className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 text-center">
          
            <stat.icon className="w-5 h-5 text-neutral-900 dark:text-white mx-auto mb-2" />
            <div className="text-xl font-bold text-neutral-900 dark:text-white">
              {stat.number}
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold mt-1">
              {stat.label}
            </div>
          </div>
        )}
      </div>

      {/* Quote */}
      <blockquote className="text-lg md:text-xl text-neutral-900 dark:text-white font-light leading-relaxed text-center italic">
        "This project wasn't just about building a model — it was about
        understanding how technology, data, and human behavior intersect to
        shape the future of learning."
      </blockquote>
    </div>);

}
/* ═══════════════════════════════════════════════════════
   WHATNOT ELECTRONICS — Rich Overlay (Editorial Case Study)
   ═══════════════════════════════════════════════════════ */
function WhatnotElectronicsOverlay() {
  // Editorial palette
  const palette = {
    bg: '#f5f4f0',
    white: '#ffffff',
    ink: '#0d0d0d',
    ink2: '#2a2a2a',
    muted: '#6b6b6b',
    faint: '#b0aeaa',
    border: '#e2e0db',
    accent: '#ff4d00',
    accent2: '#0057ff',
    accent3: '#00c264',
    yellow: '#f5c800',
    surface2: '#eeecea'
  };
  const fontHead = "'Clash Display', sans-serif";
  const fontBody = "'Instrument Sans', sans-serif";
  const fontMono = "'JetBrains Mono', monospace";
  // Reusable section header
  const SectionHeader = ({ num, title }: {num: string;title: string;}) =>
  <div className="flex items-center gap-3 mb-6">
      <span
      style={{
        fontFamily: fontMono,
        fontSize: 11,
        color: palette.faint
      }}>
      
        {num}
      </span>
      <span
      style={{
        fontFamily: fontMono,
        fontSize: 11,
        letterSpacing: '0.1em',
        color: palette.muted,
        textTransform: 'uppercase'
      }}>
      
        {title}
      </span>
      <span
      className="flex-1 h-px"
      style={{
        background: palette.border
      }} />
    
    </div>;

  const Tag = ({
    children,
    variant = 'neutral'



  }: {children: React.ReactNode;variant?: 'orange' | 'blue' | 'green' | 'yellow' | 'neutral';}) => {
    const styles: Record<string, React.CSSProperties> = {
      orange: {
        background: 'rgba(255,77,0,0.1)',
        color: palette.accent,
        border: '1px solid rgba(255,77,0,0.2)'
      },
      blue: {
        background: 'rgba(0,87,255,0.08)',
        color: palette.accent2,
        border: '1px solid rgba(0,87,255,0.15)'
      },
      green: {
        background: 'rgba(0,194,100,0.1)',
        color: palette.accent3,
        border: '1px solid rgba(0,194,100,0.2)'
      },
      yellow: {
        background: 'rgba(245,200,0,0.12)',
        color: '#8a6e00',
        border: '1px solid rgba(245,200,0,0.3)'
      },
      neutral: {
        background: palette.surface2,
        color: palette.muted,
        border: `1px solid ${palette.border}`
      }
    };
    return (
      <span
        style={{
          ...styles[variant],
          fontFamily: fontMono,
          fontSize: 10,
          padding: '3px 9px',
          borderRadius: 999,
          letterSpacing: '0.05em',
          fontWeight: 500,
          display: 'inline-block'
        }}>
        
        {children}
      </span>);

  };
  // Wrapper that breaks out of the modal's inner padding (-mx-8 md:-mx-10 -mt-2)
  // and applies the editorial off-white background across the whole overlay.
  return (
    <div
      className="-mx-8 md:-mx-10 -mt-2"
      style={{
        background: palette.bg,
        color: palette.ink,
        fontFamily: fontBody,
        fontSize: 15,
        lineHeight: 1.65
      }}>
      
      {/* Sticky-style nav strip */}
      <div
        className="flex items-center justify-between px-8 md:px-10"
        style={{
          height: 52,
          borderBottom: `1px solid ${palette.border}`,
          background: 'rgba(245,244,240,0.92)',
          backdropFilter: 'blur(12px)'
        }}>
        
        <div
          style={{
            fontFamily: fontHead,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: palette.ink
          }}>
          
          WHATNOT{' '}
          <span
            style={{
              color: palette.accent
            }}>
            
            ×
          </span>{' '}
          ELECTRONICS
        </div>
        <div
          className="hidden md:flex gap-7"
          style={{
            fontFamily: fontMono,
            fontSize: 12,
            color: palette.muted
          }}>
          
          <span>Problem</span>
          <span>Users</span>
          <span>Insights</span>
          <span>Playbook</span>
          <span>Growth</span>
          <span>Data</span>
        </div>
      </div>

      {/* HERO */}
      <div
        className="px-8 md:px-10 relative overflow-hidden"
        style={{
          padding: '4rem 2.5rem 3rem',
          borderBottom: `1px solid ${palette.border}`
        }}>
        
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '-1rem',
            right: '-1rem',
            fontFamily: fontHead,
            fontSize: '12rem',
            fontWeight: 700,
            color: 'rgba(13,13,13,0.03)',
            lineHeight: 1,
            pointerEvents: 'none',
            letterSpacing: '-0.04em',
            userSelect: 'none'
          }}>
          
          TECH
        </div>
        <div
          className="inline-flex items-center gap-2 mb-6"
          style={{
            fontFamily: fontMono,
            fontSize: 11,
            letterSpacing: '0.08em',
            color: palette.accent
          }}>
          
          <span
            style={{
              width: 20,
              height: 1,
              background: palette.accent,
              display: 'inline-block'
            }} />
          
          Category Case Study
        </div>
        <h1
          style={{
            fontFamily: fontHead,
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: palette.ink,
            marginBottom: '1.25rem'
          }}>
          
          Owning the
          <br />
          <span
            style={{
              color: palette.accent,
              display: 'block'
            }}>
            
            Electronics
          </span>
          <br />
          Category at Whatnot
        </h1>
        <p
          style={{
            fontSize: 16,
            color: palette.muted,
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
          
          Electronics is Whatnot's second-fastest growing category at +444% GMV
          YoY — yet it's still being treated like a side category. This is how
          I'd own it, grow it, and make it a flagship.
        </p>
        <div
          className="flex flex-wrap"
          style={{
            border: `1px solid ${palette.border}`,
            borderRadius: 14,
            overflow: 'hidden',
            width: 'fit-content'
          }}>
          
          {[
          {
            label: 'Category',
            val: 'Electronics / Tech'
          },
          {
            label: 'GMV Growth',
            val: '+444% YoY (2025)'
          },
          {
            label: 'Commission Rate',
            val: '5% — lowest on platform'
          }].
          map((item, i, arr) =>
          <div
            key={item.label}
            style={{
              padding: '0.75rem 1.25rem',
              borderRight:
              i < arr.length - 1 ? `1px solid ${palette.border}` : 'none',
              background: palette.white
            }}>
            
              <div
              style={{
                fontSize: 9,
                fontFamily: fontMono,
                letterSpacing: '0.1em',
                color: palette.faint,
                textTransform: 'uppercase',
                marginBottom: 3
              }}>
              
                {item.label}
              </div>
              <div
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: palette.ink
              }}>
              
                {item.val}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CANDIDATE VOICE */}
      <div
        className="px-8 md:px-10"
        style={{
          padding: '2.5rem 2.5rem',
          borderBottom: `1px solid ${palette.border}`
        }}>
        
        <div
          style={{
            background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 100%)',
            borderRadius: 14,
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
          
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '1.5rem',
              fontFamily: fontHead,
              fontSize: '10rem',
              fontWeight: 700,
              color: 'rgba(255,77,0,0.12)',
              lineHeight: 1,
              pointerEvents: 'none'
            }}>
            
            "
          </div>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(245,244,240,0.9)',
              lineHeight: 1.75,
              fontStyle: 'italic',
              position: 'relative',
              zIndex: 1,
              margin: 0
            }}>
            
            I'm the kind of person who walks into a room, reads it, and figures
            out who needs to be in the conversation. I don't wait for a playbook
            — I write one. I lead with data so my instincts are defensible, and
            I tell stories so the data actually lands. Electronics on Whatnot is
            the most interesting growth problem on the platform right now: a
            category exploding in volume, under-structured, and wide open for
            someone to own it completely. That person should be me.
          </p>
          <div
            style={{
              fontFamily: fontMono,
              fontSize: 11,
              color: 'rgba(245,244,240,0.35)',
              marginTop: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
            
            — Candidate POV · Category Manager, Electronics
          </div>
        </div>
      </div>

      {/* SECTION 01 — PROBLEM */}
      <section
        className="px-8 md:px-10"
        style={{
          padding: '3.5rem 2.5rem',
          borderBottom: `1px solid ${palette.border}`
        }}>
        
        <SectionHeader num="01" title="The problem statement" />
        <h2
          style={{
            fontFamily: fontHead,
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
            lineHeight: 1.15,
            color: palette.ink
          }}>
          
          The category with the most momentum and the least structure
        </h2>
        <p
          style={{
            fontSize: 15,
            color: palette.muted,
            lineHeight: 1.75,
            marginBottom: '1.5rem'
          }}>
          
          Electronics grew 444% YoY on Whatnot in 2025 — but it's running on
          organic energy, not deliberate strategy. No flagship seller community,
          no structured onboarding for refurb resellers, no influencer presence
          in tech. The category is growing despite Whatnot, not because of it.
        </p>

        {/* Stat grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            gap: 1,
            background: palette.border,
            border: `1px solid ${palette.border}`,
            borderRadius: 14,
            overflow: 'hidden',
            margin: '1.5rem 0'
          }}>
          
          {[
          {
            val: '+444%',
            lbl: 'Electronics GMV growth, 2025',
            color: palette.accent
          },
          {
            val: '5%',
            lbl: 'Commission — lowest on platform',
            color: palette.accent2
          },
          {
            val: '$11.5B',
            lbl: 'Whatnot valuation, late 2025',
            color: palette.accent3
          },
          {
            val: '95min',
            lbl: 'Avg daily time on platform',
            color: palette.ink
          }].
          map((s) =>
          <div
            key={s.lbl}
            style={{
              background: palette.white,
              padding: '1.25rem'
            }}>
            
              <div
              style={{
                fontFamily: fontHead,
                fontSize: '2rem',
                fontWeight: 700,
                lineHeight: 1,
                color: s.color
              }}>
              
                {s.val}
              </div>
              <div
              style={{
                fontSize: 11,
                color: palette.faint,
                marginTop: 4,
                fontFamily: fontMono
              }}>
              
                {s.lbl}
              </div>
            </div>
          )}
        </div>

        {/* Problem statement box */}
        <div
          style={{
            background: palette.ink,
            color: '#f5f4f0',
            borderRadius: 14,
            padding: '2rem',
            margin: '1.5rem 0'
          }}>
          
          <div
            style={{
              fontFamily: fontMono,
              fontSize: 10,
              letterSpacing: '0.1em',
              color: 'rgba(245,244,240,0.4)',
              marginBottom: '1rem'
            }}>
            
            PROBLEM STATEMENT
          </div>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: 'rgba(245,244,240,0.9)',
              margin: 0
            }}>
            
            Whatnot's Electronics category is growing at +444% YoY purely on
            organic demand — but there is no dedicated seller community, no
            structured onboarding for refurbished tech resellers, and no
            influencer or creator presence anchoring the category. Without
            deliberate ownership, Electronics will plateau as a transactional
            channel while competitors like TikTok Shop build the community layer
            that drives retention and repeat GMV.
          </p>
          <div
            style={{
              fontSize: 12,
              fontFamily: fontMono,
              color: 'rgba(245,244,240,0.35)',
              marginTop: '1.25rem',
              borderTop: '1px solid rgba(245,244,240,0.1)',
              paddingTop: '1rem'
            }}>
            
            Evidence: Whatnot charges 5% commission on electronics (vs. 8%
            standard) — a signal the platform wants growth here but hasn't yet
            paired it with category-level strategy. No Whatnot electronics
            influencer partnerships are publicly visible as of May 2026.
          </div>
        </div>

        {/* HMW box */}
        <div
          style={{
            border: `2px solid ${palette.accent}`,
            background: 'rgba(255,77,0,0.03)',
            borderRadius: 14,
            padding: '1.5rem',
            marginTop: '1.5rem'
          }}>
          
          <div
            style={{
              fontFamily: fontMono,
              fontSize: 10,
              letterSpacing: '0.1em',
              color: palette.accent,
              marginBottom: 8
            }}>
            
            HOW MIGHT WE
          </div>
          <p
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: palette.ink,
              lineHeight: 1.6,
              margin: 0
            }}>
            
            How might we transform Whatnot's Electronics category from an
            organically growing transactional channel into a community-anchored
            destination — so buyers return for the experience, not just the
            deal?
          </p>
          <div
            style={{
              fontSize: 12,
              color: palette.muted,
              marginTop: 10,
              fontStyle: 'italic'
            }}>
            
            This reframes the category from "resale channel" to "destination" —
            the same shift that made trading cards Whatnot's core flywheel,
            driven by community trust and repeat buyer behavior.
          </div>
        </div>
      </section>

      {/* SECTION 02 — USERS */}
      <section
        className="px-8 md:px-10"
        style={{
          padding: '3.5rem 2.5rem',
          borderBottom: `1px solid ${palette.border}`
        }}>
        
        <SectionHeader num="02" title="User segmentation & empathy" />
        <h2
          style={{
            fontFamily: fontHead,
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
            lineHeight: 1.15,
            color: palette.ink
          }}>
          
          Three people power this category
        </h2>
        <p
          style={{
            fontSize: 15,
            color: palette.muted,
            lineHeight: 1.75,
            marginBottom: '2rem'
          }}>
          
          The electronics category lives at the intersection of three very
          different user types. Getting the flywheel spinning means
          understanding what each one actually needs — and building for all
          three simultaneously.
        </p>

        {/* Segments */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
          style={{
            marginBottom: '2.5rem'
          }}>
          
          {[
          {
            num: 'SEGMENT 01',
            name: 'The Refurb Reseller',
            stripe: palette.accent,
            quote:
            '"I buy overstock pallets and test everything. I just need an audience who trusts me — and fast payouts."',
            desc: "Small business owner. Buys liquidation lots from Amazon, Best Buy, or direct distributors. Tests and grades devices. Lives on margin — needs low fees and fast inventory turnover. Currently uses eBay + Facebook Marketplace. Could be Whatnot's power seller if acquisition friction is low.",
            tags: [
            {
              v: 'orange' as const,
              l: 'High GMV potential'
            },
            {
              v: 'neutral' as const,
              l: 'Margin-sensitive'
            },
            {
              v: 'neutral' as const,
              l: 'Volume seller'
            }]

          },
          {
            num: 'SEGMENT 02',
            name: 'The Deal-Hunter Buyer',
            stripe: palette.accent2,
            quote:
            '"I want the thrill of getting a $900 iPhone for $280. But I need to know it actually works before I bid."',
            desc: 'Young, tech-savvy, value-conscious. Shops Whatnot for the live auction adrenaline and the price. Trusts sellers who demonstrate products live on camera. Extremely sensitive to getting burned — one bad experience means they leave. Currently compares with eBay refurb and Swappa.',
            tags: [
            {
              v: 'blue' as const,
              l: 'Trust-sensitive'
            },
            {
              v: 'neutral' as const,
              l: 'Price-driven'
            },
            {
              v: 'neutral' as const,
              l: 'Repeat if satisfied'
            }]

          },
          {
            num: 'SEGMENT 03',
            name: 'The Tech Creator',
            stripe: palette.accent3,
            quote:
            '"I already make unboxing content. If Whatnot makes it worth my time, I\'ll build my whole shop here."',
            desc: 'YouTube/TikTok tech reviewer with 10K–500K followers. Already comfortable on camera, already talks about gadgets, already has an audience that buys things. The missing piece on Whatnot Electronics. One high-profile tech creator could anchor the category the way card breakers anchored trading cards.',
            tags: [
            {
              v: 'green' as const,
              l: 'Category anchor potential'
            },
            {
              v: 'neutral' as const,
              l: 'Audience-first'
            },
            {
              v: 'neutral' as const,
              l: 'Creator mindset'
            }]

          }].
          map((seg) =>
          <div
            key={seg.num}
            style={{
              background: palette.white,
              border: `1px solid ${palette.border}`,
              borderRadius: 14,
              padding: '1.25rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
            
              <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: seg.stripe
              }} />
            
              <div
              style={{
                fontFamily: fontMono,
                fontSize: 9,
                letterSpacing: '0.12em',
                color: palette.faint,
                marginBottom: 8,
                marginTop: 4
              }}>
              
                {seg.num}
              </div>
              <div
              style={{
                fontFamily: fontHead,
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: 6,
                color: palette.ink
              }}>
              
                {seg.name}
              </div>
              <div
              style={{
                fontSize: 13,
                color: palette.muted,
                fontStyle: 'italic',
                borderLeft: `2px solid ${palette.border}`,
                paddingLeft: 10,
                margin: '10px 0',
                lineHeight: 1.5
              }}>
              
                {seg.quote}
              </div>
              <div
              style={{
                fontSize: 12,
                color: palette.faint,
                lineHeight: 1.5,
                marginBottom: 10
              }}>
              
                {seg.desc}
              </div>
              <div className="flex flex-wrap gap-1">
                {seg.tags.map((t, i) =>
              <Tag key={i} variant={t.v}>
                    {t.l}
                  </Tag>
              )}
              </div>
            </div>
          )}
        </div>

        {/* Empathy Map — Refurb Reseller */}
        <div
          style={{
            border: `1px solid ${palette.border}`,
            borderRadius: 14,
            overflow: 'hidden',
            marginTop: '1.5rem'
          }}>
          
          <div
            className="flex items-center justify-between"
            style={{
              background: palette.ink,
              color: palette.bg,
              padding: '1rem 1.25rem'
            }}>
            
            <div
              style={{
                fontFamily: fontHead,
                fontSize: 14,
                fontWeight: 600,
                color: palette.bg
              }}>
              
              Empathy Map — The Refurb Reseller
            </div>
            <Tag variant="orange">Primary target for seller acquisition</Tag>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {[
            {
              label: '👁 THINKS & FEELS',
              items: [
              '"eBay fees are killing my margin — I need a platform that respects my hustle"',
              '"If I can demo the phone working live, buyers will trust me"',
              '"I\'m sitting on 60 units — I need to move them this week"',
              '"I don\'t know if Whatnot buyers understand refurb grading"']

            },
            {
              label: '👂 HEARS & SEES',
              items: [
              'Other resellers posting big numbers in Whatnot Facebook groups',
              "Whatnot's 5% electronics commission vs. eBay's 13%+",
              'Trading card sellers building full-time businesses on the platform',
              'No clear "electronics seller community" or support channel visible']

            },
            {
              label: '😤 PAIN POINTS',
              items: [
              "No electronics-specific onboarding — generic seller docs don't cover grading",
              "Buyers don't know the A/B/C grading system → disputes",
              'No dedicated seller community to share sourcing strategies',
              'Unclear how to price live vs. fixed listing for electronics']

            },
            {
              label: '✨ GAINS WANTED',
              items: [
              'A standardized grading guide that sets buyer expectations upfront',
              'A seller community (Discord/Slack) with sourcing and pricing tips',
              'Fast, predictable payouts — cash flow is critical for pallet buyers',
              'Visibility into when electronics buyers are most active']

            }].
            map((cell, i) =>
            <div
              key={cell.label}
              style={{
                background: palette.white,
                padding: '1.1rem 1.25rem',
                borderRight:
                i % 2 === 0 ? `1px solid ${palette.border}` : 'none',
                borderBottom: i < 2 ? `1px solid ${palette.border}` : 'none'
              }}>
              
                <div
                style={{
                  fontFamily: fontMono,
                  fontSize: 9,
                  letterSpacing: '0.1em',
                  color: palette.faint,
                  marginBottom: 8
                }}>
                
                  {cell.label}
                </div>
                <ul
                style={{
                  paddingLeft: 14
                }}>
                
                  {cell.items.map((it, j) =>
                <li
                  key={j}
                  style={{
                    fontSize: 12,
                    color: palette.muted,
                    lineHeight: 1.65
                  }}>
                  
                      {it}
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Empathy Map — Deal-Hunter Buyer */}
        <div
          style={{
            border: `1px solid ${palette.border}`,
            borderRadius: 14,
            overflow: 'hidden',
            marginTop: '1.5rem'
          }}>
          
          <div
            className="flex items-center justify-between"
            style={{
              background: palette.ink,
              color: palette.bg,
              padding: '1rem 1.25rem'
            }}>
            
            <div
              style={{
                fontFamily: fontHead,
                fontSize: 14,
                fontWeight: 600,
                color: palette.bg
              }}>
              
              Empathy Map — The Deal-Hunter Buyer
            </div>
            <Tag variant="blue">Drives repeat GMV if trust is established</Tag>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {[
            {
              label: '👁 THINKS & FEELS',
              items: [
              '"Is this phone actually fully functional or is it junk?"',
              '"I love the live demo — it\'s like being in a shop but from my couch"',
              '"I got burned on a \'Grade B\' phone once — very hesitant now"',
              '"I\'d come back every week if I knew the seller was legit"']

            },
            {
              label: '👂 HEARS & SEES',
              items: [
              'Sellers demo devices live — turns the phone on, shows battery health',
              'Mixed reviews on Trustpilot about electronics purchase quality',
              'TikTok videos of "I got an iPhone for $150 on Whatnot"',
              'No visible platform-level guarantee for electronics purchases']

            },
            {
              label: '😤 PAIN POINTS',
              items: [
              'No standardized grading — "Grade B" means different things to different sellers',
              "Fear of receiving an item that doesn't match the live demo",
              'Returns/refunds for electronics feel high-friction',
              'Hard to discover trusted electronics sellers to follow']

            },
            {
              label: '✨ GAINS WANTED',
              items: [
              'Platform-standardized grading labels (Whatnot Certified Grade A/B/C)',
              'Seller trust badges visible before bidding',
              'Easy way to follow top electronics sellers and get show alerts',
              'Clear return path if item differs materially from description']

            }].
            map((cell, i) =>
            <div
              key={cell.label}
              style={{
                background: palette.white,
                padding: '1.1rem 1.25rem',
                borderRight:
                i % 2 === 0 ? `1px solid ${palette.border}` : 'none',
                borderBottom: i < 2 ? `1px solid ${palette.border}` : 'none'
              }}>
              
                <div
                style={{
                  fontFamily: fontMono,
                  fontSize: 9,
                  letterSpacing: '0.1em',
                  color: palette.faint,
                  marginBottom: 8
                }}>
                
                  {cell.label}
                </div>
                <ul
                style={{
                  paddingLeft: 14
                }}>
                
                  {cell.items.map((it, j) =>
                <li
                  key={j}
                  style={{
                    fontSize: 12,
                    color: palette.muted,
                    lineHeight: 1.65
                  }}>
                  
                      {it}
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* User Journey */}
        <div
          style={{
            marginTop: '2rem'
          }}>
          
          <div
            style={{
              fontFamily: fontMono,
              fontSize: 10,
              letterSpacing: '0.1em',
              color: palette.faint,
              marginBottom: 12
            }}>
            
            USER JOURNEY — REFURB RESELLER: FROM DISCOVERY TO POWER SELLER
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {[
            {
              phase: 'PHASE 1',
              title: 'Discovery',
              note: 'Hears about Whatnot in FB reseller groups — no direct outreach',
              type: 'pain'
            },
            {
              phase: 'PHASE 2',
              title: 'Apply',
              note: 'Generic seller application — no electronics-specific path',
              type: 'pain'
            },
            {
              phase: 'PHASE 3',
              title: 'First Show',
              note: 'No electronics playbook — figures it out alone',
              type: 'pain'
            },
            {
              phase: 'PHASE 4',
              title: 'Consistency',
              note: 'Opportunity: weekly show cadence coaching',
              type: 'opp'
            },
            {
              phase: 'PHASE 5',
              title: 'Growth',
              note: 'Opportunity: featured slot, Premier Shop program',
              type: 'opp'
            },
            {
              phase: 'PHASE 6',
              title: 'Power Seller',
              note: "$10K+/mo — becomes the category's anchor seller",
              type: 'opp'
            }].
            map((step) => {
              const isPain = step.type === 'pain';
              return (
                <div
                  key={step.phase}
                  style={{
                    padding: '0 4px'
                  }}>
                  
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      margin: '0 auto 8px',
                      background: isPain ? palette.accent : palette.accent3,
                      border: `2px solid ${isPain ? palette.accent : palette.accent3}`
                    }} />
                  
                  <div
                    style={{
                      fontFamily: fontMono,
                      fontSize: 9,
                      color: palette.faint,
                      textAlign: 'center',
                      marginBottom: 4
                    }}>
                    
                    {step.phase}
                  </div>
                  <div
                    style={{
                      fontFamily: fontHead,
                      fontSize: 11,
                      fontWeight: 600,
                      color: palette.ink,
                      textAlign: 'center',
                      marginBottom: 5,
                      fontFamily: fontHead
                    }}>
                    
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      textAlign: 'center',
                      lineHeight: 1.4,
                      padding: '4px 5px',
                      borderRadius: 5,
                      background: isPain ?
                      'rgba(255,77,0,0.08)' :
                      'rgba(0,194,100,0.08)',
                      color: isPain ? palette.accent : palette.accent3
                    }}>
                    
                    {step.note}
                  </div>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* SECTION 03 — INSIGHTS */}
      <section
        className="px-8 md:px-10"
        style={{
          padding: '3.5rem 2.5rem',
          borderBottom: `1px solid ${palette.border}`
        }}>
        
        <SectionHeader num="03" title="Key insights" />
        <h2
          style={{
            fontFamily: fontHead,
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
            lineHeight: 1.15,
            color: palette.ink
          }}>
          
          What I learned before touching the strategy
        </h2>
        <p
          style={{
            fontSize: 15,
            color: palette.muted,
            lineHeight: 1.75,
            marginBottom: '1.5rem'
          }}>
          
          Five insights that changed how I think about this category — each one
          shapes a specific piece of the playbook.
        </p>

        {[
        {
          icon: '⚡',
          title: 'The 5% commission is an underused growth signal',
          body: "Whatnot already lowered electronics commission to 5% — half the standard rate — to incentivize growth. But it's not being paired with proactive seller acquisition or community building. This is a platform-level signal that's going to waste without a category manager actively evangelizing it to refurb resellers."
        },
        {
          icon: '🎥',
          title:
          'Live format is a superpower for electronics — but only when used right',
          body: 'The biggest purchase anxiety in refurb electronics is "does it actually work?" Live demo solves this completely — a seller turning on a phone, showing battery health, and running through features live is worth 100 product photos. No static marketplace can replicate this. Electronics is a category where the live format is a genuine competitive moat, not just a gimmick.'
        },
        {
          icon: '🧭',
          title: 'No anchor creator = no category identity',
          body: 'Trading cards have CardCollector2. Fashion has FashioNica. Electronics has no one. The category that wins on Whatnot is the one with a recognizable face buyers trust and follow. One well-placed tech creator partnership — someone with 100K+ subscribers who already does device reviews — could define electronics on Whatnot the way MrBeast defined scale.'
        },
        {
          icon: '📦',
          title:
          'Grading standards are the trust infrastructure the category is missing',
          body: 'Right now, "Grade B" means different things to different electronics sellers. This creates disputes, erodes buyer trust, and depresses repeat purchase rates. A Whatnot-standardized electronics grading guide — published, enforced, and visible to buyers — is the single highest-leverage ops investment the category needs. It takes one Category Manager and two weeks to draft. It protects millions in GMV.'
        },
        {
          icon: '📊',
          title:
          'Sellers who go live 3–4x/week earn 40–70x more than weekly sellers',
          body: "Whatnot's own data shows show frequency is the single biggest lever for seller GMV. Most new electronics sellers don't know this. A structured onboarding sequence — that shows sellers their projected earnings at different frequency tiers — converts more casual sellers into consistent ones, which directly moves category GMV without adding a single new seller."
        }].
        map((ins, i) =>
        <div
          key={i}
          style={{
            background: palette.white,
            border: `1px solid ${palette.border}`,
            borderRadius: 14,
            padding: '1.5rem',
            marginBottom: 12
          }}>
          
            <div className="flex gap-3">
              <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: palette.surface2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                flexShrink: 0
              }}>
              
                {ins.icon}
              </div>
              <div>
                <h4
                style={{
                  fontFamily: fontHead,
                  fontSize: 14,
                  fontWeight: 600,
                  color: palette.ink,
                  marginBottom: 3
                }}>
                
                  {ins.title}
                </h4>
                <p
                style={{
                  fontSize: 13,
                  color: palette.muted,
                  margin: 0,
                  lineHeight: 1.6
                }}>
                
                  {ins.body}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* SECTION 04 — PLAYBOOK */}
      <section
        className="px-8 md:px-10"
        style={{
          padding: '3.5rem 2.5rem',
          borderBottom: `1px solid ${palette.border}`
        }}>
        
        <SectionHeader num="04" title="Seller acquisition playbook" />
        <h2
          style={{
            fontFamily: fontHead,
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
            lineHeight: 1.15,
            color: palette.ink
          }}>
          
          10 sellers. 90 days. $500K in new category GMV.
        </h2>
        <p
          style={{
            fontSize: 15,
            color: palette.muted,
            lineHeight: 1.75,
            marginBottom: '1.5rem'
          }}>
          
          This is the targeted seller acquisition sprint I'd run in my first 90
          days — not spray-and-pray outreach, but surgical targeting of the
          highest-potential refurb resellers in the US market.
        </p>

        {/* Seller table */}
        <div className="overflow-x-auto">
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 13,
              marginTop: '1rem'
            }}>
            
            <thead>
              <tr>
                {[
                'SELLER ARCHETYPE',
                'WHERE TO FIND THEM',
                'PITCH ANGLE',
                'GMV POTENTIAL',
                'PRIORITY',
                'FIT'].
                map((h) =>
                <th
                  key={h}
                  style={{
                    fontFamily: fontMono,
                    fontSize: 9,
                    letterSpacing: '0.1em',
                    color: palette.faint,
                    padding: '8px 12px',
                    textAlign: 'left',
                    borderBottom: `1px solid ${palette.border}`,
                    background: palette.surface2,
                    fontWeight: 500
                  }}>
                  
                    {h}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {[
              {
                name: 'Amazon/Best Buy Liquidation Reseller',
                where:
                'eBay Power Sellers, BULQ.com communities, reseller Facebook groups',
                pitch: "5% fee vs eBay's 13% — keep more margin per device",
                gmv: '$30K–80K/mo',
                priority: 95,
                pColor: palette.accent,
                fit: 'Highest',
                fitColor: palette.accent3
              },
              {
                name: 'Tech YouTuber / Creator (100K–500K subs)',
                where:
                'YouTube search: "refurb iPhone review", "budget tech", "tech deals"',
                pitch:
                'Monetize existing audience — turn viewers into live buyers',
                gmv: '$15K–50K/mo + community anchor',
                priority: 90,
                pColor: palette.accent,
                fit: 'Highest',
                fitColor: palette.accent3
              },
              {
                name: 'Local Refurb Phone Shop Owner',
                where:
                'Google Maps "phone repair shop", Yelp, Instagram #phonerepair',
                pitch:
                'Live channel = new revenue stream on top of walk-in business',
                gmv: '$8K–25K/mo',
                priority: 75,
                pColor: palette.accent2,
                fit: 'High',
                fitColor: palette.accent2
              },
              {
                name: 'Swappa / Decluttr Top Seller',
                where:
                'Swappa public listings — filter by sales volume and ratings',
                pitch:
                'Live format converts at 10x vs. static listings — same inventory, more sales',
                gmv: '$10K–30K/mo',
                priority: 70,
                pColor: palette.accent2,
                fit: 'High',
                fitColor: palette.accent2
              },
              {
                name: 'Electronics Flea Market / Trade Show Vendor',
                where:
                'In-person: electronics swap meets, ASD Market Week, local flea markets',
                pitch:
                'Take your booth online — reach national buyers instead of foot traffic',
                gmv: '$5K–20K/mo',
                priority: 55,
                pColor: palette.yellow,
                fit: 'Medium',
                fitColor: palette.yellow
              }].
              map((row) =>
              <tr key={row.name}>
                  <td
                  style={{
                    padding: '10px 12px',
                    borderBottom: `1px solid ${palette.border}`,
                    color: palette.ink2,
                    verticalAlign: 'middle'
                  }}>
                  
                    <strong>{row.name}</strong>
                  </td>
                  <td
                  style={{
                    padding: '10px 12px',
                    borderBottom: `1px solid ${palette.border}`,
                    color: palette.ink2,
                    verticalAlign: 'middle'
                  }}>
                  
                    {row.where}
                  </td>
                  <td
                  style={{
                    padding: '10px 12px',
                    borderBottom: `1px solid ${palette.border}`,
                    color: palette.ink2,
                    verticalAlign: 'middle'
                  }}>
                  
                    {row.pitch}
                  </td>
                  <td
                  style={{
                    padding: '10px 12px',
                    borderBottom: `1px solid ${palette.border}`,
                    color: palette.ink2,
                    verticalAlign: 'middle'
                  }}>
                  
                    {row.gmv}
                  </td>
                  <td
                  style={{
                    padding: '10px 12px',
                    borderBottom: `1px solid ${palette.border}`,
                    verticalAlign: 'middle',
                    minWidth: 80
                  }}>
                  
                    <div
                    style={{
                      height: 5,
                      borderRadius: 99,
                      background: palette.border,
                      overflow: 'hidden'
                    }}>
                    
                      <div
                      style={{
                        height: '100%',
                        width: `${row.priority}%`,
                        background: row.pColor,
                        borderRadius: 99
                      }} />
                    
                    </div>
                  </td>
                  <td
                  style={{
                    padding: '10px 12px',
                    borderBottom: `1px solid ${palette.border}`,
                    color: palette.ink2,
                    verticalAlign: 'middle'
                  }}>
                  
                    <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: row.fitColor,
                      display: 'inline-block',
                      marginRight: 5
                    }} />
                  
                    {row.fit}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Outreach + Onboarding cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
          style={{
            marginTop: '1.5rem'
          }}>
          
          {[
          {
            label: 'OUTREACH SEQUENCE',
            ordered: true,
            items: [
            "DM on the platform they sell on — show you've done your homework on their inventory",
            'Lead with the 5% commission math — calculate their exact monthly savings vs. current platform',
            'Offer a guided first show — I personally join their first live and coach in real time',
            '30-day check-in — review their metrics, adjust show strategy, unlock Premier Shop path']

          },
          {
            label: "ONBOARDING DELIVERABLES I'D BUILD",
            ordered: false,
            items: [
            'Electronics seller starter guide: grading standards, pricing framework, show format tips',
            'Private Discord channel for electronics sellers — sourcing tips, pricing community',
            'Show frequency earnings calculator — visual proof of 40–70x revenue at 3–4x/week',
            'Electronics category "Certified Grade" badge system — standardizes trust for buyers']

          }].
          map((card) =>
          <div
            key={card.label}
            style={{
              background: palette.white,
              border: `1px solid ${palette.border}`,
              borderRadius: 14,
              padding: '1.1rem 1.25rem'
            }}>
            
              <div
              style={{
                fontFamily: fontMono,
                fontSize: 10,
                color: palette.faint,
                marginBottom: 8,
                letterSpacing: '0.08em'
              }}>
              
                {card.label}
              </div>
              {card.ordered ?
            <ol
              style={{
                paddingLeft: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 8
              }}>
              
                  {card.items.map((it, i) =>
              <li
                key={i}
                style={{
                  fontSize: 13,
                  color: palette.muted
                }}>
                
                      {it}
                    </li>
              )}
                </ol> :

            <ul
              style={{
                paddingLeft: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 8
              }}>
              
                  {card.items.map((it, i) =>
              <li
                key={i}
                style={{
                  fontSize: 13,
                  color: palette.muted
                }}>
                
                      {it}
                    </li>
              )}
                </ul>
            }
            </div>
          )}
        </div>
      </section>

      {/* SECTION 05 — GROWTH EXPERIMENTS */}
      <section
        className="px-8 md:px-10"
        style={{
          padding: '3.5rem 2.5rem',
          borderBottom: `1px solid ${palette.border}`
        }}>
        
        <SectionHeader num="05" title="Growth experiments" />
        <h2
          style={{
            fontFamily: fontHead,
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
            lineHeight: 1.15,
            color: palette.ink
          }}>
          
          Three bets I'd run in the first 6 months
        </h2>
        <p
          style={{
            fontSize: 15,
            color: palette.muted,
            lineHeight: 1.75,
            marginBottom: '1.5rem'
          }}>
          
          Each experiment is designed to test a specific growth lever — with a
          clear hypothesis, success metric, and low cost to run. If it works, we
          scale it. If it doesn't, we learn fast and move on.
        </p>

        {[
        {
          title: 'Experiment 1 — "Tech Drops" Weekly Show Format',
          tag: 'Highest impact',
          tagVariant: 'orange' as const,
          desc: 'Coordinate 5–8 top electronics sellers to go live simultaneously every Thursday at 8pm ET, branded as "Whatnot Tech Drops." Create a shared marketing moment — cross-promote across all seller channels, push notification to electronics category followers. Same concept as a flash sale event, but live and community-driven.',
          hypothesis:
          'A coordinated weekly event increases electronics category GMV by 30%+ on Thursdays vs. baseline, and creates a habit loop that grows follower counts for participating sellers',
          metric:
          '+30% GMV on event day vs. weekly avg · +20% new electronics category followers per week · 5+ sellers participating consistently after 4 weeks',
          cost: 'Low — coordination, a shared Canva template, push notification copy, and 2 hrs/week of my time to manage the lineup and debrief with sellers'
        },
        {
          title: 'Experiment 2 — Tech Creator Partnership (Pilot)',
          tag: 'Category anchor',
          tagVariant: 'blue' as const,
          desc: 'Partner with one mid-tier tech YouTuber (150K–300K subs, existing refurb or budget tech content) for a 4-week pilot. They host 2 live shows per week, Whatnot provides a $500 giveaway budget for their first show. Goal: prove the format works for a creator audience, generate content showing Whatnot as a legit tech commerce platform.',
          hypothesis:
          "A creator's existing audience converts into Whatnot buyers at 3–5% rate during a live show, generating $15K+ GMV in the pilot period and 2,000+ new electronics category followers",
          metric:
          '$15K+ GMV in 4 weeks · 2,000+ new electronics followers · 60%+ of pilot buyers make a second purchase within 30 days',
          cost: "$500 giveaway budget + my time sourcing and managing the creator relationship. No paid media spend — creator's own channel is the distribution."
        },
        {
          title:
          'Experiment 3 — Standardized "Whatnot Verified" Grading Label',
          tag: 'Trust infrastructure',
          tagVariant: 'green' as const,
          desc: 'Draft a clear 3-tier grading standard (Grade A: like new, Grade B: minor cosmetic wear fully functional, Grade C: heavy wear functional) and pilot it with 10 electronics sellers. Sellers who adopt the standard get a "Whatnot Verified Grade" badge on their listings. Measure whether the badge improves conversion rate and reduces disputes.',
          hypothesis:
          'Standardized grading badges reduce buyer disputes by 25%+ and increase bid-to-buy conversion rate for participating sellers vs. non-badge sellers',
          metric:
          '-25% dispute rate for participating sellers · +15% conversion rate vs. control group · 80%+ of piloted sellers request to keep the program after 30 days',
          cost: 'Zero budget — requires a grading guide doc (I write it), coordination with 10 sellers, and a badge added to seller profiles by engineering (1-2 day build)'
        }].
        map((exp) =>
        <div
          key={exp.title}
          style={{
            background: palette.white,
            border: `1px solid ${palette.border}`,
            borderRadius: 14,
            overflow: 'hidden',
            marginBottom: 14
          }}>
          
            <div
            className="flex items-center justify-between"
            style={{
              padding: '1rem 1.25rem',
              background: palette.surface2,
              borderBottom: `1px solid ${palette.border}`
            }}>
            
              <div
              style={{
                fontFamily: fontHead,
                fontSize: 14,
                fontWeight: 600,
                color: palette.ink
              }}>
              
                {exp.title}
              </div>
              <Tag variant={exp.tagVariant}>{exp.tag}</Tag>
            </div>
            <div
            style={{
              padding: '1.25rem'
            }}>
            
              <p
              style={{
                fontSize: 13,
                color: palette.muted,
                marginBottom: 10
              }}>
              
                {exp.desc}
              </p>
              <div
              className="grid grid-cols-1 md:grid-cols-3 gap-3"
              style={{
                marginTop: 10
              }}>
              
                {[
              {
                label: 'HYPOTHESIS',
                val: exp.hypothesis
              },
              {
                label: 'SUCCESS METRIC',
                val: exp.metric
              },
              {
                label: 'COST TO RUN',
                val: exp.cost
              }].
              map((c) =>
              <div key={c.label}>
                    <div
                  style={{
                    fontFamily: fontMono,
                    fontSize: 9,
                    letterSpacing: '0.1em',
                    color: palette.faint,
                    marginBottom: 4
                  }}>
                  
                      {c.label}
                    </div>
                    <div
                  style={{
                    fontSize: 13,
                    color: palette.ink2,
                    lineHeight: 1.5
                  }}>
                  
                      {c.val}
                    </div>
                  </div>
              )}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* SECTION 06 — DATA */}
      <section
        className="px-8 md:px-10"
        style={{
          padding: '3.5rem 2.5rem',
          borderBottom: `1px solid ${palette.border}`
        }}>
        
        <SectionHeader num="06" title="Data & category health metrics" />
        <h2
          style={{
            fontFamily: fontHead,
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
            lineHeight: 1.15,
            color: palette.ink
          }}>
          
          How I'd track whether it's actually working
        </h2>
        <p
          style={{
            fontSize: 15,
            color: palette.muted,
            lineHeight: 1.75,
            marginBottom: '1.5rem'
          }}>
          
          A Category Manager without a dashboard is just guessing. Here's the
          simulated category health table I'd pull weekly — and the four
          questions I'd ask the data every Monday morning.
        </p>

        {/* Data table */}
        <div
          style={{
            background: palette.white,
            border: `1px solid ${palette.border}`,
            borderRadius: 14,
            padding: '1.5rem',
            marginBottom: '1.5rem',
            overflowX: 'auto'
          }}>
          
          <div
            style={{
              fontFamily: fontMono,
              fontSize: 10,
              color: palette.faint,
              marginBottom: 12,
              letterSpacing: '0.08em'
            }}>
            
            SIMULATED WEEKLY CATEGORY HEALTH TABLE — ELECTRONICS
          </div>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 12,
              marginTop: '1rem'
            }}>
            
            <thead>
              <tr>
                {[
                'METRIC',
                'WEEK 1',
                'WEEK 4',
                'WEEK 8',
                'WEEK 12',
                'TREND',
                'STATUS'].
                map((h) =>
                <th
                  key={h}
                  style={{
                    fontFamily: fontMono,
                    fontSize: 9,
                    letterSpacing: '0.08em',
                    color: palette.faint,
                    padding: '7px 10px',
                    background: palette.surface2,
                    border: `1px solid ${palette.border}`,
                    textAlign: 'left',
                    fontWeight: 500
                  }}>
                  
                    {h}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {[
              {
                metric: 'Active Electronics Sellers',
                vals: ['42', '51', '63', '78'],
                spark: [8, 11, 14, 20],
                sparkColor: palette.accent3,
                status: 'On track',
                statusVariant: 'green' as const
              },
              {
                metric: 'Weekly Category GMV',
                vals: ['$180K', '$224K', '$298K', '$391K'],
                spark: [7, 10, 14, 20],
                sparkColor: palette.accent3,
                status: 'Exceeding',
                statusVariant: 'green' as const
              },
              {
                metric: 'Avg Shows / Seller / Week',
                vals: ['1.2', '1.6', '2.1', '2.8'],
                spark: [6, 9, 13, 18],
                sparkColor: palette.accent2,
                status: 'Improving',
                statusVariant: 'blue' as const
              },
              {
                metric: 'Buyer Dispute Rate',
                vals: ['4.8%', '4.1%', '3.2%', '2.4%'],
                spark: [20, 15, 10, 6],
                sparkColor: palette.accent3,
                status: 'Improving',
                statusVariant: 'green' as const
              },
              {
                metric: 'Buyer 30-Day Retention',
                vals: ['28%', '33%', '39%', '46%'],
                spark: [6, 9, 13, 20],
                sparkColor: palette.accent3,
                status: 'On track',
                statusVariant: 'green' as const
              },
              {
                metric: 'New Seller Activations / Week',
                vals: ['3', '5', '6', '4'],
                spark: [5, 14, 20, 10],
                sparkColor: palette.accent3,
                status: 'Watch',
                statusVariant: 'yellow' as const
              }].
              map((row) =>
              <tr key={row.metric}>
                  <td
                  style={{
                    padding: '8px 10px',
                    border: `1px solid ${palette.border}`,
                    color: palette.ink2,
                    background: palette.white
                  }}>
                  
                    <strong>{row.metric}</strong>
                  </td>
                  {row.vals.map((v, i) =>
                <td
                  key={i}
                  style={{
                    padding: '8px 10px',
                    border: `1px solid ${palette.border}`,
                    color: palette.ink2,
                    background: palette.white
                  }}>
                  
                      {v}
                    </td>
                )}
                  <td
                  style={{
                    padding: '8px 10px',
                    border: `1px solid ${palette.border}`,
                    background: palette.white
                  }}>
                  
                    <div
                    className="flex items-end gap-0.5"
                    style={{
                      height: 20
                    }}>
                    
                      {row.spark.map((h, i) =>
                    <div
                      key={i}
                      style={{
                        width: 6,
                        height: h,
                        borderRadius: '2px 2px 0 0',
                        background: row.sparkColor
                      }} />

                    )}
                    </div>
                  </td>
                  <td
                  style={{
                    padding: '8px 10px',
                    border: `1px solid ${palette.border}`,
                    background: palette.white
                  }}>
                  
                    <Tag variant={row.statusVariant}>{row.status}</Tag>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Monday questions + SQL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div
            style={{
              background: palette.white,
              border: `1px solid ${palette.border}`,
              borderRadius: 14,
              padding: '1.1rem 1.25rem'
            }}>
            
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 10,
                color: palette.faint,
                marginBottom: 10,
                letterSpacing: '0.08em'
              }}>
              
              4 QUESTIONS I ASK THE DATA EVERY MONDAY
            </div>
            <ol
              style={{
                paddingLeft: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 10
              }}>
              
              {[
              [
              'Who went quiet?',
              "Which active sellers didn't stream last week — and why? Reach out before they churn."],

              [
              "What's the dispute pattern?",
              'Are disputes clustering around a specific seller, device type, or grading label?'],

              [
              "Who's about to break out?",
              'Which seller just had their best week? Time to fast-track them to featured.'],

              [
              'Where did new buyers come from?',
              'Which acquisition channel drove the best 30-day retention this week?']].

              map(([q, a], i) =>
              <li
                key={i}
                style={{
                  fontSize: 13,
                  color: palette.muted
                }}>
                
                  <strong
                  style={{
                    color: palette.ink
                  }}>
                  
                    {q}
                  </strong>{' '}
                  {a}
                </li>
              )}
            </ol>
          </div>
          <div
            style={{
              background: palette.white,
              border: `1px solid ${palette.border}`,
              borderRadius: 14,
              padding: '1.1rem 1.25rem'
            }}>
            
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 10,
                color: palette.faint,
                marginBottom: 10,
                letterSpacing: '0.08em'
              }}>
              
              SQL QUERY LOGIC I'D USE (PSEUDOCODE)
            </div>
            <div
              style={{
                background: palette.surface2,
                borderRadius: 8,
                padding: '1rem',
                fontFamily: fontMono,
                fontSize: 11,
                color: palette.ink2,
                lineHeight: 1.8
              }}>
              
              <span
                style={{
                  color: palette.accent2
                }}>
                
                SELECT
              </span>{' '}
              seller_id, COUNT(shows) AS weekly_shows,
              <br />
              &nbsp;&nbsp;SUM(gmv) AS weekly_gmv,
              <br />
              &nbsp;&nbsp;AVG(dispute_rate) AS dispute_rate
              <br />
              <span
                style={{
                  color: palette.accent2
                }}>
                
                FROM
              </span>{' '}
              seller_activity
              <br />
              <span
                style={{
                  color: palette.accent2
                }}>
                
                WHERE
              </span>{' '}
              category ={' '}
              <span
                style={{
                  color: palette.accent3
                }}>
                
                'electronics'
              </span>
              <br />
              &nbsp;&nbsp;
              <span
                style={{
                  color: palette.accent2
                }}>
                
                AND
              </span>{' '}
              week = current_week
              <br />
              <span
                style={{
                  color: palette.accent2
                }}>
                
                GROUP BY
              </span>{' '}
              seller_id
              <br />
              <span
                style={{
                  color: palette.accent2
                }}>
                
                ORDER BY
              </span>{' '}
              weekly_gmv{' '}
              <span
                style={{
                  color: palette.accent2
                }}>
                
                DESC
              </span>
              <br />
              <span
                style={{
                  color: palette.faint
                }}>
                
                {'-- Flag sellers with shows < 2 AND prev_week shows ≥ 2'}
              </span>
            </div>
          </div>
        </div>

        {/* 90-day roadmap */}
        <h3
          style={{
            fontFamily: fontHead,
            fontSize: '1.05rem',
            fontWeight: 600,
            color: palette.ink,
            marginTop: '2.5rem',
            marginBottom: '0.5rem'
          }}>
          
          90-day roadmap
        </h3>
        <p
          style={{
            fontSize: 13,
            color: palette.muted,
            marginBottom: 0
          }}>
          
          Three phases. Each one builds on the last. By day 90 the category has
          structure, anchor sellers, and a data loop that runs itself.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
          style={{
            marginTop: '1.25rem'
          }}>
          
          {[
          {
            phase: 'DAYS 1–30',
            title: 'Know the category',
            desc: 'Shadow every electronics show. Interview 20 sellers and 20 buyers. Build the category health dashboard. Map the competitive landscape (eBay, Swappa, TikTok Shop). Identify the top 10 seller targets.',
            kpis: [
            {
              v: 'neutral' as const,
              l: 'Category audit doc'
            },
            {
              v: 'neutral' as const,
              l: 'Dashboard live'
            },
            {
              v: 'neutral' as const,
              l: "10 targets ID'd"
            }]

          },
          {
            phase: 'DAYS 31–60',
            title: 'Build the foundation',
            desc: 'Activate 5 high-priority sellers. Launch the grading standard pilot. Ship the electronics onboarding guide. Start seller Discord. Run first "Tech Drops" event. Begin creator outreach for pilot partnership.',
            kpis: [
            {
              v: 'orange' as const,
              l: '5 sellers live'
            },
            {
              v: 'orange' as const,
              l: 'Grading pilot'
            },
            {
              v: 'orange' as const,
              l: 'Tech Drops #1'
            }]

          },
          {
            phase: 'DAYS 61–90',
            title: 'Scale what works',
            desc: 'Launch creator partnership. Scale Tech Drops to weekly cadence. Review grading pilot results and formalize. Present category health report to leadership with 6-month growth forecast and resource ask.',
            kpis: [
            {
              v: 'green' as const,
              l: 'Creator live'
            },
            {
              v: 'green' as const,
              l: 'Weekly Tech Drops'
            },
            {
              v: 'green' as const,
              l: 'Leadership review'
            }]

          }].
          map((tl) =>
          <div
            key={tl.phase}
            style={{
              background: palette.white,
              border: `1px solid ${palette.border}`,
              borderRadius: 14,
              padding: '1.1rem'
            }}>
            
              <div
              style={{
                fontFamily: fontMono,
                fontSize: 9,
                letterSpacing: '0.1em',
                color: palette.faint,
                marginBottom: 6
              }}>
              
                {tl.phase}
              </div>
              <div
              style={{
                fontFamily: fontHead,
                fontSize: 14,
                fontWeight: 600,
                color: palette.ink,
                marginBottom: 6
              }}>
              
                {tl.title}
              </div>
              <div
              style={{
                fontSize: 12,
                color: palette.muted,
                lineHeight: 1.5,
                marginBottom: 10
              }}>
              
                {tl.desc}
              </div>
              <div className="flex flex-wrap gap-1">
                {tl.kpis.map((k, i) =>
              <Tag key={i} variant={k.v}>
                    {k.l}
                  </Tag>
              )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-8 md:px-10"
        style={{
          padding: '2rem 2.5rem',
          borderTop: `1px solid ${palette.border}`
        }}>
        
        <p
          style={{
            fontSize: 12,
            color: palette.faint,
            fontFamily: fontMono
          }}>
          
          Whatnot Electronics · Category Case Study · May 2026
        </p>
        <p
          style={{
            fontSize: 12,
            color: palette.faint,
            fontFamily: fontMono
          }}>
          
          Built by Aayusha
        </p>
      </div>
    </div>);

}