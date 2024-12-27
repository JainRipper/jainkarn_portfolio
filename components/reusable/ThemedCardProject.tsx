import React from 'react';
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { truncation } from './features';

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
    <div className="max-w-sm md:max-w-2xl lg:max-w-6xl md:flex w-full mb-12">
      { props.position == "right" ? (
        // Right - Content
        <>
          <div title={props.title} className={`min-h-72 md:min-h-80 md:w-1/2 md:border-r-0 md:border-b md:rounded-l-lg md:rounded-r-none flex-none bg-cover border border-b-0 border-gray-400 rounded-t-lg text-center overflow-hidden bg-left-top ${props.image}`} />
          <div className="border border-t-0 md:rounded-l-none md:rounded-r-lg border-gray-400 md:border-l-0 md:border-t bg-white rounded-b-lg p-4 flex flex-col justify-center leading-normal">
            <div className="mb-4 md:w-11/12">
              <p className="text-sm flex items-center text-red-600 pb-5">
                {props.skill}
              </p>
              <div className="text-gray-900 font-bold text-xl lg:text-2xl mb-2">
                {props.title}
              </div>
              <p className="text-gray-700 text-base text-justify" tooltip={props.details.length > 250 ? props.details : false } tooltip-position="buttom">
                {truncation(props.details, 250)}
              </p>
            </div>
            <div className="mb-4 md:w-11/12">
              <a href={props.link} aria-label="View Project"
                  className="font-inter md:float-right m-auto text-base w-40 md:w-44 flex justify-between items-center border border-black bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600">
                  <span className="duration-100">
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
          <div className="fade-in-image max-w-sm md:max-w-2xl lg:max-w-6xl w-full flex md:flex-row flex-col-reverse">
            <div className="md:border-b md:border-r-0 md:border-t md:border-gray-400 md:rounded-l-lg md:rounded-r-none border border-t-0 rounded-b-lg border-gray-400 bg-white p-4 md:pl-10 flex flex-col justify-center leading-normal">
              <div className="mb-4 md:w-11/12">
                <p className="text-sm flex items-center text-red-600 pb-5">
                  {props.skill}
                </p>
                <div className="text-gray-900 font-bold text-xl lg:text-2xl mb-2">
                  {props.title}
                </div>
                <p className="text-gray-700 text-base text-justify" tooltip={props.details.length > 200 ? props.details : false } tooltip-position="buttom" >
                  {truncation(props.details, 200)}
                </p>
              </div>
              <div className="mb-4 md:w-11/12">
                <a href={props.link} aria-label="View Project"
                    className="font-inter text-base w-40 md:w-44 flex md:float-left m-auto justify-between items-center border border-black rounded bg-white hover:bg-slate-200 text-black shadow-[5px_5px_0px_0px_#1a202c] py-2.5 px-2.5 duration-500 focus:ring-1 focus:ring-slate-600">
                  <span className="duration-100">
                    View Project
                  </span>
                  <MdArrowOutward className="ml-0 sm:ml-1 mr-2 h-5 w-5 sn:w-6 sm:h-6 duration-100"></MdArrowOutward>
                </a>
              </div>
            </div>
            <div title={props.title} className={`min-h-72 lg:min-h-80 md:w-1/2 flex-none bg-cover md:border-l-0 md:border-b md:rounded-r-lg md:rounded-l-none border rounded-t-lg border-b-0 text-center overflow-hidden bg-right-top ${props.image} border-gray-400`} />
          </div>
        </>
      )
      }
      </div>
		)
	};
	
export default ThemedCardProject;