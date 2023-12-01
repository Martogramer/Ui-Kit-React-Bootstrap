import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const baseURL = 'https://back-ecommerce-351o.onrender.com/api/v1/'

export const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
    const response = await axios.get(`${baseURL}products`)
    return response.data
})
export const createProduct = createAsyncThunk('products/createProduct', async (productData) => {
    const response = await axios.post(`${baseURL}product`, productData)
    return response.data
})
export const updateProduct = createAsyncThunk('products/updateProduct', async ({ _id, productData }) => {
    const response = await axios.put(`${baseURL}product/${_id}`, productData)
    return response.data
})
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (_id) => {
    const response = await axios.delete(`${baseURL}product/${_id}`)
    return response.data
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            state.data.push(action.payload);
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            const updateProduct = action.payload;
            const existingProductIndex = state.data.findIndex((product) => product._id === updateProduct._id)
            if (existingProductIndex !== -1) {
                state.data[existingProductIndex] = updateProduct;
            }
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            const idToDelete = action.payload;
            state.data = state.data.filter((product) => product._id !== idToDelete)
        })
    }
});

export const selectAllProducts = (state) => state.products.list
export const selectProductById = (state, productId) =>
    state.products.list.find((product) => product._id === productId )

export default productSlice.reducer;