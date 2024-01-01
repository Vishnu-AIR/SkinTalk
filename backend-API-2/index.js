const app = require('./App');
const db = require('./config/db')
const UserModel = require('./model/user.model')
const ToDoModel = require('./model/todo.model')
const path=require ('path');
const express=require('express')
const port = 3002;
const cors = require('cors')
const multer = require('multer');





// Define the storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    const filename = `${description}`;
    cb(null, filename);
  },
});

// Create a Multer instance with the storage configuration
const upload = multer({ storage: storage });

// Define a route for uploading images
app.post('/upload', upload.single('image'), (req, res) => {
    const uploadedImage = req.file;
    const description = req.body.description;
  
    if (!uploadedImage) {
      return res.status(400).send('No file uploaded.');
    }
  
    res.json({ image: uploadedImage, description: description });
  });




//app.use(express.static(staticpath))
app.use(cors())
app.post('/list', (req, res) => {
    const receivedData = req.body.userId; // Assuming the key is "data"
    console.log('Received data:', receivedData);
    res.send('Data received successfully');
  });

app.get('/getuserlist',(req,res)=>{
    res.send("Hello World!!gg")
})

app.listen(port,()=>{
    console.log(`Server listening on port http://localhost:${port}`);

})
