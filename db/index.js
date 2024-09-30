const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ranjit:iamranjit@cluster0.ehxzb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

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

})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}