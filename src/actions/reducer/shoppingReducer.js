import { TYPES } from "../../actions/action";

export const shoppingInitialState= {
    products: [],
    Cart:[]
}

export function shoppingReducer (state, action) {
    switch (action.type) {
        case TYPES.READ_STATE: {
            return {
                ...state,
                products: action.payload [0],
                Cart: action.payload [1]
            }
        }
        case TYPES.ADD_TO_CART: {
            const newItem = state.products.find(product => product.id === action.payload)
            const itemInCart= state.Cart.find (item => item.id === newItem.id)
            return itemInCart
            ? {
                ...state,
                Cart: state.Cart.map(item =>
                    item.id === newItem.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                    )
            }
            : {   ...state,
                Cart:[...state.Cart, {...newItem, quantity:1}]
            }
        }
        case TYPES.REMOVE_ONE_PRODUCT: {
            const itemToDelete = state.Cart.find(item=> item.id === action.payload)
            return itemToDelete.quantity >  1
            ?{
                ...state,
                Cart: state.Cart.map(item =>
                    item.id === action.payload
                    ? {...item, quantity: item.quantity - 1}
                    : item
                    )
            }
            :{
                ...state,
                Cart: state.Cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.REMOVE_ALL_PRODUCTS: {
            return {
                ...state,
                Cart: state.Cart.filter(item => item.id !== action.payload)
            }
        }
        
        case TYPES.CLEAR_CART: {
            
            return shoppingInitialState

        }
        
            
    
        default:
           return state;
    }   
}
