import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions;

export default registerSlice.reducer;

export const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch(registerStart());

    const response = await fetch('https://back-ecommerce-351o.onrender.com/api/v1/signUp', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      dispatch(registerSuccess());
    } else {
      const errorData = await response.json();
      dispatch(registerFailure(errorData.message));
    }
  } catch (error) {
    dispatch(registerFailure('An error occurred during registration.'));
  }
};
