const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true, minLength: 2, maxLength: 50, trim: true },
    lastName: { type: String, required: true, minLength: 2, maxLength: 50, trim: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, min: 8, max: 30 },
    phone: { type: Number, unique: true, trim: true, min: 8, max: 15 },
    address: { type: String, maxLength: 255 },
});

UserSChema.plugin(AutoIncrement, { inc_field: "_id" });

module.exports = mongoose.model("User", UserSchema);
