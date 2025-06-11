const express = require('express')
const path = require('path')
const mysql2 = require('mysql2')
const app = express();

const database = mysql2.createConnection({
    host:"127.0.0.1",
    user:"root_user",
    password:"enter your password",
    database:"traveldata"
});
database.connect((error) => {
    if(error){
        return console.error(error)
    }
    console.log("mysql database is connected...")
})

//passing the details
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=> {
const htmlfile = path.join(__dirname, 'index.html');
res.sendFile(htmlfile)
})

app.post('/handleform', (req,res)=> {
    try{
        const {userid,cname,email,contact,address,dest,dep,arrival} = req.body;
        const SQL_COMMAND = "INSERT INTO bookinginfo (User_Id, CName, Email, Contact, Address, Destination, Departure, Arrival) VALUES (?,?,?,?,?,?,?,?)";
        database.query(SQL_COMMAND,[userid,cname,email,contact,address,dest,dep,arrival],(err,result) => {
            if(err){
                console.error(err);
                return res.send("booking not done")
            }
            console.log(result);
            res.send("booking done")
        })
    }
    catch(err){
        console.error(err);
        res.send("booking not done")
    }
})

app.post('/feedbackform', (req,res)=> {
    try{
        const {email,feedback} = req.body;
        const SQL_COMMAND = "INSERT INTO feedbackinfo (Email, Feedback) VALUES (?,?)";
        database.query(SQL_COMMAND,[email,feedback],(err,result) => {
            if(err){
                console.error(err);
                return res.send("task not done")
            }
            console.log(result);
            res.send("task done")
        })
    }
    catch(err){
        console.error(err);
        res.send("task not done")
    }
})
app.listen(4000, ()=> {
    console.log("server listening!!!!")
})