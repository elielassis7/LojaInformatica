import * as Dialog from '@radix-ui/react-dialog';
import { PaperPlaneTilt, X } from 'phosphor-react';

export function FormClient(){
  return(
    <div>
      <Dialog.Root>
        <Dialog.Trigger 
          type="button" 
          className='border border-slate-600 rounded-lg flex top-1/2 p-4 hover:bg-slate-600 hover:border-slate-200 hover:text-white duration-500'
        >
          Orçamento
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0'/>

          <Dialog.Content className='fixed p-10 bg-slate-800 rounded-2xl w-full max-w-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Dialog.Close className='absolute right-6 top-6 text-white hover:text-slate-400'>
              <X aria-label='Fechar'/>
            </Dialog.Close>
            
            <Dialog.Title className='text-3xl leading-tight font-bold text-white'>
              Contato
            </Dialog.Title>
            <form action="" method="POST" className='w-full flex flex-row mt-6 gap-5'>
              
              
              <div className='flex flex-col'>
                <label htmlFor="name" className='font-semibold leading-tight text-white mt-3'>
                  Nome
                </label>
                <input id="name" type="text" name="name" placeholder='ex.: Beto Martins' autoFocus className='p-4 rounded-lg mt-3 bg-slate-600 text-white placeholder:text-slate-500'/>

                <label htmlFor="email" className='font-semibold leading-tight text-white mt-3'>
                  E-mail
                </label>
                <input type="email" name="email" id="email" placeholder='ex.: seuemail@dominio.com' className='p-4 rounded-lg mt-3 bg-slate-600 text-white placeholder:text-slate-500' />

                <label htmlFor="phone" className='font-semibold leading-tight text-white mt-3'>
                  Telefone
                </label>
                <input type="tel" name="phone" id="phone" placeholder='(44)98765-4321' className='p-4 rounded-lg mt-3 bg-slate-600 text-white placeholder:text-slate-500'/>

              </div>
              <div className='flex flex-col'>
                <label htmlFor="message" className='font-semibold leading-tight text-white'>
                  Mensagem
                </label>
                <textarea name="message" id="message" cols={30} rows={7} className='p-4 rounded-lg mt-3 bg-slate-600 text-white placeholder:text-slate-500'></textarea>

                <button type="submit" className='mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500'>
                  <PaperPlaneTilt size={20} weight='bold'/>
                  Enviar
                </button>
              </div>

            </form>
            
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
    
    
    /*
    <div>
      <form action="" method="POST">
        <fieldset>
          <legend>Contato</legend>
          
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" name="name" />

          <label htmlFor="email">E-mail</label><br/>
          <input type="email" name="email" id="email" /><br/><br/>

          <label htmlFor="phone">Telefone</label><br/>
          <input type="tel" name="phone" id="phone" /><br/><br/>

          <label htmlFor="message">Mensagem</label><br/>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>

        </fieldset>
      </form>
      
    </div>*/
  )
}