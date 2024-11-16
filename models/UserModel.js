const { Schema, model } = require('../connection');//schema aur model predefined hai agr name chnge kiya toh use nhi hoga

const mySchema = new Schema({
    name : String,
    email : {type: String, unique: true},
    password : { type: String, required: true},
    createdAt: { type: Data, default: Date.now},//ye date time record krega ki kis time pr form submit hua
});

module.exports = model('users', mySchema);