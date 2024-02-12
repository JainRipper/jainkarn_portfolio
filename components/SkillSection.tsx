"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';
import { Link } from "react-scroll/modules"
import ThemedImage from './reusable/ThemedImage';
import { MdArrowOutward } from "react-icons/md";
import iconCss from '../public/icons/skills-css.svg';
import iconHtml from '../public/icons/skills-html.svg';
import iconJs from '../public/icons/skills-java_script.svg';
import iconJson from '../public/icons/skills-json.svg';
import iconReact from '../public/icons/skills-react_JS.svg';
import iconUiux from '../public/icons/skills-ui_uX.svg';

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

const SkillSection = () => {
  return (
    <motion.section id="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between sm:flex-row mt-6 md:mt-20 container mx-auto px-28 pb-20" >
			<div className="pb-16 sm:flex sm:justify-between container mx-auto" >
        {/* Intro */}
        <div className="w-full md:w-1/2 text-left">
          <div className="pb-10">
            <h1 className="font-archivo font-bold text-2xl lg:text-5xl sm:text-left text-ternary-dark dark:text-primary-light" >
              My skills can help you
            </h1>
            <p className="mt-4 text-base md:text-lg sm:text-left leading-normal text-gray-500 dark:text-gray-200" >
              Unlocking possibilities My skills tailored to elevate and meet your unique project requirements
            </p>
          </div>

          {/* Skills set */}
          <div className="md:flex flex-wrap">
            <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3">
              <div aria-label="HTML"
                className="flex items-center border border-black bg-teal-300 hover:bg-slate-200 text-black shadow-[3px_3px_0px_0px_#1a202c] rounded p-2.5 duration-500 focus:ring-1 focus:ring-slate-600 relative"
              >
                <Image src={iconHtml} className="w-8" 
                  alt="Frontend Engineer" width={150} height={150} />
                <span className="font-bold text-sm sm:text-base duration-100 pl-4">
                  HTML
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3">
              <div aria-label="CSS"
                className="flex items-center border border-black bg-amber-400 hover:bg-slate-200 text-black shadow-[3px_3px_0px_0px_#1a202c] rounded p-2.5 duration-500 focus:ring-1 focus:ring-slate-600 relative"
              >
                <Image src={iconCss} className="w-8" 
                  alt="Frontend Engineer" width={150} height={150} />
                <span className="font-bold text-sm sm:text-base duration-100 pl-4">
                  CSS
                </span>
              </div>
            </div>

            <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3">
              <div aria-label="UX/ UI"
                className="flex items-center border border-black bg-red-300 hover:bg-slate-200 text-black shadow-[3px_3px_0px_0px_#1a202c] rounded p-2.5 duration-500 focus:ring-1 focus:ring-slate-600 relative"
              >
                <Image src={iconUiux} className="w-8" 
                  alt="Frontend Engineer" width={150} height={150} />
                <span className="font-bold text-sm sm:text-base duration-100 pl-4">
                  UX/ UI
                </span>
              </div>
            </div>

            <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3">
              <div aria-label="ReactJS"
                className="flex items-center border border-black bg-indigo-300 hover:bg-slate-200 text-black shadow-[3px_3px_0px_0px_#1a202c] rounded p-2.5 duration-500 focus:ring-1 focus:ring-slate-600 relative"
              >
                <Image src={iconReact} className="w-8" 
                  alt="Frontend Engineer" width={150} height={150} />
                <span className="font-bold text-sm sm:text-base duration-100 pl-4">
                ReactJS
                </span>
              </div>
            </div>

            <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3">
              <div aria-label="Java Script"
                className="flex items-center border border-black bg-lime-400 hover:bg-slate-200 text-black shadow-[3px_3px_0px_0px_#1a202c] rounded p-2.5 duration-500 focus:ring-1 focus:ring-slate-600 relative"
              >
                <Image src={iconJs} className="w-8" 
                  alt="Frontend Engineer" width={150} height={150} />
                <span className="font-bold text-sm sm:text-base duration-100 pl-4">
                Java Script
                </span>
              </div>
            </div>

            <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3">
              <div aria-label="JSON"
                className="flex items-center border border-black bg-violet-400 hover:bg-slate-200 text-black shadow-[3px_3px_0px_0px_#1a202c] rounded p-2.5 duration-500 focus:ring-1 focus:ring-slate-600 relative"
              >
                <Image src={iconJson} className="w-8" 
                  alt="Frontend Engineer" width={150} height={150} />
                <span className="font-bold text-sm sm:text-base duration-100 pl-4">
                JSON
                </span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 text-right">
          <picture className="flex justify-center">
            <ThemedImage
              imgLight='/images/headshot-dark.png'
              imgDark='/images/headshot-light.png'
              alt="My image"
              width={420}
              height={420}
            />
          </picture>
        </div>
      </div>
		</motion.section>
  )
}

export default SkillSection
