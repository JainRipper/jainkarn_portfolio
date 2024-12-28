import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Link } from "react-scroll/modules"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import project from '../public/images/project.svg';
import projectFull from '../public/images/project-full.svg';
import logoDark from '../public/icons/logo-dark.svg';
import img10 from '../public/img_10.jpg';
import ThemedCarousel from './reusable/ThemedCarousel';
import ThemedCardProject from './reusable/ThemedCardProject';
import useWindowDimensions from './reusable/useWindowDimensions';
import { truncation } from './reusable/features';

const testimonials = {
  intro: {
    title: "Testimonial",
    details: "Front-end and Web development satisfy my need for creativity. This channel enables me to easily put my ideas into digital form and"
  },
  carousal: [
    {
      image: '/images/testimonials/nick_elith.jpg',
      name: 'Nick Elith',
      title:'Director of techNick Consulting Pty Ltd',
      quote:`I have always found Jainkarn ('JK') to be considerate, thoughtful and organised. ‘JK’ has assisted me with several significant community work projects as well as discussions regarding optimising IT solutions. He has excellent initiative, learns quickly and is a definite team player. I have no hesitation in recommending him for any engagement that requires a person of enthusiasm, honesty, willingness to work hard and IT savvy.`
    },
    {
      image:'/images/testimonials/stanislav_moskalev.jpg',
      name: 'Stanislav Moskalev',
      title:'Director of Steel Timber Concrete (STC) Engineering',
      quote:`We had a few challenges with the website, and Jainkarn (JK) really assisted as the professional consultant. He managed to explain in simple terms the functions of the front end and suggested a solution that achieved the outcome we wanted. We would definitely recommend JK—ask for his professional consult and just trust him and the process.`
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
      position: "left",
      image: "bg-[url('/images/projects/project08.svg')]",
      link: ""
    },
    {
      skill: "UX/ UI Web development",
      title: "Website Design For Resume Page",
      details: "I offer custom web design services to create a professional, interactive, and visually appealing Resume Page that showcases your skills, experience, and accomplishments in the best possible light. Whether you're a job seeker, freelancer, or professional looking to enhance your online presence, I can design and build a polished, user-friendly website that effectively represents your personal brand.",
      position: "right",
      image: "bg-[url('/images/projects/project07.svg')]",
      link: "https://www.jainkarn.site/"
    },
    {
      skill: "UX/ UI Web development",
      title: "Website Design For Fashion Landing Page",
      details: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      position: "left",
      image: "bg-[url('/images/projects/project06.svg')]",
      link: ""
    },
    {
      skill: "UX/ UI Web development",
      title: "Website Design For Fashion Landing Page",
      details: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      position: "right",
      image: "bg-[url('/images/projects/project05.svg')]",
      link: ""
    },
    {
      skill: "UX/ UI Web development",
      title: "Website Design For Fashion Landing Page",
      details: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      position: "left",
      image: "bg-[url('/images/projects/project04.svg')]",
      link: ""
    },
    {
      skill: "UX/ UI Web development",
      title: "Website Design For Fashion Landing Page",
      details: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      position: "right",
      image: "bg-[url('/images/projects/project03.svg')]",
      link: ""
    },
    {
      skill: "UX/ UI Web development",
      title: "Website Design For Fashion Landing Page",
      details: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      position: "left",
      image: "bg-[url('/images/projects/project02.svg')]",
      link: ""
    },
    {
      skill: "UX/ UI Web development",
      title: "Website Design For Fashion Landing Page",
      details: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      position: "right",
      image: "bg-[url('/images/projects/project01.svg')]",
      link: ""
    }
  ]
}

const PortfolioSection = () => {
  const [ showItems, setShowItems] = useState(3);
  const [ isLoading, setIsLoading] = useState(false);

  const handleShowMore = () => {
    setIsLoading(true);
    setTimeout(() => { 
      setIsLoading(false);
      setShowItems(showItems + 3);
    }, 1000);
  }

  const spinner = () => {
    return (
      <div className="lds-spinner scale-75"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
  }

  // const { height, width } = useWindowDimensions();
  const renderChildrenView = (item: any ,index: number) => {
    // Note: width: 600px -> conputedLeft: 600px, 470px -> 470px
    return (
      <div className='contentBox lg:flex xl:w-[600px] xl:h-[200px] lg:w-[470px] lg:h-[250px] md:h-[415px] items-center bg-white w-full h-full box-border p-4 font-inter text-base justify-between border border-black hover:bg-slate-200 text-black shadow-[0px_4px_3px_0px_#00000024] rounded-xl py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600' key={index}>
        <div className='lg:w-1/3 w-1/2 m-auto flex-none text-center'>
          <div 
            style={{backgroundImage:`url(${item.image})`}} 
            className={`imageStyle bg-center bg-cover ml-1 lg:h-44 h-36 w-full rounded-xl`}/> 
        </div>
        <div className='lg:w-2/3 md:px-3 md:[&>*]:pt-[5px] fontBox flex flex-col pl-3 justify-center whitespace-normal'>
          <p className='titleStyle text-xl leading-5 font-bold whitespace-pre-line tracking-wider'>{item.name}</p>
          <p className='testimonial-title text-md italic font-medium'>{item.title}</p>
          <div className="tooltip text-justify md:text-md" tooltip={item.quote.length > 180 ? item.quote : false } tooltip-position="buttom">
            {truncation(item.quote, 180)}            
          </div>
        </div>
     </div>
    )
  }

  return (
    <motion.section id="portfolio" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
		  transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
		  className="pt-15">
      <div className="items-center container">
        {/* Intro */}
        <div className="py-16 sm:flex-col text-center sm:justify-center mx-auto" >
          <h1 className="font-archivo font-bold text-4xl lg:text-5xl text-ternary-dark dark:text-primary-light" >
            {portfolio.intro.title}
          </h1>
          <p className="mt-4 text-lg leading-normal text-gray-500 dark:text-gray-200" >
            {portfolio.intro.details}
          </p>        
        </div>
        {/* Projects */}
        <div className="flex-col flex justify-center items-center pb-20">
          { portfolio.projects.slice(0, showItems).map((project: any, i: number) => (
            <ThemedCardProject 
              key={`project-${i}`}
              skill={project.skill}
              title={project.title}
              details={project.details}
              position={project.position}
              image={project.image}
              link={project.link}
            />
          ))}
          { isLoading ? 
            <>
              {spinner()}
            </> : showItems < portfolio.projects.length ? 
            <div className="text-base font-inter border border-black bg-amber-400 hover:bg-amber-500 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 duration-500 focus:ring-1 focus:ring-slate-600 cursor-pointer">
              <Link to="" aria-label="Services" className="w-6 px-6 py-5" onClick={handleShowMore}>
                See More Project
              </Link>
            </div> : <div></div>
          }
        </div>

        {/* Testimonial */}
        <div className="flex-col flex justify-center items-center pt-20">
          <div className="sm:flex-col text-center container mx-auto mb-14" >
            <h1 className="font-archivo font-bold text-4xl lg:text-5xl text-ternary-dark dark:text-primary-light" >
              {testimonials.intro.title}
            </h1>
            <p className="mt-4 text-lg leading-normal text-gray-500 dark:text-gray-200" >
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
