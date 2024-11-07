import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import ThemedCardLinkIcon from './reusable/ThemedCardLinkIcon';

const ServicesSection = () => {
  const data = {
    intro: {
      heading: "What I Can Do For Your Needs",
      details: "Discover Tailored Solutions to Fulfill Your Unique Needs – Your Project, My Expertise."
    },
    achievement: [
      {
        title: "Project Complete",
        time: "10+"
      }, 
      {
        title: "Work Contract",
        time: "2+"
      }, 
      {
        title: "Years Experience",
        time: "5+"
      }
    ],
    services: [
      {
        title: "Frontend Engineer",
        icon: "/icons/services-frontend_engineer.svg",
        details: "Enhance user experiences through my expertise in frontend engineering. Elevate your web presence with innovation and precision.",
        color: "bg-custom-green hover:bg-lime-600",
        link: ""
      }, 
      {
        title: "Web Developer",
        icon: "/icons/services-web_developer.svg",
        details: "Rafting responsive, dynamic websites with precision. Elevate your digital presence through my expertise in innovative and scalable web development.",
        color: "bg-custom-blue hover:bg-cyan-600",
        link: ""
      }, 
      {
        title: "Software Engineer",
        icon: "/icons/services-software_engineer.svg",
        details: "Engineer seamless software solutions. Transforming concepts into highperformance applications with precision and innovation.",
        color: "bg-custom-red hover:bg-red-400",
        link: ""
      }
    ]
  }

  return (
    <motion.section id="services" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
		  transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
		  className="py-20 px-28 bg-white">
      <div className="items-center container">
        {/* Intro */}
        <div className="pb-16 sm:flex sm:justify-between sm:items-center container mx-auto" >
          <div className="w-full md:w-1/2 text-left">
            <h1 className="font-archivo font-bold text-2xl md:w-3/4 lg:text-5xl sm:text-left text-ternary-dark dark:text-primary-light" >
              {data.intro.heading}
            </h1>
            <p className="mt-4 text-base md:text-lg sm:text-left md:w-3/4 leading-normal text-gray-500 dark:text-gray-200" >
              {data.intro.details}
            </p>
          </div>
          <div className="w-full md:w-1/2 text-right">
            <div className="m-0 sm:ml-4 sm:flex p-5 sm:p-0 justify-center items-center float-right">
              { data.achievement.map((item: any, i: number) => (
                <div className="sm:flex-col ml-10" key={i}>
                  <h1 className="font-archivo font-bold text-2xl md:w-3/4 lg:text-5xl sm:text-left text-ternary-dark dark:text-primary-light" >
                    {item.time}
                  </h1>
                  <p className="font-general-medium mt-4 text-base md:text-lg sm:text-left leading-normal text-gray-500 dark:text-gray-200" >
                    {item.title}
                  </p>              
                </div>              
                ))}
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center">
          { data.services.map((service: any, i: number) => (
            <ThemedCardLinkIcon key={`${service.icon}_${i}`}
              service={service.title}
              details={service.details}
              icon={service.icon}
              color={service.color}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ServicesSection
