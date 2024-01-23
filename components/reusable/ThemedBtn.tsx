import React from 'react';

interface Props {
	label: string;
    extraAttr: string;
	bgColor: string;
	hoverColor: string;
	onClick: () => void;
}

const ThemedBtn = (props: Props) => {
	return (
			<button 
                onClick={props.onClick} 
                aria-label={props.label}
				className={`text-base font-inter border border-black py-2.5 px-4 ${props.bgColor} ${props.hoverColor} text-black shadow-[5px_5px_0px_0px_#1a202c] rounded duration-500 focus:ring-1 focus:ring-slate-600 ${props.extraAttr}`}
                >
				{props.label}
			</button>
		)
	};
	
export default ThemedBtn;