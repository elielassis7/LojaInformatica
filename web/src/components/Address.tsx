import PinImage from '../assets/map_pin.png'

export function Address(){
  return (
    <div className="flex flex-row h-20 gap-2 translate-x-3/4">
      <img src={PinImage} alt="pin de mapa"  className='w-15 h-15'/>
      <p className='text-white font-sl'>Av Brasil, nº 100<br/>Maringa-PR</p>
    </div>
  )
}