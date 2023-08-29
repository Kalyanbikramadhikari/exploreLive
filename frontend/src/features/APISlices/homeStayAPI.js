import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const homeStayApi = createApi({
  reducerPath: 'homeStayApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  endpoints: (builder) => ({
    getAllHomeStays: builder.query({
      query: (params) => {
        console.log(params)
        return{
          url:`/hotels?min=${params.min || 0}&max=${params.max || 100000000}&price_order=${params.asc}&desc_order=${params.desc}&distance_asc=${params.dasc}&distance_desc=${params.ddesc}`,
    
      }  
    }
      }),

    getFeaturedCities: builder.query({
      query:() => 'hotels/countByCities?cities=kathmandu,Bhaktapur,Lalitpur,Pokhara,Chitwan,Solukhumbu',
    }),


    getHomeStaysInCity: builder.query({
      query:(params)=> {
        console.log('city',params.city,params.min,params.max,params.asc)
        return{
          url: `/hotels/homestaysincity/${params.city}?min=${params.min || 0}&max=${params.max || 100000000}&price_order=${params.asc}&desc_order=${params.desc}&distance_asc=${params.dasc}&distance_desc=${params.ddesc}`
  
        }
    }
    }),
    searchHomeStayInCity:builder.query({
      query:(params)=>{
        console.log('city in searchhomeapi',params)
        return{
          url:`/hotels/search?city=${params.city}&min=${params.min || 0}&max=${params.max || 100000000}&price_order=${params.asc}&desc_order=${params.desc}&distance_asc=${params.dasc}&distance_desc=${params.ddesc}`
        }
      }
    }),
    getSingleHomestay: builder.query({
      query:(id)=> {
        console.log('id',id)
        return{
          url: `/hotels/${id}`
  
        }
    }
    }),
    // getminmaxcities: builder.query({
    //   query:(min, max)=>{
    //     console.log('min, max', min, max)
    //     return{
    //       url:`/hotels/homestaysincity?min_price=${min}&max_price=${max}`

    //     }
    //   }

    // }),

    login: builder.mutation({
      query:(data)=> {
        console.log('data',data)
        return{
          url: '/login', 
          method: 'POST',
          body: data,
          headers:{
            'Content-type':'application/json;charset=UTF-8',
          }
        }
      },
    
    
    }),
    register: builder.mutation({
      query:(data)=> {
        for (const [key, value] of data.entries()) {
          console.log(key, value);
        }        
        return{
          url: '/register', 
          method: 'POST',
          body: data,
          headers:{
            // 'Content-type':'application/json;charset=UTF-8',
            'Content-type':'multipart/form-data'

          }
        }
      },
    
    
    }),
    createNewHomestay: builder.mutation({
      query:(data)=> {
        console.log('data',data)
        return{
          url: 'hotels/new', 
          method: 'POST',
          body: data,
          headers:{
            'Content-type':'application/json;charset=UTF-8',
          }
        }
      },
    
    
    }),
    stripePayment: builder.mutation({
      query:(data)=> {
        console.log('hello')
        console.log('data',data)
        return{
          url: 'hotels/payment/process', 
          method: 'POST',
          body: data,
          headers:{
            'Content-type':'application/json;charset=UTF-8',
          }
        }
      },
    
    
    }),
    createBooking: builder.mutation({
      query:(data)=> {
        console.log('data',data)
        return{
          url: 'hotels/booking/new', 
          method: 'POST',
          body: data,
          headers:{
            'Content-type':'application/json;charset=UTF-8',
          }
        }
      },
    
    
    }),
    getAllBookings: builder.query({
      query: (params) => {
        return{
          url:'hotels/admin/bookings'
    
      }  
    }
    }),
    getLoggedInUserBooking: builder.query({
      query: (params) => {
        return{
          url:'hotels/user/bookings'
    
      }  
    }
      }),



    



  }),


});

  



  export const {useGetAllHomeStaysQuery,useStripePaymentMutation,useGetLoggedInUserBookingQuery,useGetAllBookingsQuery,useGetminmaxcitiesQuery, useCreateBookingMutation, useCreateNewHomestayMutation, useSearchHomeStayInCityQuery, useLoginMutation, useRegisterMutation ,useGetSingleHomestayQuery, useGetFeaturedCitiesQuery, useGetHomeStaysInCityQuery} = homeStayApi