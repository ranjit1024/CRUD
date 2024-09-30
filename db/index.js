const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ranjit:iamranjit@cluster0.ehxzb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const AdminSchema = new mongoose.Schema({
    
})

const UserSchema = new mongoose.Schema({

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