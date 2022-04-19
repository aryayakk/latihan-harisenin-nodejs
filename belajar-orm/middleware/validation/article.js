const { check } = require('express-validator')

exports.store = [
    check('title').notEmpty().withMessage("Judul tidak boleh kosong"),
    check('body').notEmpty().withMessage("Body tidak boleh kosong")
]