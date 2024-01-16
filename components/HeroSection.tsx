"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';
import useThemeSwitcher from '../hooks/useThemeSwitcher';
import logoLight from '../public/img/logo-light.svg';
import logoDark from '../public/img/logo-dark.svg';
import { useTheme } from "next-themes";

const HeroSection = () => {
//   const { systemTheme, theme, setTheme } = useTheme()
const [ activeTheme ] = useThemeSwitcher();
  console.log(activeTheme);
//   const { systemTheme, theme, setTheme } = useTheme()
//   const currentTheme = theme === "system" ? systemTheme : theme

  return (
    // <section id="home">
    //   <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
    //     <div className="md:mt-2 md:w-1/2">
    //       <Image src="/headshot.png" alt="" width={325} height={325} />
    //     </div>
    //     <div className="md:mt-2 md:w-3/5">
    //       <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Jainkarn!</h1>
    //       <p className="text-lg mt-4 mb-6 md:text-2xl">
    //         I&#39;m a{" "}
    //         <span className="font-semibold text-teal-600">
    //           Software Engineer{" "}
    //         </span>
    //         based in Melbourne, AU. Working towards creating software that makes life easier and more meaningful.
    //       </p>
    //       <Link to="portfolio" className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
    //         activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >
    //         Portfolio
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="flex flex-row items-center text-center justify-center ">
    //     <Link to="about" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >
    //       <HiArrowDown size={35} className="animate-bounce" />
    //     </Link>
    //   </div>
    // </section>
    <motion.section id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2" >
			<div className="w-full md:w-1/3 text-left">
				<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase" >
					Hi, Iam Stoman
				</motion.h1>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200" >
					A Full-Stack Developer & Design Enthusiast
				</motion.p>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block" >
					<a download="Stoman-Resume.pdf" href="/files/Stoman-Resume.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume" >
						<FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div initial={{ opacity: 0, y: -180 }} animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0" >
				{/* <img 
					// layout="responsive" 
					src={
						activeTheme === 'dark'
							? '/images/developer.svg'
							: '/images/developer-dark.svg'
					}
					alt="Developer"
				/> */}
				{activeTheme === 'dark' ? (
					<Image src={logoDark} className="w-36 cursor-pointer"
						alt="Dark Logo" width={150} height={120} />
				) : (
					<Image src={logoLight} className="w-36 cursor-pointer"
						alt="Light Logo" width={150} height={120} />
				)}
			</motion.div>
		</motion.section>
  )
}

export default HeroSection
