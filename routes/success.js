const express = require('express')

const path = require('path')

const router = express.Router()

const successController = require('../controllers/success')

const rootDir = require('../utils/path')

router.get('/success', successController.getSuccess)

module.exports = router