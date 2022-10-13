const router = require('express').Router();
const authController = require('../controllers/AuthController');

router.post('/sign-up',authController.signUp);

module.exports = router;