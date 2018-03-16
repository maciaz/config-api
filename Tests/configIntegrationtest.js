var should = require('should'),
    request = require('supertest'),
    app = require('../app.js'),
    mongoose = require('mongoose'),
    Config = mongoose.model('Config'),
    agent = request.agent(app);

describe('Config create test', function(){
    it('Should allow a config to be posted and return _id', function(done){
        var configPost = {client: 'TestClient', version: 'TestVersion', key:'TestKey', value: "TestValue"}

        agent.post('/api/config')
            .send(configPost)
            .expect(200)
            .end(function(err, results){
                results.body.should.have.property('_id');
                done();
            })
    });

    afterEach(function(done){
        Config.remove().exec();
        done();
    });
});