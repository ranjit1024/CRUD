const mongoose = require("mongoose");

const dataBase = mongoose.connect("mongodb+srv://ranjit:iamranjit@cluster0.ehxzb.mongodb.net/course?retryWrites=true&w=majority&appName=Cluster0");


const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
})

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchesdCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
})

const CourseSchema = new mongoose.Schema({
    title:String,
    desripition:String,
    imageLink:String,
    price:Number
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}