import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{},
  token:'',
  
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUserData: (state, action) => {
        console.log(action.payload)
        state.user= action.payload.user
        state.token = action.payload.token

        localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logout: (state, action)=>{
      console.log('hi back');
        state.user= {}
        state.token= ''

        localStorage.clear();
    },

    // getMinMaxValues: (state, action)=>{

    // }
  },
})

// Action creators are generated for each case reducer function
export const { getUserData , logout} = authSlice.actions

export default authSlice.reducer