var express = require('express');
var router = express.Router();

const comment = require('../controller/commentController');

router.post('/', comment.create);

module.exports = router;
