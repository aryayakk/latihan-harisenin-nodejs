const { Article, Comments, Users } = require('./../models');
const { validationResult } = require('express-validator');

module.exports = {
    register: (req, res) => {

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

        Users.register(req.body).then(result => {
            res.status(201).json ({
                message: "Berhasil Register", 
                data: result,
                status: "success",
                code: 201
            })
        })
    },
    login: (req, res) => {

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

        Users.authenticate(req.body).then(result => {
            res.status(200).json ({
                message: "Berhasil Login", 
                data: Users.generateToken(result),
                status: "success",
                code: 200
            })
        })
    },
    me: (req, res) => {
        const currentUser = req.user
        res.status(200).json ({
            status: "success",
            code: 200,
            data: currentUser
        })
    }
}