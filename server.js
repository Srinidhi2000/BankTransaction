const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path=require('path');
const serveStatic=require('serve-static');
const userController=require(path.join(__dirname,'./controllers/userController'));
require(path.join(__dirname,'./db'));
const port = process.env.PORT||4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'client/build')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
//Endpoints
app.route('/userdata').get(userController.listAllUsers).post(userController.createNewUser);
app.route('/userdata/:_id').get(userController.readUser).put(userController.updateUser).delete(userController.deleteUser);
app.listen(port, function() {
    console.log("Server is running on Port: " + port);
});
