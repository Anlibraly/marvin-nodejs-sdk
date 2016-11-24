'use strict';
const monitor = require('./marvin_tofile');
const _ = require('underscore');

function createMonitorMetric(ins, period){
    return new MonitorMetric(ins, period);
}

function MonitorMetric(ins, period) {
    this.mIns = ins;
    this.period = period;
    this.tags = [];
    this.fields = [];

    this.commit = () => {
        let tagStr = "";
        //this.tags =  _.sortBy(this.tags, function(a){return a;});
        //tag_string
        if (this.tags !== []) {
            for(let i in this.tags){
                tagStr += `${i}=${this.tags[i]},`;
            }

            if(tagStr.length > 0){
                tagStr = tagStr.substring(0, tagStr.length - 1);
            }
        } else {
            tagStr = "default=default";
        }
        //field_string
        let fieldStr = '';
        if (this.fields !== []) {
            for(let i in this.fields){
                fieldStr += `${i}=${this.fields[i]},`;
            }   

            if(fieldStr.length > 0){
                fieldStr = fieldStr.substring(0, fieldStr.length - 1);
            }
        } else {
            return false;
        }

        monitor(`${this.mIns},${tagStr} ${fieldStr}`, this.period);
        this.tags = [];
        this.fields = [];
        return true;
    };

    this.add_tag = (tagKey, tagVal) => {
        if(this.tags.length > 100){
            this.commit();
            return this;
        }
        tagVal = tagVal.replace(/,/g,'\\,');
        tagVal = tagVal.replace(/ /g,'\\ ')
        this.tags[tagKey] = tagVal;
        return this;
    };

    this.add_field = (fieldName, fieldval) => {
        if(this.fields.length > 100){
            this.commit();
            return this;
        }
        this.fields[fieldName] = fieldval;
        return this;
    };
}

module.exports = createMonitorMetric;