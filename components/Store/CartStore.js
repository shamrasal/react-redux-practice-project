import { createSlice } from '@reduxjs/toolkit'

const initialstate = { cartIsvisible: false, Notification: null }
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialstate,
    reducers: {
        switch(state) {
            state.cartIsvisible = !state.cartIsvisible
        },
        ShowNotification(state, action) {
            state.Notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }

        }
    }
})

export const CartActions = cartSlice.actions
export default cartSlice.reducer
