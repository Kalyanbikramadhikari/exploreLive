const multer = require('multer')
// const rac = require('')
const path = require('path')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{// cb represents the callback function
        cb(null,'backend/public/images')
    },
    filename : (req, file, cb)=>{
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))// path.extname is the name of the extension to be used
    }
})

const upload = multer({storage:storage})
module.exports = upload