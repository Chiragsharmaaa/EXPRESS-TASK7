const express = require('express')
const path = require('path')

const router = express.Router()
const contactusControllers = require('../controllers/contactus')


router.get('/contactus', contactusControllers.getContactus)

router.post('/contactus',contactusControllers.postContactus)

module.exports = router