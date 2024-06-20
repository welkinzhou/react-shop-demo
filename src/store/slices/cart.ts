import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CoffeeData } from '@/mock/products'

type CartProduct = (Partial<CoffeeData> & { count: number })

// Define a type for the slice state
export interface CartState {
    good: CartProduct[]
}

// Define the initial state using that type
const initialState: CartState = {
    good: []
}

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<CoffeeData>) => {
            let index = state.good.findIndex(go => go.id === action.payload.id)
            // 没有相关商品，先写入商品
            if (index < 0) {
                index = state.good.length
                state.good.push({ ...action.payload, count: 0 })
            }
            state.good[index].count += 1
        },
        decrement: (state, action: PayloadAction<CoffeeData>) => {
            const index = state.good.findIndex(go => go.id === action.payload.id)
            // 没有相关商品，不用处理
            if (index < 0) {
                return
            }
            state.good[index].count -= 1
        },
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer