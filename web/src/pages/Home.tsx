import { Atendiment } from "../components/Atendiment";
import { MenuServices } from "../components/MenuServices";
import { Reviews } from "../components/Reviews";
import { Slider } from "../components/Slider";
import {Map} from '../components/Map'

export function Home(){
  return(
    <div>
      <Slider/>
      <Atendiment/>
      <MenuServices/>
      <Reviews/>
      <Map/>
    </div>
  )
}