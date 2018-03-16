var should = require('should'),
    sinon = require('sinon');

describe('Config Controller Test', function(){
    describe('Post', function(){
        it('should have all arguments filled (client, version, key, value)', function(){
            var Config = function(config){this.save = function(){}};

            var req = {
                body: {
                    client: 'TestClient'
                }
            }

            var res = {
                status: sinon.spy(), 
                send: sinon.spy()
            }

            var configController = require('../Controllers/configController')(Config);
            
            configController.post(req,res);

            res.status.calledWith(400).should.equal(true);
            res.send.calledWith('Client, version, key and value are required').should.equal(true);
        });
    });
});