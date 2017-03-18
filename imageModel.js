var mongoose = require('mongoose');

var ImageModel = new mongoose.Schema({
    url: {type: mongoose.Schema.Types.Mixed}
});

module.exports = mongoose.model('Image', ImageModel);
