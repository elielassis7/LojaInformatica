import { MenuServices } from "../components/MenuServices";
import { Atendiment } from "../components/Atendiment";
import { CopyRight } from "../components/CopyRight";
import { Footer } from "../components/Footer";

export default function Service(){
  return(
    <div>
      <h1>Serviços</h1>
      <Atendiment/>
      <MenuServices/>
      <Footer/>
      <CopyRight/>
    </div>
  )
}