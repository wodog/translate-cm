#! /usr/bin/env node

'use strict'

const request = require('../');




let q = process.argv.slice(2, 3)[0];

if (!q) {
  return console.log('请输入要翻译的内容');
}

request(q).then((data) => {
  console.log(data.translation.toString());
});