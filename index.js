'use strict';

const MonitorMetric = require('./monitor_metric');
let instances = [];

module.exports = function(ins, period){
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