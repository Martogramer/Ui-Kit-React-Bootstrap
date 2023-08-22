import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const baseURL = 'https://b-form-production.up.railway.app/'

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