// import React from 'react'
import Navbar from './Navbar'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetAllBookingsQuery } from '../features/APISlices/homeStayAPI';




const Bookings = () => {
  const {data} = useGetAllBookingsQuery()
  const {bookings}= data;
  // console.log('allbookingdata',data)


  return (
    <div>
        <div >
        <Navbar isHomePage={false}/>

        </div>
        <div>
        <span>Your Booking</span>
            <div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="border-2 border-r ">S.N</TableCell>
            {/* <TableCell align="right">User id</TableCell> */}
            {/* <TableCell align="right">User Name</TableCell> */}
            {/* <TableCell align="right">Email</TableCell> */}
            {/* <TableCell align="right">Phone No</TableCell> */}
            {/* <TableCell align="right">Address</TableCell> */}
            {/* <TableCell align="right">Country</TableCell> */}
            <TableCell className="border-2 border-r " align="right">HomeStay Booked</TableCell>
            <TableCell className="border-2 border-r " align="right">No. Of Guests</TableCell>
            {/* <TableCell align="right">Home Stay Id</TableCell> */}
            <TableCell className="border-2 border-r " align="right">Payment id</TableCell>
            <TableCell className="border-2 border-r " align="right">Payment Status</TableCell>
            
            {/* <TableCell align="right">Paid At</TableCell>
            <TableCell align="right">Booking Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((item,id) => (
            <TableRow
            // pageSizeOptions={[5, 10]}
              key={item._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="border-2 border-r " component="th" scope="bookings">
                {id+1}
              </TableCell>
              {/* <TableCell align="right">{item.user}</TableCell>
              <TableCell align="right">{item.userdetail.username}</TableCell>
              <TableCell align="right">{item.userdetail.email}</TableCell>
              <TableCell align="right">{item.userdetail.phoneNo}</TableCell>
              <TableCell align="right">{item.userdetail.address}</TableCell>
              <TableCell align="right">{item.userdetail.country}</TableCell> */}
              <TableCell className="border-2 border-r " align="right">{item.bookingDetail.homeStayName}</TableCell>
              <TableCell className="border-2 border-r " align="right">{item.bookingDetail.noOfGuests}</TableCell>

              <TableCell className="border-2 border-r " align="right">{item.paymentInfo.id}</TableCell>

              <TableCell className="border-2 border-r " align="right">{item.paymentInfo.status}</TableCell>

              <TableCell className="border-2 border-r " align="right">{item.bookingDetail.orderStatus}</TableCell>


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

export default Bookings