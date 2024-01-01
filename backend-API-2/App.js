const express =require('express');
const body_parser = require('body-parser')
const userRouter = require('./routers/user.router')
const slotschedule = require('./routers/slotschedule.router')
const testapi = require('./routers/todo.router')
const cors= require("cors");


//const staticpath= path.join(__dirname,"./public")


const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Replace * with the specific origin you want to allow
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


app.use(cors())
app.use(body_parser.json())

app.use('/',userRouter)

app.use('/',slotschedule)

//app.use('/',testapi)

module.exports = app;

