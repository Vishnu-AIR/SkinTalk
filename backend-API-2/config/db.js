const mongoose =require('mongoose');


mongoose.connect('mongodb://localhost:27017/skin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const connection = mongoose.createConnection('mongodb://localhost:27017/skin').on('open',()=>{
    console.log("Connected Baby")
}).on('error',()=>{
    console.log("Not Connected")
})

module.exports = connection;
