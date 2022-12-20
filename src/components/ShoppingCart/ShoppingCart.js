import { useEffect, useReducer } from "react"
import axios from "axios";
import { TYPES } from "../../actions/action"
import { shoppingInitialState} from "../../actions/reducer/shoppingReducer";
import { shoppingReducer } from "../../actions/reducer/shoppingReducer";
import Product from "./Product";
import CartItem from "./CartItem";






const ShoppingCart = () => {
    
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const {products, cart}= state;

    const updateState = async () => {
        const PRODUCTS_URL =  "http://localhost:5000/products",
            CARTS_URL =  "http://localhost:5000/Cart"; 
        
        const resProducts = await axios.get (PRODUCTS_URL),
            resCart = await axios.get (CARTS_URL);
        
        const productsList =  await resProducts.data,
            cartItems = await resCart.data;
        dispatch ({type:TYPES.READ_STATE, payload: [productsList, cartItems]})
    }
    
    useEffect  (()=> {
        updateState ()
    }, [])
    const addToCart = (id) => dispatch ({type: TYPES.ADD_TO_CART, payload: id})

    const deleteFromCart = (id, all = false) => {
        if (all) {
            dispatch ({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})
        } else {
            dispatch ({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})

        }
    const clearCart = () => dispatch ({type: TYPES.CLEAR_CART})
    return (
        <>
            <h2>Carrito de compras</h2>
            <section>
                <h3>Productos</h3>
                <div className="box grid-responsive">{
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart= {addToCart}

                        /> )
                }
                
                </div>
            </section>
            <section>
                <h3>Carrito</h3>
                <div className="box">{
                 cart.map((item, index) => <CartItem
                    key={index}
                    data={item}
                    deleteFromCart={deleteFromCart}
                    /> )
                }
                </div>
            </section>
            <button onClick={() => clearCart}>Limpiar el Carrito</button>
        </>
    )
}}

export default ShoppingCart