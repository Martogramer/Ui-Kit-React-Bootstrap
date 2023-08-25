import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const baseURL = 'https://back-ecommerce-351o.onrender.com/api/v1'

export const clientsApi = createApi({
	reducerPath: 'clientsAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${baseURL}`,
	}),
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => 'destinations',
		})
		
	})
})

export const { useGetUsersQuery } = clientsApi