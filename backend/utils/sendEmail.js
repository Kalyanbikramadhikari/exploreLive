
const nodemailer = require('nodemailer')

const sendEmail = async options =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: ''
    })
}