'use strict';

const MonitorMetric = require('./monitor_metric');
const monitor = require('./marvin_tofile');
const _ = require('underscore');
let instances = [];

let marvin = function(ins, period){
    if(!period){
        period = 60;
    }

    if (!ins || (period != 60 && period != 20)) {
        return false;
    }

    if (!instances[`${ins}`]) {
        instances[`${ins}`] = MonitorMetric(ins, period);
    }
    return instances[`${ins}`];
}

marvin._tofile = (inList, period = 60, delay = 0) => {
    if(!inList || inList.length == 0 || !inList[0]){
        return false;
    }
    monitor(inList.join('\n'), period, delay);
    return true;
}

/*marvins : [{
    ins : 'test-ins',
    tags : [{
        key : '1',
        val : '11'
    },...],
    fields : [{
        key : '1',
        val : '11'
    },...]
},...]*/
marvin.out = marvin => {
    if (!marvin.ins || !marvin.tags || !marvin.fields) {
        return false;
    }

    let tagArr = [];

    _.each(marvin.tags, tag => {

        tagArr.push(`${tag.key}=${tag.val}`);

    });

    if (tagArr.length > 0) {
        tagArr = tagArr.join(',');
    } else {
        tagArr = "default=default";
    }

    //field_string
    let fieldArr = [];

    _.each(marvin.fields, field => {

        fieldArr.push(`${field.key}=${field.val}`);

    });

    if (fieldArr.length > 0) {
        fieldArr = fieldArr.join(',');
    } else {
        return false;
    }

    return `${marvin.ins},${tagArr} ${fieldArr}`;        
}

module.exports = marvin;