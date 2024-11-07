import React from 'react';
import Image from "next/image";

interface Props {
	skill: string;
	icon: string;
	color: string;
}

const ThemedCardIcon = (props: Props) => {
	return (
    <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3">
      <div aria-label={props.skill}
        className={`flex items-center border border-black ${props.color} hover:bg-slate-200 text-black shadow-[3px_3px_0px_0px_#1a202c] rounded p-2.5 duration-500 focus:ring-1 focus:ring-slate-600 relative`}
      >
        <Image src={props.icon} className="w-8" 
          alt={props.skill} width={150} height={150} />
        <span className="font-bold text-sm sm:text-base duration-100 pl-4">
          {props.skill}
        </span>
      </div>
    </div>
		)
	};
	
export default ThemedCardIcon;