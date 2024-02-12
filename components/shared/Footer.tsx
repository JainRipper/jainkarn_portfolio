import React from "react";
import { motion } from 'framer-motion';
import Image from "next/image"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineInstagram
} from "react-icons/ai"
import ContactForm from '../reusable/ContactForm';
import iconEmail from '../../public/icons/footer-email.svg'
import iconPhone from '../../public/icons/footer-phone.svg';
import logoDark from '../../public/icons/logo-dark.svg';

const Footer = () => {
  return (
    <footer className="mx-auto pt-20 px-28 items-center container ">
			<div className="sm:flex sm:justify-between container mx-auto" >
        {/* Intro */}
        <div className="w-full md:w-1/2 text-left">
          <div className="">
            <h1 className="font-archivo font-bold text-3xl sm:text-left text-primary-light dark:text-ternary-dark" >
              Tell Me About Your Project
            </h1>
            <p className="mt-4 text-base md:text-lg sm:text-left leading-normal text-primary-light dark:text-ternary-dark" >
              Share your project details, goals, and vision. Let s collaborate to shape a customized solution that aligns with your objectives and aspirations for success
            </p>
          </div>

          {/* Skills set */}
          <div className="md:flex flex-wrap py-10">
            <div className="sm:w-full md:w-1/2">
              <div className="flex items-center text-black duration-500 focus:ring-1 focus:ring-slate-600 relative">
                <Image src={iconEmail} className="w-10" 
                  alt="Frontend Engineer" width={150} height={150} />
                <div className="flex flex-col justify-center">
                  <span className="text-sm sm:text-base text-white duration-100 pl-4">
                    Email
                  </span>   
                  <a href="/files/Jainkarn-Resume.pdf">
                    <span className="text-sm sm:text-base text-white duration-100 pl-4">
                      jainkarn.p@gmail.com
                    </span>                    
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:w-full md:w-1/2">
              <div className="flex items-center text-black duration-500 focus:ring-1 focus:ring-slate-600 relative">
                <Image src={iconPhone} className="w-10" 
                  alt="Frontend Engineer" width={150} height={150} />
                <div className="flex flex-col justify-center">
                  <span className="text-sm sm:text-base text-white duration-100 pl-4">
                    Phone
                  </span>
                  <span className="text-sm sm:text-base text-white duration-100 pl-4">
                    (+61) 403260xxx
                  </span> 
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <a href="https://github.com/" rel="noreferrer" target="_blank">
              <AiOutlineLinkedin size={35} className="mr-4 hover:-translate-y-1 text-white transition-transform cursor-pointer"  title="mammals"/>
            </a>
            <a href="https://github.com/" rel="noreferrer" target="_blank">
              <AiOutlineGithub size={35} className="mr-4 hover:-translate-y-1 text-white transition-transform cursor-pointer" title="mammals"/>
            </a>
            <a href="https://github.com/" rel="noreferrer" target="_blank">
              <AiOutlineFacebook size={35} className="mr-4 hover:-translate-y-1 text-white transition-transform cursor-pointer" title="Facebook"/>
            </a>
            <a href="https://github.com/" rel="noreferrer" target="_blank">
              <AiOutlineInstagram size={35} className="hover:-translate-y-1 text-white transition-transform cursor-pointer"  title="mammals"/>            
            </a>
          </div>

        </div>

        {/* form */}
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>

      <hr className="w-full h-[0.05rem] mx-auto my-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  pb-6 px-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <Image src={logoDark} className="cursor-pointer duration-300 hover:translate-x-1 w-28"
								alt="Dark Logo" width={150} height={120} />
        </div>
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-100 dark:text-neutral-300">
          <a href="/" className="hover:underline">
          © 2024 Jainkarn - Website Portofolio
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
