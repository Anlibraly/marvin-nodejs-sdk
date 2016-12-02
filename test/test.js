var _ = require('underscore');
var Promise = require('promise');
var expect = require('chai').expect;
var marvin = require('../index');
var metric = require('../monitor_metric');

describe('#index', function(){
    var mv, console_error_store = console.error;;

    before(function(done){
        mv = marvin('trade.status.node');
        done();
    });

    after(function(){
        console.error = console_error_store;
    });

    describe('#new_marvin', function(){
        it('should give marvin item id, return false', function(done){
            Promise.resolve()
            .then(function(){
                return Promise.resolve(marvin(''));
            })
            .then(function(r){
                expect(r).to.be.false;
                done();
            })
            .catch(function(e){console.log(e)});
        });

        it('time should be 20', function(done){
            Promise.resolve()
            .then(function(){
                return Promise.resolve(marvin('trade.status.node0', 20));
            })
            .then(function(r){
                expect(r.period).to.equal(20);
                done();
            })
            .catch(function(e){console.log(e)});
        });

        it('should return a exist MonitorMetric Object', function(done){
            Promise.resolve()
            .then(function(){
                return Promise.resolve(marvin('trade.status.node'));
            })
            .then(function(r){
                expect(r).to.be.equal(mv);
                done();
            })
            .catch(function(e){console.log(e)});
        });
    });


    describe('#add_tag', function(){
        it('should give marvin item id, return false', function(done){
            Promise.resolve()
            .then(function(){
                return Promise.resolve(marvin(''));
            })
            .then(function(r){
                expect(r).to.be.false;
                done();
            })
            .catch(function(e){console.log(e)});
        });
    });    

});