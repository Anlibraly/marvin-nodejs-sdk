'use strict';
let marvin = require('../index');
//测试程序
let inList = [];
let channel = ['购物车', '闪购', '新人促销'];
let bank = ['农行', '工行', '建行', '招商银行'];
let i = 0, mv = marvin('trade.status.node');
while(i < 10){
    let info = mv
    .add_tag('channel',channel[Math.floor(Math.random()*2)])
    .add_tag('channel1',channel[Math.floor(Math.random()*1)])
    .add_field('qps', 1)
    .add_field('rt', 23)
    .out();
    inList.push(info);
    i++;
}

mv._tofile(inList);

