import { useEffect, useRef, useState, Component } from 'react'
import imageServicos from '../images/image01.png'
import imageOrcamento from '../images/image02.png'
import imageLoja from '../images/image03.png'
import imageSobre from '../images/image04.png'
import imageSocial from '../images/image05.png'
import {motion} from 'framer-motion'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [imageServicos, imageLoja, imageOrcamento,  imageSobre, imageSocial]

export function Slide(){
  
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  }

  return(
    <div className="w-[90%] left-12 translate-x-12">
      <Slider  {...settings}>
      {images.map(image => (
            <motion.div className='max-h-[20rem] max-w-[60rem] p-4 ' key={image}>
              <img src={image} alt="Images de paginas" className='w-full rounded-3xl pointer-events-none'/>
            </motion.div>
          ))}
      </Slider>
    </div>
  )

}

/*const carousel = useRef<HTMLDivElement | null>(null);
const [width, setWidth] = useState(0)

useEffect(() => {
  setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth)
}, [])

  return (
    <div className='w-full max-w-5xl mt-0 mx-auto flex items-center justify-center'>
      <motion.div ref={carousel} className='cursor-grab overflow-hidden' whileTap={{cursor: "grabbing"}}>
        
        <motion.div className='slideshow-wrapper flex ' 
          drag="x" 
          dragConstraints={{right: 0, left: -width}} 
          initial={{x: 200}}
          animate={{x: 0}}
          transition={{duration: 0.8}}
        >

          {images.map(image => (
            <motion.div className='min-h-[20rem] min-w-[52rem] p-4 ' key={image}>
              <img src={image} alt="Images de paginas" className='w-full rounded-3xl pointer-events-none'/>
            </motion.div>
          ))}

        </motion.div>

      </motion.div>
    </div>
  )*/