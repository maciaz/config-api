var configController = function(Config){

    var post = function(req, res){
        var config = new Config(req.body);
        
        if(!req.body.client || !req.body.version || !req.body.key || !req.body.value){
            res.status(400);
            res.send('Client, version, key and value are required');    
        }
        else{
            config.save();
            res.status(201);
            res.send(config);
        }
    }

    var get = function(req, res){

        Config.find(function(err, configs){
            if(err)
                res.status(500).send(err);
            else
                res.json(configs);
        });
    }

    return{
        post: post,
        get: get
    }
};

module.exports = configController;