"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';
import { Link } from "react-scroll/modules"
import ThemedImage from './reusable/ThemedImage';

const HeroSection = () => {
  const data = {
	intro: "Hi,  my name is JainKarn.",
	duties: "I'm a Frontend Engineer & Web Developer...",
	passion: "Front-end and Web development satisfy my need for creativity. This channel enables me to easily put my ideas into digital form and get results back really quick."
  }

  return (
    <motion.section id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
		transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
		className="mt-6 md:mt-20 px-28 pb-20" >
		<div className="container flex flex-col sm:justify-between items-center sm:flex-row ">
			<div className="w-full md:w-1/2 text-left">
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-medium mb-4 text-base md:text-lg sm:text-left leading-normal text-gray-500 dark:text-gray-200" >
					{data.intro}
				</motion.p>
				<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-archivo font-bold text-2xl md:w-3/4 lg:text-5xl sm:text-left text-ternary-dark dark:text-primary-light" >
					{data.duties}
				</motion.h1>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-medium mt-4 text-base md:text-lg sm:text-left leading-normal text-gray-500 dark:text-gray-200" >
					{data.passion}
				</motion.p>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex mt-12" >						
					<div className="text-base font-inter border border-black bg-amber-400 hover:bg-amber-500 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 duration-500 focus:ring-1 focus:ring-slate-600 cursor-pointer">
						<Link to="services" aria-label="Services" className="w-6 px-6 py-5">
							Let's Start
						</Link>
					</div>
					<a download="Jainkarn-Resume.pdf" href="/files/Jainkarn-Resume.pdf"
						className="ml-5 font-inter text-base flex justify-center items-center border border-black bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 px-4 duration-500 focus:ring-1 focus:ring-slate-600"
						aria-label="Download Resume" >
						<FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg duration-100">
							Resume
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div initial={{ opacity: 0, y: -180 }} animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-1/2 text-right mt-8 sm:mt-0" >				
				<picture className="float-right">
					<ThemedImage
						imgLight='/images/headshot-light.png'
						imgDark='/images/headshot-dark.png'
						alt="My image"
						width={420}
						height={420}
					/>
				</picture>
			</motion.div>

		</div>
	</motion.section>
  )
}

export default HeroSection
