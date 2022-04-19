var express = require('express');
var router = express.Router();
const { Article } = require('./../models');
const auth = require('./../controller/authController');

const { store } = require('./../middleware/validation/article')
const restrict = require('./../middleware/restrict')

router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/me', restrict, auth.me);


module.exports = router;
