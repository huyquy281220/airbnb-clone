class TestController {
    home(req,res,next) {
        res.send("Hello");
    }

    cors(req,res,next) {
        res.json({msg:'CORS test'})
    };
}

module.exports = new TestController();