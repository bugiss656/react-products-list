import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    perPage: 5,
    totalPages: 0,
    products: [],
    isLoading: true,
    error: null
}

export const fetchTotalPages = createAsyncThunk('products/fetchTotalPages', async (url) => {
    const response = await axios.get(url)
    const { total_pages } = response.data

    return total_pages
})

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (url) => {
    const response = await axios.get(url)
    const { data } = response.data

    return data
})


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.isLoading = true
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.products = action.payload
        },
        [fetchProducts.rejected]: (state, action) => {
            state.error = action.error.message
        },

        [fetchTotalPages.pending]: (state) => {
            state.isLoading = true
        },
        [fetchTotalPages.fulfilled]: (state, action) => {
            state.isLoading = false
            state.totalPages = action.payload
        },
        [fetchTotalPages.rejected]: (state, action) => {
            state.error = action.error.message
        }
    }
})

export default productsSlice.reducer

export const selectPerPage = state => state.products.perPage

export const selectTotalPages = state => state.products.totalPages

export const selectProducts = state => state.products.products

export const selectIsLoading = state => state.products.isLoading

export const selectError = state => state.products.error
