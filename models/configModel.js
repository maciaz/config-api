var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var configModel = new Schema({
    client: {type: String},
    version: {type: String},
    key: {type: String},
    value: {type: String}
});

module.exports = mongoose.model('Config', configModel);