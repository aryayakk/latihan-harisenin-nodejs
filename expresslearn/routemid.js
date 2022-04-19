const express = require('express')
const router = express.Router()
const controller = require('./controller/exampleController')

router.use((req, res, next) => {
    console.log('time', Date.now());
    next()
})

router.get('/promo', (req, res) => {
    res.send('Promo')
})

router.get('/controller', controller.example)


module.exports = router
