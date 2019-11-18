// const express = require('express')
// const app = express()

// connect Mongoose to your DB
// var mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nodeappkuldeep');
var express        =        require("express");
var bodyParser     =        require("body-parser");
var accessDataBase =        require('./accessdatabase');
var app            =        express();
var getNamesFromData= accessDataBase.getNamesFromData;
const port = 3000
const PORT = process.env.PORT || 3000;
const cool = require('cool-ascii-faces')
require('dotenv').config()

// console.log('Hi')
// //Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/processCommand', function(request,response){
    // console.log(request.body);
    command =request.body.command;
    requestMaker = request.body.requestMaker;
    posTaggedCommand = request.body.posTaggedCommand;
     
    available_nouns=[];
    for(let i =0;i<posTaggedCommand.length;i+=2){
        if(i+1 < posTaggedCommand.length){
            var cateogory = posTaggedCommand[i+1];
        if(cateogory=="NN"||cateogory == "NNS"||cateogory =="NNP"||cateogory =="NNPS"){
                 available_nouns.push(posTaggedCommand[i]);
        }
        }else{
            continue;
        }
    }
    //check from db whether this request maker is valid or not
    if(requestMaker==null||requestMaker.length===0){
        response.send({
            success:false,
            error:"Invalid ID of requestMaker"
        });
    console.log("Invalid Id of request maker");
        return;
    }

    console.log(available_nouns);
    //check from database for the avavilable names if part found store there email ids in a set 
    accessDataBase.getNamesFromData(available_nouns,function(getNames){
        response.send({
            availablenames:getNames,
            status:"OK"
        });
    });
});

app.get('/',function(request,response){
    console.log(request.ips);
    response.send("ok");
});

app.post("/schedule_meeting",function(request,response){
    console.log(request.body);
    response.send("ok");
})

app.get('/processCommand',function(request,response){
    console.log( request);
    response.send('OK');
    });

app.get('/verify_meeting_key/:meeting_key',(req,res)=>{
    res.send("key verified");
})

app.get('/verify_otp/:otp',(req,res)=>{
    res.send({
        SESSION_ID:'2_MX40NjQ1OTUzMn5-MTU3NDA5NDI3MjMwOX5CTTlXT2dqa002cFpvWXpLOU9kLzVtZFh-fg',
        TOKEN:'T1==cGFydG5lcl9pZD00NjQ1OTUzMiZzaWc9NTFmZDc4ZWRiYzRiM2Q5YzIzZDZlZDUxOWM4MWQxOGNkMTIzOTUwYzpzZXNzaW9uX2lkPTJfTVg0ME5qUTFPVFV6TW41LU1UVTNOREE1TkRJM01qTXdPWDVDVFRsWFQyZHFhMDAyY0ZwdldYcExPVTlrTHpWdFpGaC1mZyZjcmVhdGVfdGltZT0xNTc0MDk0MzIxJm5vbmNlPTAuMzI2MjQyNDc4OTUwOTI2NCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTc0Njk5MTIwJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9'
        ,API_KEY:'46459532'    });
    console.log(req);
})

    
// app.listen(5000,function(){
//     console.log("Started Voice Assistant server on PORT 5000....");
// })
// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/dhankhar', (req, res) => res.send('Hello dhankhar!'))
app.get('/cool', (req, res) => res.send(cool()))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))