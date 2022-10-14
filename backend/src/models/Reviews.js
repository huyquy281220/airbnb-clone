const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reservationId: { type: Schema.Types.ObjectId, ref: "Reservation" },
    rating: { type: Number },
    comment: { type: String },
});

module.exports = mongoose.model("Reviews", ReviewSchema);
