import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseURL = 'https://back-ecommerce-351o.onrender.com/api/v1'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
      baseUrl: `${baseURL}`,
    }),
    endpoints: (builder) => ({
      getAllProducts: builder.query({
        query: () => "products",
      }),
      getProduct: builder.query({
        query: (_id) => `product/${_id}`,
      }),
      createProduct: builder.mutation({
        query: (newProduct) => ({
          url: "product",
          method: "POST",
          body: newProduct,
        }),
      }),
      updateProduct: builder.mutation({
        query: ({ _id, ...updates }) => ({
          url: `product/${_id}`,
          method: "PUT",
          body: updates,
        }),
      }),
      deleteProduct: builder.mutation({
        query: (_id) => ({
          url: `product/${_id}`,
          method: "DELETE",
        }),
      }),
    }),
  });
  
  export const {
    useGetAllProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  } = productsApi;