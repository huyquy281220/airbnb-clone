const User = require("../models/User");

class AuthController {
    //[POST] /auth/sign-up
    async signUp(req, res, next) {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });

        try {
            const newUser = await user.save();
            res.status(201).json(newUser);
        }catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new AuthController();
