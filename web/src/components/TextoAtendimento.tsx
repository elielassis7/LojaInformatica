import {MapPin, WhatsappLogo, HouseLine} from 'phosphor-react'

export function TextAtendimento(){
  return(
    <div className="flex flex-col justify-center items-center border-blue-800 border-2 rounded-xl">
      <div>
        <h2>Atendimento</h2>
        <p>Atendemos de Segunda a Sexta, dás 08:00 ás 18:00</p>
      </div>
      <div>
        <MapPin size={32} />
        <p><strong>Presencial:</strong>Av Maringa, nº1000</p>
      </div>
      <div>
        <WhatsappLogo size={32}/>
        <p><strong>Whatsapp:</strong><a href="web.whatsapp.com" className='no-underline'>44999887766</a></p>
      </div>
      <div>
        <HouseLine size={32}/>
        <p><strong>Domicilio:</strong>Tambem fazemos atendimento na sua casa ou trabalho com agendamento</p>
      </div>
  
      
      
      
      
      
    </div>
  )
}