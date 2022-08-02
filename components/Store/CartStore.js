import { createSlice } from '@reduxjs/toolkit'

const initialstate = { cartIsvisible: false }
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialstate,
    reducers: {
        visible(state) {
            state.cartIsvisible = true
        },
        hide(state) {
            state.cartIsvisible = false
        },
        switch(state) {
            state.cartIsvisible = !state.cartIsvisible
        }
    }
})

export const CartActions = cartSlice.actions
export default cartSlice.reducer
