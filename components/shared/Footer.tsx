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

const footer = {
  intro: {
    title: "Tell Me About Your Project",
    details: "Share your project details, goals, and vision. Let's collaborate to shape a customized solution that aligns with your objectives and aspirations for success"
  },
  contacts: [
    {
      channel: "Email",
      details: "jainkarn.p@gmail.com",
      icon: iconEmail
    },
    {
      channel: "Phone",
      details: "(+61) 403260xxx",
      icon: iconPhone
    }
  ],
  social_medias: [

  ]
}

const Footer = () => {
  return (
    <footer className="pt-20 lg:px-10">
      <div className="items-center container">
        <div className="md:flex sm:justify-between container mx-auto" >
          {/* Intro - Left */}
          <div className="w-full md:w-1/2 text-left md:pr-5">
            <div className="">
              <h1 className="font-archivo font-bold text-3xl sm:text-left text-primary-light dark:text-ternary-dark" >
                {footer.intro.title}
              </h1>
              <p className="mt-4 text-base md:text-lg sm:text-left leading-normal text-primary-light dark:text-ternary-dark" >
                {footer.intro.details}
              </p>
            </div>

            {/* Contacts */}
            <div className="lg:flex flex-wrap lg:py-10 md:pt-5 md:pb-10">
              { footer.contacts.map((contact: any, i: number) => (
                <div className="lg:w-1/2 md:w-full md:mt-2" key={i}>
                  <div className="flex items-center text-black duration-500 focus:ring-1 focus:ring-slate-600 relative lg:pr-2">
                    <Image src={contact.icon} className="w-10 duration-300 hover:-translate-y-1" 
                      alt={contact.channel} width={150} height={150} />
                    <div className="flex flex-col justify-center">
                      <span className="sm:text-base text-white duration-100 pl-2">
                        {contact.channel}
                      </span>   
                      <a href={contact.details}>
                        <span className="sm:text-sm text-white duration-100 pl-2">
                          {contact.details}
                        </span>                    
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social medias */}
            <div className="flex items-center">
              <a href="http://www.linkedin.com/in/jainkarn-pitakkaittikool-a002a1116" rel="noreferrer" target="_blank">
                <AiOutlineLinkedin size={35} className="mr-4 hover:-translate-y-1 text-white transition-transform cursor-pointer"  title="LinkedIn"/>
              </a>
              <a href="https://github.com/JainRipper" rel="noreferrer" target="_blank">
                <AiOutlineGithub size={35} className="mr-4 hover:-translate-y-1 text-white transition-transform cursor-pointer" title="Github"/>
              </a>
              <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                <AiOutlineFacebook size={35} className="mr-4 hover:-translate-y-1 text-white transition-transform cursor-pointer" title="Facebook"/>
              </a>
              <a href="https://www.instagram.com/jainkarn.p/" rel="noreferrer" target="_blank">
                <AiOutlineInstagram size={35} className="hover:-translate-y-1 text-white transition-transform cursor-pointer"  title="Instagram"/>            
              </a>
            </div>

          </div>

          {/* Form - Right*/}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
        
        {/* Copy Right */}
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
      </div>
    </footer>
  )
}

export default Footer
