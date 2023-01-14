const express = require('express');
const productRouter = require('./routes/product')
// const categoryRouter = require('./routes/category')
// const userRouter = require('./routes/user')
// const reviewsRouter = require('./routes/reviews')
// const cartRouter = require('./routes/cart')
 const mercadoPagoRouter = require('./routes/mercadoPago')
const morgan = require('morgan')


const server = express();


server.use(morgan("dev"));




server.use(express.json());

server.use('/', productRouter)

// server.use('/', categoryRouter)

// server.use('/', userRouter)

// server.use('/', reviewsRouter)

// server.use('/', cartRouter)

server.use('/', mercadoPagoRouter)

module.exports = server;