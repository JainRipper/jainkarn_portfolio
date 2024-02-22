import React from 'react';
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

interface Props {
	service: string;
  details: string;
	icon: string;
	color: string;
  link: string;
}

const ThemedCardLinkIcon = (props: Props) => {
  console.log(props.icon);
	return (
    <div className="p-4 max-w-sm duration-300 hover:-translate-y-1">
      <div className={`flex h-full dark:bg-gray-800 p-6 flex-col text-base font-inter border border-black ${props.color} text-black shadow-[5px_5px_0px_0px_#1a202c] rounded-lg duration-500 focus:ring-1 focus:ring-slate-600`}>
        <div className="flex items-center pb-16">
          <Image src={props.icon} className="w-14"
            alt={props.service} width={150} height={150} />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="text-2xl font-bold pb-4 dark:text-gray-300">
            {props.service}
          </p>
          <p className="text-base pb-5 dark:text-gray-300">
            {props.details}
          </p>
          <a href={props.link}
            className="font-inter text-base w-1/2 flex justify-between items-center border border-black bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600"
            aria-label="Download Resume" >
            <span className="text-sm sm:text-lg duration-100">
              Contact Us
            </span>
            <MdArrowOutward className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></MdArrowOutward>
          </a>
        </div>
      </div>
    </div>
		)
	};
	
export default ThemedCardLinkIcon;