import { Atendiment } from "../components/Atendiment";
import { MenuServices } from "../components/MenuServices";
import { Reviews } from "../components/Reviews";
import { Slide } from "../components/Slide";
import {Map} from '../components/Map'
import { CopyRight } from "../components/CopyRight";
import { Footer } from "../components/Footer";

export function Home(){
  return(
    <div className='w-full h-screen'>
        <div className='w-full max-w-full flex flex-col justify-center '>
          <Slide/>
          <Atendiment/> 
          <MenuServices/>
          <Reviews/>
          <Map/>
          <Footer/>
          <CopyRight/>
        </div> 
      </div>
  )
}