import { Link, Navigate, useNavigate } from "react-router-dom"



export const paths = [
  {
    name: "Home",
    path:"/"
  },
  {
    name: "Serviços",
    path: "/service"
  }, 
  {
    name: "Loja",
    path:"/store"
  },
  {
    name: "Contato",
    path:"/contact"
  },
  {
    name: "Sobre nós",
    path:"/about"
  },
  ]

 

export function Menu(){
  return (
    <div className="bg-blue-500 w-full text-white h-10 text-lg">
        <ul className="flex flex-row justify-between gap-10 mx-12 mt-1">
          {
            paths.map(i => (
              <li key={i.name}>
                <Link to={i.path}>{i.name}</Link>
              </li>  
            ))
          }
          

        </ul>

      </div>
  )
}

/*
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/service"}>Serviços</Link>
          </li>
          <li>
            <Link to={"/store"}>Loja</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contato</Link>
          </li>
          <li>
            <Link to={"/about"}>Sobre nós</Link>
          </li>
          */