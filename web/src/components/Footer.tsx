import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { paths } from "./Menu";
import { Address } from "./Address";

export function Footer(){
  return(
    <div className="flex flex-row bg-blue-900 w-full h-52">
      <Logo/>
      <div>
        <ul className="flex flex-col text-white">
          {
            paths.map(i => (
              <li key={i.name}>
                <Link to={i.path}>{i.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <Address/>
        <p>email@empresa.com.br</p>
        <p>(44)98765-4321</p>
      </div>
      <div>
        
      </div>
      
    </div>
  )
}