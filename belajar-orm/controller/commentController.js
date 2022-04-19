const { Article, Comments } = require('./../models');
const { validationResult } = require('express-validator');

module.exports = {
    create: (req, res) => {

        const errorFormatter = ({location, msg, param, value, nestedErrors}) => {
            return {
                "key": param,
                "message": msg
            }
        }
        const result = validationResult(req).formatWith(errorFormatter)

        if(!result.isEmpty()) {
            return res.status(400).json({
                status: "error", 
                code: 400, 
                errors: result.array() 
            })
        }

        Comments.create(req.body).then(result => {
            res.status(201).json ({
                message: "Berhasil CREATE Data Comments", 
                data: result,
                status: "success",
                code: 201
            })
        })
    },
}