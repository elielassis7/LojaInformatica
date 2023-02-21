


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
    <div className="bg-blue-500 w-full text-white h-12 text-lg">
        <ul className="flex flex-row justify-between gap-10 mx-12 mt-1">
          {paths.map(p  => (
            <li key={p.name}>
              {p.name}
            </li>
          ))}
        </ul>

      </div>
  )
}