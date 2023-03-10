const app = require('./app')
require('dotenv').config({path:'backend/.env'})

const connectDatabase = require('./config/database')




//connect to database
connectDatabase();
app.listen(process.env.PORT,()=>{
    console.log(`server started on port:${process.env.PORT} in ${process.env.NODE_ENV}`)
})