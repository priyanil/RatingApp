const express= require('express');
const mongoose= require("mongoose");
const app = express();
var userdetails= require("./model/regForm.model");
const getForm = require('./model/getForm.model');

//Connection to Database

var url= "mongodb+srv://priyanka:priyanka1234@mycluster.ggdzd.mongodb.net/RatingApp?retryWrites=true&w=majority"
var mongoDB= process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{useNewUrlParser: true})
.then(()=>{
  console.log("Connected to Database")
  })
  .catch(()=>{
   console.log('Connection Failed');

  });

  //Body Parser Code
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  
  app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin,X-Requested-With, Content-Type,Accept");
  
  res.setHeader("Access-Control-Allow-Methods","GET, POST");
  next();
  
  });


app.post("/form",(req,res,next)=>
{
  var userdata= new userdetails({
    name:req.body.user,
    email:req.body.email,
    password:req.body.password 
  })
  userdata.save();
  console.log(userdata)
})

app.get("/getForm",function(req,res){
   console.log('get request for all employees.')
   getForm.find({})
   .exec(function(err, forms) {
     if(err){
       console.log('Error retriving details')
     } else {
       res.json(forms);
     }
   })
})

app.use(express.json)

app.get("/getForm/:id",function(req,res){
  console.log('get request for single employee.')
  getForm.findById(req.params.id)
  .exec(function(err, forms) {
    if(err){
      console.log('Error retriving details')
    } else {
      res.json(form);
    }
  })
})



module.exports =app;