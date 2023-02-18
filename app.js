const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
// const MONGO_API= process.env.MONGO_URI
require('dotenv').config()
// const MONGO_API ='mongodb+srv://Suyashat2002:Suyashat2002@cluster0.gio1zgn.mongodb.net/Enquiry?retryWrites=true&w=majority'
cors({
    origin: '*'
})
const Enquiry = require('./schema.js')
const app = express();
const port =4000;
app.use(cors())
app.use(express.json());
app.post('/Enquiry',async(req,res)=>{
    // console.log(req.body);
    try{
        // const data = await Enquiry.create(req.body);
        console.log(req.body);
        res.status(200).json({data: req.body})
    }catch(error){
        res.status(500).json({'msg':error});
    }
})

mongoose.connect(process.env.MONGO_URI)
.then(console.log('successfully connected to backend'))

app.listen(port,()=>{
    console.log(`This server is running on ${port}`);
})