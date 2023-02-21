import { TextAtendimento } from './TextoAtendimento'
import {WhatsappLogo} from 'phosphor-react'

export function Atendiment(){
  return(
    <div className='w-full h-96 flex flex-row bg-slate-600'>
      <div className='flex flex-col relative w-2/5 h-full mx-auto'>
        <TextAtendimento/>
      </div>
      <div className='flex flex-col relative w-2/5 h-full bg-red-500 mx-auto'>
        <WhatsappLogo size={50}/>
      </div>
    </div>
  )
}