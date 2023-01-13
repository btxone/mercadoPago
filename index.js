require('dotenv').config();
const express = require('express');
const http = require('http');

const app = express();

const port = process.env.PORT || 3000;


app.get('/generar', (req, res) => {
let preference = {
    back_urls: {    
        success: 'https://mercadopago-production.up.railway.app/success',
    },
    items: [
        {
            title: 'Mi producto',
            unit_price: 100,
            quantity: 1,
            currency_id: 'UYU',
        },
    ],
     Notification_url: 'https://mercadopago-production.up.railway.app/notification', 
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
    access_token: "APP_USR-4514524646340245-011201-7ee404df0ee8dc85e4cc8fea86abc1d7-1285289757",
});




// http.createServer(app).listen(app.get('port'), () => {
//     console.log(` HTTP escuchando en puerto ${port}`)
// });


app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`)
});