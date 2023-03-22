import { Copyright } from "phosphor-react"

export function CopyRight(){
  return(
    <div className="max-h-7 w-full flex flex-row text-white bg-black gap-52">
      <div className="flex flex-row justify-center items-center ml-52">
        <Copyright/>
        <p>
          Todos os direitos reservados
        </p>
      </div>
      <div>
        <p>
          Desenvolvido por 
          <a href="" className="no-underline hover:text-blue-400 duration-500">
            Usco Tech
          </a>
        </p>
      </div>
    </div>
  )
}