const mongoose = require('mongoose'); //ek frame hai jo driver ki trha kaam krta h

const url = "mongodb+srv://chaurasiaritisha7:chaurasiaritisha7@cluster0.zvwxe.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";

//asynchronous function  - Promise Object return krta hai
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});
//console.log("other statement");//ye phle show krega result se kyuki mongo time leta hai result dene mein

module.exports = mongoose;