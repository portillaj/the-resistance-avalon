const router = require('express').Router();
const usersController = require('../../controllers/usersController');

router.route('/createUser').post(usersController.create)

module.exports = router;