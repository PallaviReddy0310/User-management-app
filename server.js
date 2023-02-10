//create express app
const { request, response } = require('express');
const express=require('express');
const { DBRef } = require('mongodb');
const app= express();

require('dotenv').config()

const port= process.env.PORT || 4000

app.listen(port,()=>console.log('Web Server Running on Port 4000...'))

//get mongo client
const mclient=require('mongodb').MongoClient;

const path= require('path');

//connect react build
app.use(express.static(path.join(__dirname,'./build')))

//connect db using mongo client
mclient.connect('mongodb://127.0.0.1:27017')
.then(dBRef=>{
    //connect db object
    const dbObj= dBRef.db('sampledb');

    //connect db collection
    const UsersCol= dbObj.collection('UserCol');

    //share collections with API's
    app.set('UserCol',UsersCol);

    console.log('Database connection successful !!!')
})
.catch(err=>console.log('Error in connecting dataBase : ',err))

//import userApi
let usersAPI= require('../new_app/APIS/UserAPI');

app.use('/users-api',usersAPI);

//middleware for page refresh
const pageRefresh= (request,response,next)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
}
app.use('*',pageRefresh)

//middleware for invalid path
const invalidPath=(request,response,next)=>{
    response.send({message:'Invalid path'})
}

app.use(invalidPath);

//middleware for errors
const dealWithErrors=(error,request,response,next)=>{
    response.send({message:error.message})
}

app.use(dealWithErrors);