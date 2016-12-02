# Features

[![Build Status](https://travis-ci.org/Anlibraly/marvin-nodejs-sdk.svg?branch=master)](https://travis-ci.org/Anlibraly/marvin-nodejs-sdk)
[![Coverage Status](https://coveralls.io/repos/github/Anlibraly/marvin-nodejs-sdk/badge.svg?branch=master)](https://coveralls.io/github/Anlibraly/marvin-nodejs-sdk?branch=master)

- create a marvin item
- add item tags 
- fill item fields
- commit these item changes to marvin file


# Install

`$ npm install marvin-nodejs-sdk`


# Usage

## let mv = marvin('trade.status.node', 20); 

default is 60, this means marvin item will group in one file by every 60s.Can only be 20 or 60.

## mv.add_tag('channel', 'dior') 

add tags for the marvin item, it will let you query these item by tag in marvin

## mv.add_field('qps', 1)

fill fields of marvin item, then marvin can caculate these fields by time and show the result to you.

## mv.commit()

```
// commit will write this item info into file '/tmp/monitordata/60/xxx.log' line by line
// marvin will get these files by every 60s
	let marvin = require('marvin-nodejs-sdk');
	marvin('trade.status.node')
	.add_tag('channel', 'dior')
	.add_tag('location', 'Shanghai')
	.add_field('qps', 1)
	.add_field('rt', 23)
	.commit();	
```

# License

[MIT](https://github.com/Anlibraly/marvin-nodejs-sdk/blob/master/LICENSE)
