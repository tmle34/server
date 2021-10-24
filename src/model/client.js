const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    fName:{
        type:String,
        require:true,
        trim:true
    },
    lName:{
        type:String,
        require:true,
        trim:true
    },
    phoneNumber:{
        type:Number,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
    },
    hAddress:{
        type:String,
        require:true,
    },
    pass:{
        type:Boolean,
    },
    bName:{
        type:String,
    },
    skills:{
        type:Array,
        items:{
            type:String
        }
    }
})

const Client = mongoose.model('Client',clientSchema)
module.exports = Client