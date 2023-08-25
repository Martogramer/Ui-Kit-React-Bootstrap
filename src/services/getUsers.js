import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = 'https://back-ecommerce-351o.onrender.com/api/v1/'

export const userApi = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${baseURL}`,
	}),
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => 'users',
		}),
		getUserById: builder.query({
			query: ({ _id }) => `user/${_id}`,
		}),
	})
})

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi

export const getUsersAPI = async () => {
	try {
		const response = await axios(`${baseURL}/users`)
		// Aquí puedes realizar el manejo de la respuesta de la API
		// por ejemplo, validar la respuesta o extraer datos relevantes
		// y retornar cualquier resultado necesario
		return response.data // Puedes ajustar esto según la estructura de la respuesta de la API
	} catch (error) {
		throw new Error(error.message)
	}
}
