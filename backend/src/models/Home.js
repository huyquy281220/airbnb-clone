const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeSchema = new Schema({
    ownId: { type: Schema.Types.ObjectId, ref: "Users" },
    homeType: { type: String },
    guest: { type: String, require: true },
    bedrooms: { type: Number, require: true },
    beds: { type: Number, require: true },
    bath: { type: Number, require: true },
    pricePerNight: { type: Number, require: true },
    checkIn: { type: Date, require: true },
    checkOut: { type: Date, require: true },
    amenities: { type: Array, require: true },
    latitude: {type: Number},
    longitude: {type: Number},
});

module.exports = mongoose.model("Home", HomeSchema);
