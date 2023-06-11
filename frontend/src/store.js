import { configureStore } from '@reduxjs/toolkit'
import { homeStayApi } from './features/APISlices/homeStayAPI'
// import authSlice from './features/ReducerSlices/authSlice';
import homeStaySlice from './features/ReducerSlices/homeStaySlice';
import authSlice from './features/ReducerSlices/authSlice';

export const store = configureStore({
  reducer: {
    [homeStayApi.reducerPath]: homeStayApi.reducer,
    auth:authSlice,  
    homestay: homeStaySlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeStayApi.middleware),
})

export default store;