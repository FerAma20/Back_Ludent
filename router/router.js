'use strict'

var express = require('express');

const CyberSourceController = require('../controllers/CyberSourceController');
const ProductController = require('../controllers/ProductsController');
const ClientsController = require('../controllers/ClientsController');
const VerifyController = require('../controllers/UsersController')


var router = express.Router();

/** Ruta default */
router.get('/', (req, res)=> {
    console.log('test')
    res.status(200).send('exitoso')
});

//*Routas productos APIs */
router.get('/epon/readAllProducts', ProductController.readAllProduct)

//*Routas productos APIs */
router.get('/api/readAllClients', ClientsController.readAllClients)
router.post('/api/createClients', ClientsController.createClient)
router.put('/api/deleteClient', ClientsController.deleteClient )


//*Routas users APIs */
router.post('/api/verifyUser', VerifyController.verifyUser)

module.exports = router;
