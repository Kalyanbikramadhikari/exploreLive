const multer = require('multer')
// const rac = require('')
const path = require('path')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../public/images')
    },
    filename : (req, file, cb)=>{
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage:storage})