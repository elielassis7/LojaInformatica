import logoFacebook from '../assets/facebook_icon.png'
import logoInstagram from '../assets/instagram_icon.png'
import logoWhatsApp from '../assets/whatsapp_icon.png'

export function SocialMedia(){
  return (
    <div className='flex flex-row  h-10 w-30 justify-center items-center animate-pulse gap-2 mr-10'>
      <a href="facebook.com"><img src={logoFacebook} alt="Facebook icon" className='w-10 h-10'/></a>
      <a href="instagram.com"><img src={logoInstagram} alt="Instagram icon" className='w-10 h-10'/></a>
      <a href="whatsapp.com"><img src={logoWhatsApp} alt="Whatsapp icon" className='w-10 h-10'/></a>
    </div>
  )
}