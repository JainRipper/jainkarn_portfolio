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

const portfolio = [
  {
    name: "Thankful Thoughts",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/platoio.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "Kator Family Photos",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
]

let imageArray = [
  {
    image:'https://picsum.photos/id/1/2500/2500',
    name: 'Barry Slaughterhouse',
    title:'CEO Bersekar inc',
    quote:'Working with JainKarn was a game-changer! Our website now stands out with seamless design and functionality. Impressive work!'
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

const PortfolioSection = () => {
  const renderChildrenView = (item: any ,index: number) => {
    let strArr = item.quote.match(/.{1,45}/g);
    return (
      <div className='contentBox flex items-center bg-white w-full h-full box-border p-4 font-inter text-base justify-between border border-black hover:bg-slate-200 text-black shadow-[0px_4px_3px_0px_#00000024]  rounded-xl py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600' key={index}>
        <div className='w-1/3 mr-1 flex-none text-center'>
          <div 
            style={{backgroundImage:`url(${item.image})`}} 
            className={`imageStyle bg-center bg-cover ml-1 h-44 w-full rounded-xl`}/> 
        </div>        
        <div className='fontBox w-2/3 flex flex-col pl-3 justify-center'>
          <p className='titleStyle text-xl leading-5 font-bold whitespace-pre-line tracking-wider'>{item.name}</p>
          <p className='text-xl '>{item.title}</p>
          <div className="text-justify">
            {strArr.map((str: any) => {
              return <div>{str}</div>
            })}
          </div>
          {/* <span>{item.quote}</span> */}
        </div>
     </div>
    )
  }

  return (
    <motion.section id="portfolio" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
		  transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
		  className="py-20 items-center container mx-auto px-28" 
    >
      <div className="py-16 sm:flex-col text-center sm:justify-center sm:items-center container mx-auto" >
        {/* Intro */}
        <h1 className="font-archivo font-bold text-2xl lg:text-5xl text-ternary-dark dark:text-primary-light" >
          Featured Projects
        </h1>
        <p className="mt-4  text-base md:text-lg leading-normal text-gray-500 dark:text-gray-200" >
          Showcasing outstanding projects: Explore the diversity and excellence in my featured portfolio.
        </p>        
      </div>

      <div className="flex-col flex justify-center items-center">
        <div className="max-w-sm w-full lg:max-w-7xl lg:flex mb-12">
          <div className="h-96 lg:w-1/2 flex-none bg-cover border-r-0 rounded-l-lg text-center overflow-hidden bg-[url('/images/project.svg')]"  
          title="Woman holding a mug">
          </div>
          <div className="border-r border-b border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-r-lg p-4 flex flex-col justify-center leading-normal">
            <div className="mb-8 w-3/4">
              <p className="text-sm flex items-center text-red-600 pb-5">
                UX/ UI Web development
              </p>
              <div className="text-gray-900 font-bold text-3xl mb-2">
              Website Design For Fashion Landing Page
              </div>
              <p className="text-gray-700 text-base">
                I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
              </p>
            </div>
            <a href=""
                className="font-inter text-base w-[28%] flex justify-between items-center border border-black bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600"
                aria-label="Download Resume" >
                <span className="text-sm sm:text-lg duration-100">
                  View Project
                </span>
                <MdArrowOutward className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></MdArrowOutward>
              </a>
          </div>
        </div>

        <div className="max-w-sm w-full lg:max-w-7xl lg:flex mb-12">
          <div className="border-l border-b border-gray-400 lg:border-r-0 lg:border-t lg:border-gray-400 bg-white rounded-l-lg p-4 pl-10 flex flex-col justify-center leading-normal">
            <div className="mb-8 w-3/4">
              <p className="text-sm flex items-center text-red-600 pb-5">
                UX/ UI Web development
              </p>
              <div className="text-gray-900 font-bold text-3xl mb-2">
              Website Design For Fashion Landing Page
              </div>
              <p className="text-gray-700 text-base">
                I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
              </p>
            </div>
            <a href=""
                className="font-inter text-base w-[28%] flex justify-between items-center border border-black bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600"
                aria-label="Download Resume" >
                <span className="text-sm sm:text-lg duration-100">
                  View Project
                </span>
                <MdArrowOutward className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></MdArrowOutward>
              </a>
          </div>
          <div className="h-96 lg:w-1/2 flex-none bg-cover border-l-0 rounded-r-lg text-center overflow-hidden bg-[url('/images/project.svg')]"  
          title="Woman holding a mug">
          </div>
        </div>

        <div className="max-w-sm w-full lg:max-w-7xl lg:flex mb-12">
          <div className="h-96 lg:w-1/2 flex-none bg-cover border-r-0 rounded-l-lg text-center overflow-hidden bg-[url('/images/project.svg')]"  
          title="Woman holding a mug">
          </div>
          <div className="border-r border-b border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-r-lg p-4 flex flex-col justify-center leading-normal">
            <div className="mb-8 w-3/4">
              <p className="text-sm flex items-center text-red-600 pb-5">
                UX/ UI Web development
              </p>
              <div className="text-gray-900 font-bold text-3xl mb-2">
              Website Design For Fashion Landing Page
              </div>
              <p className="text-gray-700 text-base">
                I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
              </p>
            </div>
            <a href=""
                className="font-inter text-base w-[28%] flex justify-between items-center border border-black bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600"
                aria-label="Download Resume" >
                <span className="text-sm sm:text-lg duration-100">
                  View Project
                </span>
                <MdArrowOutward className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></MdArrowOutward>
              </a>
          </div>
        </div>

        <div className="text-base font-inter border border-black bg-amber-400 hover:bg-amber-500 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 duration-500 focus:ring-1 focus:ring-slate-600 cursor-pointer">
					<Link to="services" aria-label="Services" className="w-6 px-6 py-5">
            See More Project
					</Link>
				</div>

        {/* Testimonial */}
        <div className="pb-16 pt-52 sm:flex-col text-center sm:justify-center sm:items-center container mx-auto" >
          <h1 className="font-archivo font-bold text-2xl lg:text-5xl text-ternary-dark dark:text-primary-light" >
            Testimonial
          </h1>
          <p className="mt-4 text-base md:text-lg leading-normal text-gray-500 dark:text-gray-200" >
            Front-end and Web development satisfy my need for creativity. This channel enables me to easily put my ideas into digital form and
          </p>        
        </div>
        
        <React.Fragment>
         <ThemedCarousel 
            dataArray={imageArray}
            // autoplay={true}
            delay={10}
            carouselPostWidth={'600px'} 
            carouselPostHeight={'200px'}
            carouselPostMargin={10}>
            {renderChildrenView}
          </ThemedCarousel>
        </React.Fragment>

      </div>
      

    </motion.section>
  )
}

export default PortfolioSection
