import React, { useState } from 'react'
import CardButton from './CardButton'
import Modal from './ShoppingCart/ModalCartItem'


const Card = ({product, addToCart}) => {

const [modalOn, setModalOn] = useState(false);


const clicked = () => {
  setModalOn(true)
}

const {name,image,price,alt} = product

  return (

<div className="h-40 m-8 transition-all border-2 border-green-600 border-solid rounded-md shadow-2xl cursor-pointer md:w-28 hover:scale-110">
    <figure  >
      <img className="object-contain object-center w-20 h-20 " src={image}alt={alt}/>
        <figcaption className="">
          <h3 className="text-xs font-light text-center text-black">{name}</h3>
          <h4 className="font-thin text-center ">${price}</h4>
        </figcaption>
        <CardButton clicked={clicked}/>
    </figure>
    {modalOn && < Modal setModalOn={setModalOn} product={product} addToCart={addToCart}/>}
</div>    
  
  )
}

export default Card

