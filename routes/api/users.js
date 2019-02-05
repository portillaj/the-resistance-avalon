const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/books"
router.route("/").get(usersController.signIn)

router.route("/").post(usersController.createUser)


module.exports = router;