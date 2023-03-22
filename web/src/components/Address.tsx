import { MapPin } from 'phosphor-react'

export function Address(){
  return (
    <div className="flex flex-row h-20 gap-2">
      <MapPin size={32} color='#187da9'  className='mt-2'/>
      <p className='text-white font-sl'>Av Brasil, nº 100<br/>Maringa-PR</p>
    </div>
  )
}