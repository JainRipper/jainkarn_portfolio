"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { motion } from 'framer-motion';
import ThemedImage from './reusable/ThemedImage';
import ThemedCardIcon from './reusable/ThemedCardIcon';
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

const data = {
  intro: {
    heading: "My skills can help you",
    details: "Unlocking possibilities My skills tailored to elevate and meet your unique project requirements"
  },
  skills: [
    {
      skill: "HTML",
      icon: "/icons/skills-html.svg",
      color: "bg-teal-300"
    },
    {
      skill: "CSS",
      icon: "/icons/skills-css.svg",
      color: "bg-amber-400"
    },
    {
      skill: "UX/ UI",
      icon: "/icons/skills-ui_uX.svg",
      color: "bg-red-300"
    },
    {
      skill: "ReactJS",
      icon: "/icons/skills-react_JS.svg",
      color: "bg-indigo-300"
    },
    {
      skill: "Java Script",
      icon: "/icons/skills-java_script.svg",
      color: "bg-lime-400"
    },
    {
      skill: "JSON",
      icon: "/icons/skills-json.svg",
      color: "bg-violet-400"
    }
  ]
}

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
              { data.intro.heading }
            </h1>
            <p className="mt-4 text-base md:text-lg sm:text-left leading-normal text-gray-500 dark:text-gray-200" >
              { data.intro.details }
            </p>
          </div>

          {/* Skills set */}
          <div className="md:flex flex-wrap">
            { data.skills.map((skill: any, i: number) => (
              <ThemedCardIcon 
                key={i}
                skill={skill.skill}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
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
