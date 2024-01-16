"use client" // this is a client component
// import React from "react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import Image from 'next/image';
import { useTheme } from "next-themes"
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import HireMeModal from '../HireMeModal';
import logoLight from '../../public/img/logo-light.svg';
import logoDark from '../../public/img/logo-dark.svg';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Services",
    page: "services",
  },
  {
    label: "Skills",
    page: "skills",
  },
  {
    label: "Portfolio",
    page: "portfolio",
  },
]

const Navbar = () => {
//   const { systemTheme, theme, setTheme } = useTheme()
//   const currentTheme = theme === "system" ? systemTheme : theme
  // const pathname = usePathname()
  // const [navbar, setNavbar] = useState(false)

	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();
	console.log(activeTheme);

  function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

  return (
    // <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
    //   <div className="justify-between md:items-center md:flex">
    //     <div>
    //       <div className="flex items-center justify-between py-3 md:py-5 md:block">
    //         <Link to="home">
    //           <div className="container flex items-center space-x-2">
    //             <h2 className="text-2xl font-bold">Jainkarn Pitakkaittikool</h2>
    //           </div>
    //         </Link>
    //         <div className="md:hidden">
    //           <button
    //             className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
    //             onClick={() => setNavbar(!navbar)}
    //           >
    //             {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     <div>
    //       <div
    //         className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
    //           navbar ? "block" : "hidden"
    //         }`}
    //       >
    //         <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
    //           {NAV_ITEMS.map((item, idx) => {
    //             return (
    //               <Link
    //                 key={idx}
    //                 to={item.page}
    //                 className={
    //                   "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
    //                 }
    //                 activeClass="active"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-100}
    //                 duration={500}
    //                 onClick={() => setNavbar(!navbar)}
    //               >
    //                 {item.label}
    //               </Link>
    //             )
    //           })}
    //           {currentTheme === "dark" ? (
    //             <button
    //               onClick={() => setTheme("light")}
    //               className="bg-slate-100 p-2 rounded-xl"
    //             >
    //               <FiSun size={25} color="black" />
    //             </button>
    //           ) : (
    //             <button
    //               onClick={() => setTheme("dark")}
    //               className="bg-slate-100 p-2 rounded-xl"
    //             >
    //               <FiMoon size={25} />
    //             </button>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="nav" className="sm:container sm:mx-auto" >
		{/* Header */}
		<div className="z-10 xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6 md:px-5 2xl:px-20">
			{/* Header menu links and small screen hamburger menu */}
			<div className="flex justify-between items-center px-4 sm:px-0">
				<div>
					<Link to="home">
						{activeTheme === 'dark' ? (
							<Image src={logoDark} className="w-36 cursor-pointer"
								alt="Dark Logo" width={150} height={120} />
						) : (
							<Image src={logoLight} className="w-36 cursor-pointer"
								alt="Light Logo" width={150} height={120} />
						)}
					</Link>
				</div>
				{/* Theme switcher small screen */}
				<div onClick={() => setTheme(activeTheme)} aria-label="Theme Switcher"
					className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer" >
					{activeTheme === 'dark' ? (
						<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
					) : (
						<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
					)}
				</div>
				{/* Small screen hamburger menu */}
				<div className="sm:hidden">
					<button onClick={toggleMenu} type="button" className="focus:outline-none" aria-label="Hamburger Menu" >
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light" >
							{showMenu ? (
								<FiX className="text-3xl" />
							) : (
								<FiMenu className="text-3xl" />
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Header links small screen */}
			<div className={showMenu ? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none' : 'hidden' } >
				<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
					<Link to="home" aria-label="Home">
						Home
					</Link>
				</div>
				<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
					<Link to="services" aria-label="Services">
						Services
					</Link>
				</div>
				<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
					<Link to="skills" aria-label="Skills">
						Skills
					</Link>
				</div>
				<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
					<Link to="portfolio" aria-label="Portfolio">
						Portfolio
					</Link>
				</div>
				<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
					<button onClick={showHireMeModal} aria-label="Hire Me Button"
						className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24" >
						Hire Me
					</button>
				</div>
			</div>

			{/* Header links large screen */}
			<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
				<div className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2" 
					aria-label="Home" >
					<Link to="home">Home</Link>
				</div>
				<div className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2" 
					aria-label="Services" >
					<Link to="services">Services</Link>
				</div>
				<div className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
					aria-label="Skills" >
					<Link to="skills">Skills</Link>
				</div>
				<div className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
					aria-label="Portfolio" >
					<Link to="portfolio">Portfolio</Link>
				</div>
			</div>

			{/* Header right section buttons */}
			<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
				<div className="hidden md:flex">
					<button onClick={showHireMeModal}
						className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
						aria-label="Hire Me Button" >
						Hire Me
					</button>
				</div>
				{/* Theme switcher large screen */}
				<div onClick={() => setTheme(activeTheme)} aria-label="Theme Switcher"
					className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer" >
					{activeTheme === 'dark' ? (
						<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
					) : (
						<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
					)}
				</div>
			</div>
		</div>
		<div>
			{showModal ? (
				<HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
			) : null}
			{showModal ? showHireMeModal : null}
		</div>
	</motion.nav>
  )
}

export default Navbar;