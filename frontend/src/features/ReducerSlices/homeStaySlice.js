import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:'',
  Id:'',
  min:'',
  max:'',
  guests:0,
  days:0,
  checkIn:'',
  checkOut:'',
  total:0,
  additionalUserDetail:{
    Address: '',
    PhoneNumber:'',
    Country:'',
    specialRequest:''
  }
  
  
}

export const homeStaySlice = createSlice({
  name: 'homeStay',
  initialState,
  reducers: {
    getminmax: (state, action) => {
        console.log(action.payload)
        state.min= action.payload.min
        state.max = action.payload.max

       
    },
    bookAStay: (state, action) => {
      // console.log(action.payload)
      state.checkIn= action.payload.checkIn
      state.checkOut = action.payload.checkOut
      state.days= action.payload.days
      state.guests = action.payload.guest
      state.name = action.payload.homestay
      state.Id = action.payload.homestayId


      localStorage.setItem('bookingdetails',JSON.stringify(action.payload))
      

     
  },

  proceedToCheckout :(state, action)=>{
    console.log('action.payload', action.payload)
    state.total = action.payload.total
    state.additionalUserDetail.PhoneNumber = action.payload.phoneNumber
    state.additionalUserDetail.Address = action.payload.address
    state.additionalUserDetail.Country = action.payload.country
    state.additionalUserDetail.specialRequest = action.payload.specailRequest




  },

    incrementGuests:(state,action)=>{

      state.guests += action.payload.guests
    },
    decrementGuests:(state,action)=>{
      if(state.guests>0){
        state.guests -= action.payload.guests

      }

    },
    incrementDays:(state,action)=>{
      state.days += action.payload.days
    },
    decrementDays:(state,action)=>{
      if(state.days>0){
        state.days -= action.payload.days

      }
    },
  
  bookingSlice:(state,action)=>{
    console.log(action.payload)
    
  }
    
  },
})

// Action creators are generated for each case reducer function
export const { getminmax, bookAStay , proceedToCheckout, bookingSlice} = homeStaySlice.actions

export default homeStaySlice.reducer