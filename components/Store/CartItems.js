import { createSlice } from '@reduxjs/toolkit'

const initialstate = { items: [], totalQuantit: 0 }
const CartItemSlice = createSlice({
    name: 'cartItem',
    initialState: initialstate,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    description: newItem.description,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity = existingItem.quantity + 1
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeFromCart(state, action) {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity = existingItem.quantity - 1
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})
export const CartItemActions = CartItemSlice.actions
export default CartItemSlice.reducer