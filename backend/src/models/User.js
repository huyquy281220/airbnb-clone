const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstName: { type: String, minLength: 2, maxLength: 50, trim: true },
        lastName: { type: String, minLength: 2, maxLength: 50, trim: true },
        email: { type: String, require: true, unique: true, trim: true },
        password: { type: String, require: true, min: 8, max: 30 },
        phone: { type: Number, unique: true, trim: true, min: 8, max: 15 },
        gender: { type: String, enum: ["male", "female", "other"] },
        address: { type: String, maxLength: 255 },
        image: { type: String, maxLength: 4000 },
        description: { type: String },
    },
    {
        timestamps: true,
    }
);

UserSchema.plugin(AutoIncrement, { inc_field: "userId" });

module.exports = mongoose.model("Users", UserSchema);
