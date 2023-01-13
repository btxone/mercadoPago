const express = require('express');
const router = express.Router();
const { createPreference } = require('./controllerMercadoPago');

router.get('/generar', createPreference);
router.get('/success', (req, res) => {
    res.send('Pago realizado con éxito');
});

router.post('/notification', (req, res) => {
    console.log('Notificación recibida');
    res.send('Notificación recibida');
});

module.exports = router;
