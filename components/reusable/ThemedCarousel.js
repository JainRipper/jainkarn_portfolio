// ref https://codepen.io/librarylai/pen/NWWwVdM
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import btnNext from '../../public/btn-next.svg';
import btnBack from '../../public/btn-back.svg';
import useWindowDimensions from './useWindowDimensions';

const ThemedCarousel = (props) => {
  // changeImagePosition: set -1 AND 1 to skip one image, set -2 AND 2 to skip two images
  const [nowIndex, setNowIndex] = useState(0);
  // const [ heightCarousel, setHeightCarousel ] = useState('200px');
  const [ widthCarousel, setWidthCarousel ] = useState('');
  const [ postMargin, setPostMargin ] = useState(10);
  const { height, width } = useWindowDimensions();
  const screenSize = useRef();

  useEffect(() => {
		// setMounted(true)
    // if(props.autoplay){
    //   this.autoPlay()
    // }
    // clearInterval(this.timer)
    // console.log(heightF, widthCarousel);
    
    if (width >= 1240) {
      setWidthCarousel('600px');
    } else if (width < 1240 && width >= 1024) {
      setWidthCarousel('470px');
    } else if (width < 1024 && width > 768) {
      setWidthCarousel('302px');
    } else if (width <= 768) {
      setWidthCarousel('500px');
    }
	}, []);

  const autoPlay = () =>{
    this.timer = setInterval(()=>{
          changeImagePosition(2)
     },props.delay*1000);
  }

  const conputedLeft = () =>{
    let leftSpan = parseInt(`${-nowIndex * parseInt(widthCarousel)}`)
    // let y = leftSpan% - (postMargin * 2 * nowIndex);
    // let z = widthCarousel.toString().match(/[%vw]/) != null;
    let x = leftSpan - (postMargin * 2 * nowIndex);     // !!
    console.log(leftSpan);

    return{
      // left: widthCarousel.toString().match(/[%vw]/) != null ? 
      // `calc(${leftSpan}% - ${postMargin * 2 * nowIndex}px)`: 
      // `${leftSpan - (postMargin * 2 * nowIndex)}px`
      left: `${leftSpan - (postMargin * 2 * nowIndex)}px`
    }
  }
  
  const changeImagePosition = (index) => {
     // (1 + 1 + 3) % 3
     setNowIndex((nowIndex + index +  props.dataArray.length) % props.dataArray.length)
  }  
  console.log(widthCarousel);
  return(
    <>
    {widthCarousel && 
      <div className="w-full h-full flex justify-center items-center">
        <div className='carouselContainer container relative'>
          <div className="carouselArea h-auto relative overflow-hidden box-border whitespace-nowrap w-full">
            <div style={conputedLeft()} className="carouselPosts">
              {props.dataArray.map((imgaeUrl,index)=>{
                return(
                  <div 
                    key={imgaeUrl} 
                    style={{
                      // width: width, 
                      // height: height,  
                      margin:`0px ${postMargin}px `,
                      ...props.carouselPostStyle}} 
                    className={`carouselPostBox inline-block my-0`}>
                    {props.children(imgaeUrl,index)}
                  </div>
                )
              })}
          </div>
        </div>      
          <div onClick={()=> changeImagePosition(-1)} className="controlLeft left-[35rem] top-[17rem] absolute w-10 h-10 cursor-pointer">
            <Image src={btnBack} className="w-14"alt="Frontend Engineer" width={150} height={150} />
          </div>
          <div onClick={()=> changeImagePosition(1)} className="controlRight right-[35rem] top-[17rem] absolute w-10 h-10 cursor-pointer">
            <Image src={btnNext} className="w-14"alt="Frontend Engineer" width={150} height={150} />
          </div>
        </div>
      </div>
    }
    </>
  )
}
export default ThemedCarousel;
