const mongoose  = require('mongoose')

const PostSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
})

module.exports = mongoose.model('Posts',PostSchema)