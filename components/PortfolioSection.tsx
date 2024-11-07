import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { MdArrowOutward } from "react-icons/md";
// import Link from "next/link"
import SlideUp from "./SlideUp"
import { Link } from "react-scroll/modules"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import project from '../public/images/project.svg';
import projectFull from '../public/images/project-full.svg';
import logoDark from '../public/icons/logo-dark.svg';
import img10 from '../public/img_10.jpg';
import ThemedCarousel from './reusable/ThemedCarousel';
import ThemedCardProject from './reusable/ThemedCardProject';
import useWindowDimensions from './reusable/useWindowDimensions';

const testimonials = {
  intro: {
    title: "Testimonial",
    details: "Front-end and Web development satisfy my need for creativity. This channel enables me to easily put my ideas into digital form and"
  },
  carousal: [
    {
      image: '/images/testimonial/nick_elith.jpeg',
      name: 'Nick Elith',
      title:'Director of techNick Consulting Pty Ltd',
      quote:`I have no hesitation in recommending him for any engagement that requires a person of enthusiasm, honesty, willingness to work hard and IT savvy`
    },
    {
      image:'https://picsum.photos/id/10/2500/1667',
      name: 'Christian Smith',
      title:'Manager Meta',
      quote:'Kudos to Jainkarn for an outstanding job! Our site\'s aesthetics and user experience surpassed expectations.' 
    },
     {
      image:'https://picsum.photos/id/1000/2500/2500',
      name: 'Cameron Rabbit',
      title:'Thankful Thoughts',
      quote:'Everyone’s on the same page. Many of our people are not very organized naturally, so web developer is a godsend!' 
    } ,
     {
      image:'https://picsum.photos/id/1003/1181/1772',
      name: 'Darrell Steward',
      title:'Lorem Ipsum',
      quote:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    },
    {
     image:'https://picsum.photos/id/1000/2500/2500',
     name: 'Jane Cooper',
     title:'Thankful Thoughts',
     quote:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
    },
    {
      image:'https://picsum.photos/id/1/2500/2500',
      name: 'Molly Thunder',
      title:'Kator Family Photos',
      quote:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    },
    {
      image:'https://picsum.photos/id/10/2500/1667',
      name: 'Harriet Gobble',
      title:'PlatoIO',
      quote:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' 
    }
  ]
}

const portfolio = {
  intro: {
    title: "Featured Projects",
    details: "Showcasing outstanding projects: Explore the diversity and excellence in my featured portfolio."
  },
  projects: [
    {
      skill: "UX/ UI Web development",
      title: "Website Design For Fashion Landing Page",
      details: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      position: "right",
      image: "bg-[url('/images/project01.svg')]",
      link: ""
    },
    {
      skill: "UX/ UI Web development",
      title: "Website Design For Fashion Landing Page",
      details: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      position: "left",
      image: "bg-[url('/images/project02.svg')]",
      link: ""
    },
    {
      skill: "UX/ UI Web development",
      title: "Website Design For Fashion Landing Page",
      details: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      position: "right",
      image: "bg-[url('/images/project03.svg')]",
      link: ""
    }
  ]
}

const PortfolioSection = () => {
  // const { height, width } = useWindowDimensions();
  const renderChildrenView = (item: any ,index: number) => {    
    // Note: width: 600px -> conputedLeft: 600px, 470px -> 470px
    return (
      <div className='contentBox lg:flex xl:w-[600px] xl:h-[200px] lg:w-[470px] lg:h-[250px] md:h-[390px] items-center bg-white w-full h-full box-border p-4 font-inter text-base justify-between border border-black hover:bg-slate-200 text-black shadow-[0px_4px_3px_0px_#00000024] rounded-xl py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600' key={index}>
        <div className='lg:w-1/3 mr-1 lg:mb-0 sm:mb-2 flex-none text-center'>
          <div 
            style={{backgroundImage:`url(${item.image})`}} 
            className={`imageStyle bg-center bg-cover ml-1 h-44 w-full rounded-xl`}/> 
        </div>
        <div className='lg:w-2/3 md:px-3 md:[&>*]:pt-[5px] fontBox flex flex-col pl-3 justify-center whitespace-normal'>
          <p className='titleStyle text-xl leading-5 font-bold whitespace-pre-line tracking-wider'>{item.name}</p>
          <p className='text-l '>{item.title}</p>
          <div className="text-justify">
            {item.quote}
          </div>
        </div>
     </div>
    )
  }

  return (
    <motion.section id="portfolio" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
		  transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
		  className="pt-15 pb-28">
      <div className="items-center container">
        {/* Intro */}
        <div className="py-16 sm:flex-col text-center sm:justify-center mx-auto" >
          <h1 className="font-archivo font-bold text-2xl lg:text-5xl text-ternary-dark dark:text-primary-light" >
            {portfolio.intro.title}
          </h1>
          <p className="mt-4  text-base md:text-lg leading-normal text-gray-500 dark:text-gray-200" >
            {portfolio.intro.details}
          </p>        
        </div>
        {/* Projects */}
        <div className="flex-col flex justify-center items-center pb-20">
          { portfolio.projects.map((project: any, i: number) => (
            <ThemedCardProject 
              key={`project-${i}`}
              skill={project.skills}
              title={project.title}
              details={project.details}
              position={project.position}
              image={project.image}
              link={project.link}
            />
          ))}
          <div className="text-base font-inter border border-black bg-amber-400 hover:bg-amber-500 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 duration-500 focus:ring-1 focus:ring-slate-600 cursor-pointer">
            <Link to="services" aria-label="Services" className="w-6 px-6 py-5">
              See More Project
            </Link>
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex-col flex justify-center items-center pb-16 pt-20">
          <div className="sm:flex-col text-center sm:justify-center sm:items-center container mx-auto mb-14" >
            <h1 className="font-archivo font-bold text-2xl lg:text-5xl text-ternary-dark dark:text-primary-light" >
              {testimonials.intro.title}
            </h1>
            <p className="mt-4 text-base md:text-lg leading-normal text-gray-500 dark:text-gray-200" >
              {testimonials.intro.details}
            </p>        
          </div>
          
          <React.Fragment>
          <ThemedCarousel 
              dataArray={testimonials.carousal}
              // autoplay={true}
              delay={10}
              carouselPostWidth={'600px'} 
              carouselPostHeight={'200px'}
              // carouselPostMargin={10}
              >
              {renderChildrenView}
            </ThemedCarousel>
          {/* <>
            width: {width}, Height: {height}
          </> */}
          </React.Fragment>
        </div>
      </div>

    </motion.section>
  )
}

export default PortfolioSection
