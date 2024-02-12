import React from 'react';
import { Link } from "react-scroll/modules"

interface Props {
	label: string;
	link: string;
    // extraAttr: string;
	// bgColor: string;
	// hoverColor: string;
	// onClick: () => void;
}

const ThemedLinkBtn = (props: Props) => {
	return (
		<div className="text-base font-inter border border-black bg-amber-400 hover:bg-amber-500 text-black shadow-[5px_5px_0px_0px_#1a202c] rounded py-2.5 duration-500 focus:ring-1 focus:ring-slate-600 cursor-pointer">
			<Link to={props.link} aria-label={props.label} className="w-6 px-6 py-5">
				{props.label}
			</Link>
		</div>
		)
	};
	
export default ThemedLinkBtn;