// import React from 'react'
import Navbar from './Navbar';


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetAllBookingsQuery } from '../features/APISlices/homeStayAPI';





const Allbookings = () => {
    const {data} = useGetAllBookingsQuery()
    const bookings= data && data.bookings;
    console.log('allbookingdata',data)

   

  return (
    <div>
        <div >
        <Navbar isHomePage={false}/>

        </div>
        <div className='m-10'>
            <span>All Bookings</span>
            <div>
            <TableContainer component={Paper} className='border-red-500 border-2'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='border-r-2 text-lg font-bold border-red-500 '>S.N</TableCell>
            <TableCell align="right" className='border-r-2 border-red-500 text-lg font-bold '>User id</TableCell>
            <TableCell align="right" className='border-r-2 text-lg font-bold border-red-500 '>User Name</TableCell>
            <TableCell align="right" className='border-r-2 text-lg font-bold border-red-500'>Email</TableCell>
            <TableCell align="right" className='border-r-2 text-lg font-bold border-red-500'>Phone No</TableCell>
            <TableCell align="right" className='border-r-2 text-lg font-bold border-red-500'>Address</TableCell>
            <TableCell align="right" className='border-r-2 text-lg font-bold border-red-500'>Country</TableCell>
            <TableCell align="right" className='border-r-2 text-lg font-bold border-red-500'>HomeStay Booked</TableCell>
            <TableCell align="right" className='border-r-2 text-lg font-bold border-red-500'>No. Of Guests</TableCell>
            {/* <TableCell align="right">Home Stay Id</TableCell> */}
            <TableCell align="right" className='border-r-2 border-red-500'>Payment id</TableCell>
            <TableCell align="right" className='border-r-2 border-red-500'>Payment Status</TableCell>
            {/* <TableCell align="right">Paid At</TableCell>
            <TableCell align="right">Booking Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings && bookings.map((item,id) => (
            <TableRow
            // pageSizeOptions={[5, 10]}
              key={item._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="bookings" className='border-r-2 border-red-500'>
                {id+1}
              </TableCell>
              <TableCell align="right"  className='border-r-2 border-red-500'>{item.user}</TableCell>
              <TableCell align="right" className='border-r-2 border-red-500'>{item.userdetail.username}</TableCell>
              <TableCell align="right" className='border-r-2 border-red-500'>{item.userdetail.email}</TableCell>
              <TableCell align="right" className='border-r-2 border-red-500'>{item.userdetail.phoneNo}</TableCell>
              <TableCell align="right" className='border-r-2 border-red-500'>{item.userdetail.address}</TableCell>
              <TableCell align="right" className='border-r-2 border-red-500'>{item.userdetail.country}</TableCell>
              <TableCell align="right" className='border-r-2 border-red-500'>{item.bookingDetail.homeStayName}</TableCell>
              <TableCell align="right" className='border-r-2 border-red-500'>{item.bookingDetail.noOfGuests}</TableCell>

              <TableCell align="right" className='border-r-2 border-red-500'>{item.paymentInfo.id}</TableCell>

              <TableCell align="right" className='border-r-2 '>{item.paymentInfo.status}</TableCell>

              {/* <TableCell align="right" className='border-r-2 border-red-500'>{item.bookingDetail.orderStatus}</TableCell> */}


            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            </div>
        </div>

    </div>
  )
}

export default Allbookings