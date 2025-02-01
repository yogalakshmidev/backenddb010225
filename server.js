const mongoose=require('mongoose');
require('dotenv').config();
const express=require('express');
const app=express();
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("connected to MongoDB");
  // start the server
  app.listen(3001,()=>{
    console.log("server started on http://localhost:3001");
  })

})
.catch(err=>{
  console.log("Error connecting to MongoDB",err);
})