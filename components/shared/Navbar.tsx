"use client" // this is a client component
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"
// import { useState } from "react"
import { Link } from "react-scroll/modules"
import Image from 'next/image';
import { useTheme } from "next-themes"
import { useRouter } from "next/router";
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import ContactUsModal from '../ContactUsModal';
import logoLight from '../../public/icons/logo-light.svg';
import logoDark from '../../public/icons/logo-dark.svg';
import ThemedBtn from '../reusable/ThemedBtn';

const Navbar = () => {
	const navData = [ "Home", "Services", "Skills", "Portfolio" ];

	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

  	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	function showContactUsModal() {
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
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="nav" className="container mx-auto px-28" >
		{/* Header */}
		<div className="z-10 xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
			{/* Header menu links and small screen hamburger menu */}
			<div className="flex justify-between items-center px-4 sm:px-0">
					<Link to="home">
						{theme === 'dark' ? (
							<Image src={logoDark} className="w-36 cursor-pointer duration-300 hover:translate-x-1"
								alt="Dark Logo" width={150} height={120} />
						) : (
							<Image src={logoLight} className="w-36 cursor-pointer duration-300 hover:translate-x-1"
								alt="Light Logo" width={150} height={120} />
						)}
					</Link>
				{/* Theme switcher small screen */}
				<div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Theme Switcher"
					className="block sm:hidden ml-0 bg-gray-50 dark:bg-gray-800 p-3 shadow-sm rounded-xl cursor-pointer" >
					{theme === 'dark' ? (
						<FiSun className="text-gray-200 hover:text-gray-500 text-xl" />
					) : (
						<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
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
				{ navData.map((data, i) => (
					<div key={`${data}-${i}}`} className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
						<Link to={data.toLocaleLowerCase()} aria-label={data}>
							{data}
						</Link>
					</div>
				))}
				<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
					<ThemedBtn 
						label="Contact Us"
						bgColor="bg-amber-400"
						hoverColor="hover:bg-amber-500"
						extraAttr="sm:hidden block text-left mt-2"
						onClick={showContactUsModal}
					/>
				</div>
			</div>

			{/* Header links large screen */}
			<div className="text-md font-inter hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
				{ navData.map((data, i) => (
					<div key={`${i}}`} className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light cursor-pointer sm:mx-4 mb-2 sm:py-2" 
						aria-label={data} >
						<Link to={data.toLocaleLowerCase()} >{data}</Link>
					</div>
					))
				}
			</div>

			{/* Header right section buttons */}
			<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
				<div className="hidden md:flex">
					<ThemedBtn 
						label="Contact Us"
						bgColor="bg-amber-400"
						hoverColor="hover:bg-amber-500"
						extraAttr=""
						onClick={showContactUsModal}
					/>
				</div>
				{/* Theme switcher large screen */}
				<div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Theme Switcher"
					className="ml-8 bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-500 p-3 shadow-sm rounded-xl cursor-pointer hover:bg-gray-200 duration-300">
					{theme === 'dark' ? (
						<FiSun className="text-gray-200 text-xl" />
						) : (
						<FiMoon className="text-ternary-dark dark:text-ternary-light dark:hover:text-primary-light text-xl" />
					)}
				</div>
			</div>
		</div>
		<div>
			<>
			{showModal ? (
				<ContactUsModal onClose={showContactUsModal} onRequest={showContactUsModal} />
			) : null}
			{showModal ? showContactUsModal : null}
			</>
		</div>
	</motion.nav>
  )
}

export default Navbar;