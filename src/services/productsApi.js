import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://back-ecommerce-351o.onrender.com/api/v1/' }),
    endpoints: (builder) => ({
      getAllProducts: builder.query({
        query: () => 'products',
      }),
      getProduct: builder.query({
        query: (id) => `product/${id}`,
      }),
      createProduct: builder.mutation({
        query: (newProduct) => ({
          url: 'product',
          method: 'POST',
          body: newProduct,
        }),
      }),
      updateProduct: builder.mutation({
        query: ({ id, ...updates }) => ({
          url: `product/${id}`,
          method: 'PUT',
          body: updates,
        }),
      }),
      deleteProduct: builder.mutation({
        query: (id) => ({
          url: `product/${id}`,
          method: 'DELETE',
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