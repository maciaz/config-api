var express = require('express');
var _ = require('underscore');

var routes = function(Config){
    var configRouter = express.Router();
    var configController = require('../Controllers/configController')(Config);

    configRouter.route('/')
        .post(configController.post)
        .get(configController.get);

    configRouter.route('/:client/:version')
        .get(function(req, res){
            Config.aggregate([
                {$match: {client: req.params.client, version: req.params.version}},
                {$sort: {_id: 1}},
                {$group: { _id: '$key', lastValue: {$last: '$value'}}}
            ], (err, data) => {
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(data);
                }
            });
        });

    return configRouter;
};

module.exports = routes;