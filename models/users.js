const mongoose= require ('mongoose');
const {Schema}= mongoose;

const userSchema = new Schema({
    fullName:{
        type:String,
        required:[true, "FullName is required"]
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique: true
    },
    age:{
        type: Number,
        required:[true, "age is required"],
    }
})

module.exports= mongoose.model('User',userSchema)