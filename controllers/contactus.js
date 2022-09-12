const rootDir = require('../utils/path')

const path = require('path')

exports.getContactus = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'))
}

exports.postContactus = (req, res, next) => {
    res.redirect('/success')
}