import './styles/global.css';
import { Header } from "./components/Header"
import { Footer } from './components/Footer';
import { Atendiment } from './components/Atendiment';
import { MenuServices } from './components/MenuServices';
import { Reviews } from './components/Reviews';
import { Slider } from './components/Slider';
import { Map } from './components/Map';

export function App() {
  return (
      <div className='w-full h-screen'>
        <div className='w-full max-w-full flex flex-col gap-10 justify-center '>
          <Header/>
          <Slider/>
          <Atendiment/>
          <MenuServices/>
          <Reviews/>
          <Map/>
          <Footer/>
        </div> 
      </div>
  )
}




