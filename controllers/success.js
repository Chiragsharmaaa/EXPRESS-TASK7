const rootDir = require('../utils/path')

const path = require('path')

exports.getSuccess = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
}