import { Logo } from "./Logo";
import { Address } from "./Address";
import { Menu } from "./Menu";
import { SocialMedia } from "./SocialMedia";


export function Header(){
  
  return(
    <div className='w-full h-32 mx-auto flex flex-col justify-center'>
      <div className="bg-blue-900 h-20 w-full flex flex-row justify-between items-center">
        <Logo/>
        <h1 className=" inset-8 text-white font-bold text-3xl" >Loja de Informatica</h1>
        <Address/>
        <SocialMedia/>
      </div>
      <Menu/>
    </div>
  )
}