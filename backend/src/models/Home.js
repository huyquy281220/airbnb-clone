const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeSchema = new Schema({
    homeType: { type: String },
    guest: { type: String, require: true },
    bedrooms: { type: Number, require: true},
    beds:{type:Number, require: true},
    bath:{type:Number,require: true},
});

module.exports = mongoose.model('Home', HomeSchema);
