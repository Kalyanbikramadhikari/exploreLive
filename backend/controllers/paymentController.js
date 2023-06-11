
require('dotenv').config({path:'backend/.env'})
console.log('process.env.STRIPE_SECRET_KEY', process.env.STRIPE_SECRET_KEY)
console.log('process.env.STRIPE_API_KEY', process.env.STRIPE_API_KEY)

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports.stripePayment = async(req,res)=>{
    console.log('hi into stripe payment')
    console.log('stripe payment',req.body)
    const paymentIntent = await stripe.paymentIntents.create({
        amount:req.body.amount,
        currency:'usd',
        metadata:{integration_check: 'accept_a_payment'}
    })
    // console.log('client secret',paymentIntent.client_secret)
    res.status(200).json({
        success:true,
        client_secret: paymentIntent.client_secret
    })

}
//send stripe API key => /stripeapi
module.exports.stripeAPIkey = async(req,res)=>{
    console.log('process.env.STRIPE_API_KEY', process.env.STRIPE_API_KEY)
    
    res.status(200).json({
        success:true,
        stripeApiKey: process.env.STRIPE_API_KEY
    })

}