const app = require('./app')
require('dotenv').config()

app.listen(process.env.PORT,()=>{
    console.log(`server started on port:${process.env.PORT}`)
})