import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, PlusIcon, BookmarkIcon } from 'lucide-react';
import {
  nowUpdated,
  buildingProject,
  learningTopics,
  readingBook,
  obsession } from
'../../data/nowSnapshot';

type RowId = 'building' | 'learning' | 'reading' | 'obsessed';

const ease = [0.23, 1, 0.32, 1] as const;

const rows: {id: RowId;label: string;value: string;}[] = [
{ id: 'building', label: 'currently building', value: buildingProject.title },
{
  id: 'learning',
  label: 'currently learning about',
  value: `${learningTopics.length} topics`
},
{ id: 'reading', label: 'currently reading', value: readingBook.title },
{ id: 'obsessed', label: 'currently obsessed with', value: obsession.title }];


export function NowSnapshot() {
  const [open, setOpen] = useState<RowId>('building');

  return (
    <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200 dark:border-neutral-700">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Right now
        </h3>
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-flame opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-flame" />
          </span>
          Live · {nowUpdated}
        </div>
      </div>

      {/* Rows */}
      <ul>
        {rows.map((row) => {
          const isOpen = open === row.id;
          return (
            <li
              key={row.id}
              className="border-b last:border-b-0 border-neutral-200 dark:border-neutral-700">
              
              <button
                onClick={() => setOpen(row.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-4 px-6 py-4 text-left group focus:outline-none focus-visible:bg-neutral-50 dark:focus-visible:bg-neutral-900">
                
                <span
                  className={`w-1 self-stretch rounded-full transition-colors duration-200 ${
                  isOpen ? 'bg-truffle dark:bg-flame' : 'bg-transparent'}`
                  } />
                
                <span className="flex-1 min-w-0">
                  <span className="block font-serif italic text-sm text-neutral-500 dark:text-neutral-400">
                    {row.label}
                  </span>
                  <span
                    className={`block font-semibold truncate transition-colors duration-150 ${
                    isOpen ?
                    'text-lg text-neutral-900 dark:text-white' :
                    'text-base text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white'}`
                    }>
                    
                    {row.value}
                  </span>
                </span>
                <PlusIcon
                  className={`w-4 h-4 flex-shrink-0 text-neutral-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-45' : ''}`
                  } />
                
              </button>

              <AnimatePresence initial={false}>
                {isOpen &&
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease }}
                  className="overflow-hidden">
                  
                    <div className="px-6 pb-6 pl-11">
                      {row.id === 'building' && <BuildingPanel />}
                      {row.id === 'learning' && <LearningPanel />}
                      {row.id === 'reading' && <ReadingPanel />}
                      {row.id === 'obsessed' &&
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {obsession.note}
                        </p>
                    }
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </li>);

        })}
      </ul>
    </div>);

}

function BuildingPanel() {
  const { steps, description } = buildingProject;
  return (
    <div className="space-y-5">
    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
      {description}
    </p>
    <ol className="flex items-start">
      {steps.map((step, i) =>
        <li key={step.label} className="flex-1 flex flex-col items-start">
          <div className="flex items-center w-full">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
              step.status === 'done' ?
              'bg-neutral-950 dark:bg-flame' :
              step.status === 'active' ?
              'border-2 border-truffle dark:border-flame' :
              'border-2 border-neutral-300 dark:border-neutral-600'}`
              }>
              
              {step.status === 'done' &&
              <CheckIcon className="w-3 h-3 text-white dark:text-abyssal" />
              }
              {step.status === 'active' &&
              <span className="w-1.5 h-1.5 rounded-full bg-truffle dark:bg-flame" />
              }
            </span>
            {i < steps.length - 1 &&
            <span
              className={`h-0.5 flex-1 mx-1 ${
              step.status === 'done' ?
              'bg-neutral-950 dark:bg-flame' :
              'bg-neutral-200 dark:bg-neutral-700'}`
              } />

            }
          </div>
          <span
            className={`mt-2 text-xs pr-2 ${
            step.status === 'active' ?
            'font-semibold text-truffle dark:text-flame' :
            'text-neutral-500 dark:text-neutral-400'}`
            }>
            
            {step.label}
          </span>
        </li>
        )}
    </ol>
    </div>);

}

function LearningPanel() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {learningTopics.map((topic, i) =>
        <button
          key={topic.name}
          onClick={() => setActive(i)}
          aria-pressed={i === active}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-flame ${
          i === active ?
          'bg-neutral-950 text-white dark:bg-flame dark:text-abyssal' :
          'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700'}`
          }>
          
            {topic.name}
          </button>
        )}
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease }}
          className="font-serif italic text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          
          "{learningTopics[active].note}"
        </motion.p>
      </AnimatePresence>
    </div>);

}

function ReadingPanel() {
  return (
    <div className="flex items-center gap-5">
      <motion.div
        whileHover={{ rotate: -4, y: -2 }}
        transition={{ duration: 0.2, ease }}
        className="relative w-16 h-24 rounded-sm rounded-r-md bg-truffle flex-shrink-0 flex items-end p-2 shadow-md">
        
        <span className="absolute left-1.5 top-0 bottom-0 w-px bg-black/20" />
        <span className="font-serif text-[11px] font-bold text-palladian leading-tight">
          {readingBook.title}
        </span>
        <BookmarkIcon className="absolute -top-1 right-2 w-4 h-4 text-flame fill-flame" />
      </motion.div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {readingBook.note}
      </p>
    </div>);

}