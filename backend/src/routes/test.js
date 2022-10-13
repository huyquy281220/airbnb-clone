const router = require('express').Router();
const testController = require('../controllers/TestController')

router.get("/cors",testController.cors);
router.get("/",testController.home);

module.exports = router