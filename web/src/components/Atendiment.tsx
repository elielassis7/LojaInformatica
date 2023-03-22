import { FormClient } from './FormClient'
import { TextAtendimento } from './TextoAtendimento'
import {WhatsappLogo} from 'phosphor-react'

export function Atendiment(){
  return(
    <div className='w-full h-44 flex flex-row items-center justify-center bg-slate-300'>
      <div className='flex flex-col w-2/5 h-full mx-auto'>
        <TextAtendimento/>
      </div>
      <div className='flex flex-col w-2/5 h-full mx-auto justify-center items-center gap-3'>
        <h2 className='font-semibold text-2xl'>Quer fazer um orçamento?</h2>
        <p>Clique no botão abaixo para enviar uma mensagem para nós.</p>
        <FormClient/>
      </div>
    </div>
  )
}