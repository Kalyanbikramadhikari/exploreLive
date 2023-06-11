require('dotenv').config({path:'../.env'})


module.exports = (err, req, res, next)=>{
    console.log('err.statusCode', err.statusCode)
    
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error'
    // console.log(err.message)
    // console.log(err.statusCode)
    console.log(process.env.PORT)
    console.log(process.env.NODE_ENV)
    const devprod = process.env.NODE_ENV
    
    
    if(process.env.NODE_ENV =='DEVELOPMENT '){
       console.log('from error Middleware process.env.node_env')
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }

    else if(process.env.NODE_ENV ==="PRODUCTION "){
        console.log('error')
        let error = {...err}

        error.message = err.message

        res.status(error.statusCode).json({
            success: false,
            
            errMessage: error.message || 'Internal server error',
            
        })
    }
    else{
        

        

        res.status(err.statusCode).json({
            success: false,
            errormessage: err.message,
            errStack: err.stack
        })
    }
}