import React, { useReducer } from 'react'
import Card from './Card'
import { TYPES } from "./actions/shoppingAction"
import { shoppingInitialState, shoppingReducer } from "./reducer/shoppingReducer"

const CardList = (props) => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

  const addToCart = (id,counter) => dispatch({type: TYPES.ADD_TO_CART, payload: {id, counter}}) 

    const deleteFromCart = (id, all = false) => {
        if (all) {
            dispatch({type: TYPES.REMOVE_ALL_PRODUCT, payload: id})  
        } else {
            dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})  
        }
    }    

    const clearCart = () => dispatch({type: TYPES.CLEAR_CART}) 

  return (



<div id='productos'>
<div className="flex flex-col flex-wrap content-center justify-center mx-auto md:flex-row md:w-8/12 sm:flex-row sm:flex sm:flex-auto">

  
  
    {
      
      props.products.map(product=><Card key={product.id} product={product} addToCart={addToCart}/> )
  
      
    }
  
</div>
</div>

  )
}

export default CardList
