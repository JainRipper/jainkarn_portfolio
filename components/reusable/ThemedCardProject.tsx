import React from 'react';
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

interface Props {
	skill: string,
  title: string,
  details: string;
  position: string,
  image: string,
  link: string
}

const ThemedCardProject = (props: Props) => {
	return (
    <div className="max-w-sm w-full lg:max-w-7xl lg:flex mb-12">
      { props.position == "right" ? (
        <>
        <div title={props.title} className={`h-96 lg:w-1/2 flex-none bg-cover border-r-0 rounded-l-lg text-center overflow-hidden ${props.image}`} />
        <div className="border-r border-b border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-r-lg p-4 flex flex-col justify-center leading-normal">
          <div className="mb-8 w-3/4">
            <p className="text-sm flex items-center text-red-600 pb-5">
              {props.skill}
            </p>
            <div className="text-gray-900 font-bold text-3xl mb-2">
              {props.title}
            </div>
            <p className="text-gray-700 text-base">
              {props.details}
            </p>
          </div>
          <a href={props.link} aria-label="View Project"
              className="font-inter text-base w-[28%] flex justify-between items-center border border-black bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600">
              <span className="text-sm sm:text-lg duration-100">
                View Project
              </span>
              <MdArrowOutward className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></MdArrowOutward>
            </a>
          </div>
        </>
      ): (
        <>
          <div className="max-w-sm w-full lg:max-w-7xl lg:flex mb-12">
            <div className="border-l border-b border-gray-400 lg:border-r-0 lg:border-t lg:border-gray-400 bg-white rounded-l-lg p-4 pl-10 flex flex-col justify-center leading-normal">
              <div className="mb-8 w-3/4">
                <p className="text-sm flex items-center text-red-600 pb-5">
                  {props.skill}
                </p>
                <div className="text-gray-900 font-bold text-3xl mb-2">
                  {props.title}
                </div>
                <p className="text-gray-700 text-base">
                  {props.details}
                </p>
              </div>
              <a href={props.link} aria-label="View Project"
                  className="font-inter text-base w-[28%] flex justify-between items-center border border-black bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600">
                <span className="text-sm sm:text-lg duration-100">
                  View Project
                </span>
                <MdArrowOutward className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></MdArrowOutward>
              </a>
            </div>
            <div title={props.title} className={`h-96 lg:w-1/2 flex-none bg-cover border-l-0 rounded-r-lg text-center overflow-hidden ${props.image}`} />
          </div>
        </>
      )
      }
      </div>
		)
	};
	
export default ThemedCardProject;