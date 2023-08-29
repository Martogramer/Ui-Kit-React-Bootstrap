import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const createUser = createAsyncThunk('authApi/createUser', async (userData) => {
  const response = await fetchBaseQuery({
    baseUrl: 'https://back-ecommerce-351o.onrender.com/api/v1/',
    url: 'signUp',
    method: 'POST',
    body: userData,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Error al crear el usuario');
  }
  return data;
});



export const signUpApi = createApi({
	reducerPath: 'signUpApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://back-ecommerce-351o.onrender.com/api/v1/users' }),
	endpoints: (builder) => ({
	  signUp: builder.mutation({
		query: (newUser) => ({
		  url: '/signUp',
		  method: 'POST',
		  body: newUser
		}),
	  }),
	}),
  });
  
  export const { useSignUpMutation } = signUpApi;




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
				url: 'signUp',
				method: 'POST',
				body: createUser,
			}),
		}),
		login: builder.mutation({
			query: (userCredentials) => ({
			  url: 'signIn',
			  method: 'POST',
			  body: userCredentials
			}),
			/* async */ onQueryCompleted(data) {
				console.log('Datos del usuario logueado:', data);
			  }
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
	useDeleteUserMutation,
	useLoginMutation
} = authApi;