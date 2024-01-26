import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { MdArrowOutward } from "react-icons/md";
import iconFrontEnd from '../public/icons/services-frontend_engineer.svg';

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

const ServicesSection = () => {
  return (
    <motion.section id="services" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
		  transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
		  className="py-20 items-center container mx-auto px-28 bg-white" 
    >
      <div className="pb-16 sm:flex sm:justify-between sm:items-center container mx-auto bg-white" >
        {/* Intro */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="font-archivo font-bold text-2xl md:w-3/4 lg:text-5xl sm:text-left text-ternary-dark dark:text-primary-light" >
              What I Can Do For Your Needs
          </h1>
          <p className="mt-4 text-base md:text-lg sm:text-left md:w-3/4 leading-normal text-gray-500 dark:text-gray-200" >
            Discover Tailored Solutions to Fulfill Your Unique Needs – Your Project, My Expertise.
          </p>
        </div>
        {/* Achievement */}
        <div className="w-full md:w-1/2 text-right">
          <div className="m-0 sm:ml-4 sm:flex p-5 sm:p-0 justify-center items-center float-right">
            <div className="sm:flex-col ml-10">
              <h1 className="font-archivo font-bold text-2xl md:w-3/4 lg:text-5xl sm:text-left text-ternary-dark dark:text-primary-light" >
                230+
              </h1>
              <p className="font-general-medium mt-4 text-base md:text-lg sm:text-left leading-normal text-gray-500 dark:text-gray-200" >
              Project Complete
              </p>              
            </div>
            <div className="sm:flex-col ml-10">
              <h1 className="font-archivo font-bold text-2xl md:w-3/4 lg:text-5xl sm:text-left text-ternary-dark dark:text-primary-light" >
                4+
              </h1>
              <p className="font-general-medium mt-4 text-base md:text-lg sm:text-left leading-normal text-gray-500 dark:text-gray-200" >
              Work Contract
              </p>              
            </div>
            <div className="sm:flex-col ml-10">
              <h1 className="font-archivo font-bold text-2xl md:w-3/4 lg:text-5xl sm:text-left text-ternary-dark dark:text-primary-light" >
                20+
              </h1>
              <p className="font-general-medium mt-4 text-base md:text-lg sm:text-left leading-normal text-gray-500 dark:text-gray-200" >
                Years Experience
              </p>              
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Frontend Engineer */}
        <div className="p-4 max-w-sm duration-300 hover:-translate-y-1">
          <div className="flex h-full dark:bg-gray-800 p-6 flex-col text-base font-inter border border-black bg-custom-green hover:bg-lime-600 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded-lg duration-500 focus:ring-1 focus:ring-slate-600">
            <div className="flex items-center pb-16">
              <Image src={iconFrontEnd} className="w-14"
								alt="Light Logo" width={150} height={150} />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="text-2xl font-bold pb-4 dark:text-gray-300">
                Frontend Engineer
              </p>
              <p className="text-base pb-5 dark:text-gray-300">
                Enhance user experiences through my expertise in frontend engineering. Elevate your web presence with innovation and precision.
              </p>
              <a href=""
                className="font-inter text-base w-1/2 flex justify-between items-center border border-black bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600"
                aria-label="Download Resume" >
                <span className="text-sm sm:text-lg duration-100">
                  Contact Us
                </span>
                <MdArrowOutward className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></MdArrowOutward>
              </a>
            </div>
          </div>
        </div>

        {/* Web Developer */}
        <div className="p-4 max-w-sm duration-300 hover:-translate-y-1">
          <div className="flex h-full dark:bg-gray-800 p-6 flex-col text-base font-inter border border-black bg-custom-blue hover:bg-cyan-600 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded-lg duration-500 focus:ring-1 focus:ring-slate-600">
            <div className="flex items-center pb-16">
              <Image src={iconFrontEnd} className="w-14"
								alt="Light Logo" width={150} height={150} />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="text-2xl font-bold pb-4 dark:text-gray-300">
                Web Developer
              </p>
              <p className="text-base pb-5 dark:text-gray-300">
                Rafting responsive, dynamic websites with precision. Elevate your digital presence through my expertise in innovative and scalable web development.
              </p>
              <a href=""
                className="font-inter text-base w-1/2 flex justify-between items-center border border-black bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600"
                aria-label="Download Resume" >
                <span className="text-sm sm:text-lg duration-100">
                  Contact Us
                </span>
                <MdArrowOutward className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></MdArrowOutward>
              </a>
            </div>
          </div>
        </div>
        
        {/* Software Engineer */}
        <div className="p-4 max-w-sm duration-300 hover:-translate-y-1">
          <div className="flex h-full dark:bg-gray-800 p-6 flex-col text-base font-inter border border-black bg-custom-red hover:bg-red-400 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded-lg duration-500 focus:ring-1 focus:ring-slate-600">
            <div className="flex items-center pb-16">
              <Image src={iconFrontEnd} className="w-14"
								alt="Light Logo" width={150} height={150} />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="text-2xl font-bold pb-4 dark:text-gray-300">
                Software Engineer
              </p>
              <p className="text-base pb-5 dark:text-gray-300">
                Engineer seamless software solutions. Transforming concepts into highperformance applications with precision and innovation.
              </p>
              <a href=""
                className="font-inter text-base w-1/2 flex justify-between items-center border border-black bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600"
                aria-label="Download Resume" >
                <span className="text-sm sm:text-lg duration-100">
                  Contact Us
                </span>
                <MdArrowOutward className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></MdArrowOutward>
              </a>
            </div>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default ServicesSection
