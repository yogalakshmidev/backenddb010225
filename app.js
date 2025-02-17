// to install express
const express = require('express');
const userRouter=require('./routes/userRoutes');
// create app
const app = express();

app.use(express.json());
app.use('/users', userRouter);

//app.get('/users',(req,res)=> res.json({message:"User world"});
// })
// export
module.exports = app;