import { CaretUp } from "phosphor-react";
import { useState } from "react"





export default function ButtonTop(){
  const [ pageYPosition, setPageYPosition ] = useState(0);

  function getPageYAfterScroll(){
    setPageYPosition(window.scrollY);
  }

  window.addEventListener('scroll', getPageYAfterScroll);

  return(
    <div>
     {pageYPosition > 100 &&
        <a
          href="#top"
          className="fixed bottom-5 right-5 bg-slate-700 text-white z-50 rounded-lg hover/edit:-translate-y-1 hover:bg-slate-500 duration-500"
        >
          <CaretUp size={32} />
        </a>
      }
    </div>
  )
}