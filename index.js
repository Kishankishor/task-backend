const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const UserRouter = require("./routes/user")

const host = 8000
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to mongodb')
}).catch((err)=>{
    console.log(err)
})


app.use(cors())
app.use(express.json())


app.use('/user' , UserRouter )




app.listen(host , ()=>{
    console.log(`server listening on ${host}`)
})