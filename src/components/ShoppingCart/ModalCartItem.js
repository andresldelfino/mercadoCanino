
import React, { useState } from 'react'
const initialState = 1

const ModalCartItem = ({ setModalOn, product, addToCart}) => {

  
    const handleOKClick = () => {

        addToCart(product.id, counter)        
        setModalOn(false)
    }
    const handleCancelClick = () => {
       
        setModalOn(false)
    }



    const [counter, setCounter] = useState(initialState)

    const sumar = () => setCounter(counter + 1)
    const restar = () => setCounter(counter - 1)
            
    

    const {name, price} = product
    return (

        <div className="bg-zinc-200 opacity-80 fixed inset-0 z-50">

            <div className="flex h-screen justify-center items-center  ">

                <div className="flex-col justify-center  bg-white py-8 px-14 border-4 border-green-500 rounded-xl ">

                    <div className="flex-col text-center content-center mb-10" >
                        <h3 className=" rounded px-4 py-2 text-zinc-600 " >{name}</h3>
                        <h4 className=" rounded px-4 py-2 text-zinc-600 " >$ {price}</h4>
                    </div>
                    <div className="flex text-green-500 justify-center py-5 ">
                    
                        <button className="flex rounded px-4 py-2 text-white   bg-green-800" onClick={restar}  disabled={counter<=1?true:false}>-</button>
                        <h3 className="flex rounded px-5 py-2">   {counter}   </h3>
                        <button className="flex rounded px-4 py-2 text-white  bg-green-800" onClick={sumar}>+</button>           
                    </div>
                    <div className="flex">
                        
                        <button onClick={handleOKClick} className=" rounded px-4 py-2 text-white  bg-green-600 ">Agregar</button>
                        <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-red-500 ">Cancelar</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ModalCartItem