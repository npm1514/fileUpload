var mongoose = require('mongoose');

var ImageModel = new mongoose.Schema({
    url: {type: mongoose.Schema.Types.Mixed},
    title: String
});

module.exports = mongoose.model('Image', ImageModel);
