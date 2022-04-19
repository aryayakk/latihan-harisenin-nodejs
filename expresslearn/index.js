// import luasSegitiga from './segitiga' <-- ini abaikan aja
// import module express
const express = require('express')
// inisiasi intance express
const app = express()
const morgan = require('morgan')
// define port
const port = 3000

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
}
app.use(logger)

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


// localhost: port (yang ini baru 1 adress)
app.get('/ikimaszeh', (req, res) => res.send('Ini Express JS maszeeh'))
app.get('/categories', (req, res) => res.send('Sepatu dan Sandal'))
// berbentuk array
app.get('/products', (req, res) => {
    res.send(['Nokia', 'Apple', 'Samsung'])
})
// berbentuk array of object
app.get('/orders', (req, res) => {
    res.send([
        {
            id: 1,
            paid: false,
            user: "Bebe"
        },
        {
            id: 1,
            paid: true,
            user: "Arya"
        },
        {
            id: 1,
            paid: false,
            user: "Rihanna"
        },
    ])
})

app.post('/products', (req, res) => {
    res.send("Berhasil menambahkan produk")
})

const router = require('./routemid')
app.use(router)

app.use((req, res) => {
    res.send("ERROR")
})

// endpoint, misalnya:
//  /products
//  /promo
//  /ongkir
//  /category
//  /dan lain-lain

// running
app.listen(port, () => console.log(`Server Running on Port ${port}`))
