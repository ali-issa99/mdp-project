const mongoose = require('mongoose');
const Schema = mongoose.Schema;


require('mongoose-currency').loadType(mongoose);


const robobtactionSchema = new Schema({

    direction: {
        type:String,
        required: true,

    },
    distance: {
        type: Number,
        required: true,

    },
    speed: {
        type: Number,
        required: true,

    }
},
{
    timestamps: true
});


var action = mongoose.model('robotaction', robobtactionSchema);

module.exports = action;