import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './CartStore'
import CartItemReducer from './CartItems'
const store = configureStore({
    reducer: {
        cart: CartReducer,
        CartItem: CartItemReducer
    }
})

export default store