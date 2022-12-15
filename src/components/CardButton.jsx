import React from "react"



const CardButton = ({clicked}) => {
  return (
    <div className="flex flex-wrap justify-center">
      <button className="font-light bg-orange-400 border-2 rounded-md" onClick={clicked}>Comprar</button>
   </div>
  )
}

export default CardButton



