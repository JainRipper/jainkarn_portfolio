// ref https://codepen.io/librarylai/pen/NWWwVdM
import React, { useEffect, useState } from "react";
import Image from "next/image";
import btnNext from '../../public/btn-next.svg';
import btnBack from '../../public/btn-back.svg';

const ThemedCarousel = (props) => {
  
  const [nowIndex, setNowIndex] = useState(0);

  useEffect(() => {
		// setMounted(true)
    if(props.autoplay){
      // this.autoPlay()
    }
    // clearInterval(this.timer)
	}, []);

  const autoPlay = () =>{
    this.timer = setInterval(()=>{
          changeImagePosition(2)
     },props.delay*1000);
  }

  const conputedLeft = () =>{
    let leftSpan = parseInt(`${-nowIndex * parseInt(props.carouselPostWidth)}`)

    return{
      left: props.carouselPostWidth.toString().match(/[%vw]/) != null ? 
      `calc(${leftSpan}% - ${props.carouselPostMargin * 2 * nowIndex}px)`: 
      `${leftSpan - (props.carouselPostMargin * 2 * nowIndex)}px`
    }
  }
  
  const changeImagePosition = (index) => {
     // (1 + 1 + 3) % 3
     setNowIndex((nowIndex + index +  props.dataArray.length) % props.dataArray.length)
  }  

  return(
    <div className="w-full h-full flex justify-center items-center">
      <div className='carouselContainer relative'>
        <div className="carouselArea h-auto relative overflow-hidden box-border whitespace-nowrap w-full">
          <div style={conputedLeft()} className="carouselPosts">
            {props.dataArray.map((imgaeUrl,index)=>{
              return(
                <div 
                  key={imgaeUrl} 
                  style={{
                    width: props.carouselPostWidth, 
                    height: props.carouselPostHeight,  
                    margin:`0px ${props.carouselPostMargin}px `,...props.carouselPostStyle}} 
                  className="carouselPostBox w-full h-full inline-block">
                  {props.children(imgaeUrl,index)}
                </div>
              )
            })}
        </div>
      </div>
      
        <div onClick={()=> changeImagePosition(-2)} className="controlLeft left-[35rem] top-[17rem] absolute w-10 h-10 cursor-pointer">
          <Image src={btnBack} className="w-14"alt="Frontend Engineer" width={150} height={150} />
        </div>
        <div onClick={()=> changeImagePosition(2)} className="controlRight right-[35rem] top-[17rem] absolute w-10 h-10 cursor-pointer">
          <Image src={btnNext} className="w-14"alt="Frontend Engineer" width={150} height={150} />
        </div>
      </div>
    </div>
  )
}
export default ThemedCarousel;
