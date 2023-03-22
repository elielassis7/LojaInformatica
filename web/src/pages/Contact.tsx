
import {Map} from '../components/Map'
import { Contacts } from "../components/Contacts";
import { FormClient } from "../components/FormClient";
import { CopyRight } from '../components/CopyRight';
import { Footer } from '../components/Footer';

export default function Contact(){
  return(
    <div>
      <h1>Contato</h1>
      <div>
        <Contacts/>
        <FormClient/>
      </div>
      <Map/>
      <Footer/>
      <CopyRight/>7
    </div>
  )
}