import { useReducer } from "react"
import { shoppingInitiasState, shoppingReducer } from "./shoppingReducer"

const ShoppingCart = () => {
    
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitiasState)

    const addToCart = () => {}

    const deleteFromCart = () => {}

    const clearCart = () => {}
    return (
        <>
            <h2>Carrito de compras</h2>
            <section>
                <h3>Productos</h3>
                <div>
                    
                </div>
            </section>
            <section>
                <h3>Carrito</h3>
                <div>
                    
                </div>
            </section>
            <button >Limpiar el Carrito</button>
        </>
    )
}

export default ShoppingCart