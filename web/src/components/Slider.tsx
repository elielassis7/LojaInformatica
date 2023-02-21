import { useEffect, useRef, useState } from 'react'
import imageServicos from '../images/image01.png'
import imageOrcamento from '../images/image02.png'
import imageLoja from '../images/image03.png'
import imageSobre from '../images/image04.png'
import imageSocial from '../images/image05.png'
import {motion} from 'framer-motion'


const images = [imageServicos, imageLoja, imageOrcamento,  imageSobre, imageSocial]

export function Slider(){
const carousel = useRef<HTMLDivElement | null>(null);
const [width, setWidth] = useState(0)

useEffect(() => {
  setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth)
}, [])

  return (
    <div className='w-full max-w-5xl mb-12 mt-0 mx-auto h-80 flex items-center justify-center'>
      <motion.div ref={carousel} className='cursor-grab overflow-hidden' whileTap={{cursor: "grabbing"}}>
        
        <motion.div className='slideshow-wrapper flex ' 
          drag="x" 
          dragConstraints={{right: 0, left: -width}} 
          initial={{x: 200}}
          animate={{x: 0}}
          transition={{duration: 0.8}}
        >

          {images.map(image => (
            <motion.div className='min-h-[30rem] min-w-[52rem] p-4 mt-24' key={image}>
              <img src={image} alt="Images de paginas" className='w-full h-[90%] rounded-xl pointer-events-none'/>
            </motion.div>
          ))}

        </motion.div>

      </motion.div>
    </div>
  )
}