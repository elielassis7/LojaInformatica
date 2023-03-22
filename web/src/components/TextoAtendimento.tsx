import {MapPin, WhatsappLogo, HouseLine} from 'phosphor-react'

export function TextAtendimento(){
  return(
    <div className="flex flex-col justify-center items-center m-auto border-blue-800 border-2 rounded-xl">
      <div className='flex flex-col items-center'>
        <h2><strong>Atendimento</strong></h2>
        <p>Atendemos de Segunda a Sexta, dás 08:00 ás 18:00</p>
      </div>
      <div className='flex justify-center items-center gap-1'>
        <MapPin size={32} />
        <p><strong>Presencial:</strong> Av Maringa, nº1000</p>
      </div>
      <div className='flex justify-center items-center gap-1'>
        <WhatsappLogo size={32}/>
        <p><strong>Whatsapp:</strong><a href="web.whatsapp.com" className='no-underline'> (44)9 9988-7766</a></p>
      </div>
      <div className='flex justify-center items-center gap-2 ml-2 '>
        <HouseLine size={32} className='overflow-visible'/>
        <p><strong>Domicilio:</strong> Tambem fazemos atendimento na sua casa ou trabalho com agendamento</p>
      </div>
  
      
      
      
      
      
    </div>
  )
}