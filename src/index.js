
require('dotenv').config();

const server = require('./app')

const dbConnect = require('./db')

const morgan = require('morgan')

server.use(morgan("dev"));
// const routes = require('./routesIndex')

const port = process.env.PORT || 3000;

const key = process.env.MERCADO_KEY;



console.log(key);

server.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`)
});


dbConnect();









/*require('dotenv').config();
const express = require('express');
// const http = require('http');

const app = express();

const port = process.env.PORT || 3000;

const mercadoKey = process.env.MERCADO_KEY;


app.get('/generar', (req, res) => {
let preference = {
    back_urls: {    
        success: 'http://localhost:3000/success',
    },
    items: [
        {
            title: 'Mi producto',
            unit_price: 100,
            quantity: 1,
            currency_id: 'UYU',
        },
    ],
    //  Notification_url: 'http://localhost:3000/notification', 
};

mercadopago.preferences
    .create(preference)
    .then(function (response) {
        console.log(response.body.init_point);
        res.send(response.body.init_point);
    })
    .catch(function (error) {
        console.log(error);
    });
    
});

app.get('/success', (req, res) => {
    res.send('Pago realizado con éxito');
});


app.post('/notification', (req, res) => {
    console.log('Notificación recibida');
    res.send('Notificación recibida');
});



const mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: mercadoKey,
});




// http.createServer(app).listen(app.get('port'), () => {
//     console.log(` HTTP escuchando en puerto ${port}`)
// });


app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`)
});*/



