import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://back-ecommerce-351o.onrender.com/api/v1/' }),
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => 'users',
		}),
		getUser: builder.query({
			query: (id) => `user/${id}`,
		}),
		createUser: builder.mutation({
			query: (createUser) => ({
				url: 'user/signUp',
				method: 'POST',
				body: createUser,
			}),
		}),
		updateUser: builder.mutation({
			query: (user) => ({
				url: `user/${user.id}`,
				method: 'PUT',
				body: user,
			}),
		}),
		deleteUser: builder.mutation({
			query: (id) => ({
				url: `user/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const { 
	useGetAllUsersQuery, 
	useGetUserQuery, 
	useCreateUserMutation, 
	useUpdateUserMutation, 
	useDeleteUserMutation 
} = authApi;