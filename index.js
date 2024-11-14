// importing express
const express = require('express');  //nodejs run time environment hai or nextjs framework hai website ko fast kata hai
const UserRouter = require('./routers/userRouter');

// create an express app
const app = express();  //server start krne ke liye ye do line likhna compuldory h with kuch chsngrs text or run npm i etc
const port = 5000;

//middleware
app.use('/user',UserRouter);

app.get('/',(req,res) => {
    res.send('response from express')
});

//routes or endpoints khte hai ise
//for /add 
app.get('/add',(req,res) => {
    res.send('response from express')
});  // localhost5000:/add likhenge to bhi aa jayega

//for /getall (for lc:5000/getall se bhi run hoga page)
app.get('/getall',(req,res) => {
    res.send('response from express')
});

//for /delete
app.get('/delete',(req,res) => {
    res.send('response from express')
});

// starting the server
app.listen(port,() => {console.log('Server started')}); // nodemon run krta padta h server pe run krte k liye development ke liye kaam aata hai sirf ye
