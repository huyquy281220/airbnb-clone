const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        homeId: { type: Schema.Types.ObjectId, ref: "Home" },
        startDate: { type: Date },
        endDate: { type: Date },
        price: { type: Number },
        total: { type: Number },
    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('Reservations', ReservationSchema);