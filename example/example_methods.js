'use strict';
let marvin = require('../index');
//测试程序

let mvs = [{
    ins : 'test-ins',
    tags : [{
        key : 'tag1',
        val : '11'
    },{
        key : 'tag2',
        val : '12'
    }],
    fields : [{
        key : 'fie1',
        val : 11
    },{
        key : 'fie2',
        val : 11
    }]
},{
    ins : 'test-ins222',
    tags : [{
        key : 'tag1',
        val : '112'
    },{
        key : 'tag2',
        val : '122'
    }],
    fields : [{
        key : 'fie1',
        val : 112
    },{
        key : 'fie2',
        val : 112
    }]
}];
let out = [];

console.log(marvin.out('a'));
out.push(marvin.out(mvs[0]));
console.log(out[0]);
out.push(marvin.out(mvs[1]));
console.log(out[1]);

marvin._tofile(out);