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
        // Right - Content
        <>
          <div title={props.title} className={`min-h-80 lg:w-1/2 lg:border-r-0 lg:border-b lg:rounded-l-lg lg:rounded-r-none flex-none bg-cover border border-b-0 border-gray-400 rounded-t-lg text-center overflow-hidden bg-left-top ${props.image}`} />
          <div className="border border-t-0 lg:rounded-l-none lg:rounded-r-lg border-gray-400 lg:border-l-0 lg:border-t bg-white rounded-b-lg p-4 flex flex-col justify-center leading-normal">
            <div className="mb-8 w-11/12">
              <p className="text-sm flex items-center text-red-600 pb-5">
                {props.skill}
              </p>
              <div className="text-gray-900 font-bold text-3xl mb-2">
                {props.title}
              </div>
              <p className="text-gray-700 text-base text-justify">
                {props.details}
              </p>
            </div>
            <div className="mb-8 w-11/12">
              <a href={props.link} aria-label="View Project"
                  className="font-inter lg:float-right m-auto text-base w-44 flex justify-between items-center border border-black bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600">
                  <span className="text-sm sm:text-lg duration-100">
                    View Project
                  </span>
                  <MdArrowOutward className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></MdArrowOutward>
                </a>
            </div>
          </div>
        </>
      ): (
        // Left - Content
        <>
          <div className="fade-in-image max-w-sm w-full lg:max-w-7xl flex lg:flex-row flex-col-reverse">
            <div className="lg:border-b lg:border-r-0 lg:border-t lg:border-gray-400 lg:rounded-l-lg lg:rounded-r-none border border-t-0 rounded-b-lg border-gray-400 bg-white p-4 pl-10 flex flex-col justify-center leading-normal">
              <div className="mb-8 w-11/12">
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
              <div className="mb-8 w-11/12">
                <a href={props.link} aria-label="View Project"
                    className="font-inter text-base w-44 flex lg:float-left m-auto justify-between items-center border border-black rounded bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600">
                  <span className="text-sm sm:text-lg duration-100">
                    View Project
                  </span>
                  <MdArrowOutward className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></MdArrowOutward>
                </a>
              </div>
            </div>
            <div title={props.title} className={`min-h-80 lg:w-1/2 flex-none bg-cover lg:border-l-0 lg:border-b lg:rounded-r-lg lg:rounded-l-none border rounded-t-lg border-b-0 text-center overflow-hidden bg-right-top ${props.image} border-gray-400`} />
          </div>
        </>
      )
      }
      </div>
		)
	};
	
export default ThemedCardProject;