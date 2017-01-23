'use strict';

const http = require('http');
const url = require('url');

const API_key = 600847748;
const keyfrom = 'afdsfsdfdsfdsjkh';
const API_addr = 'http://fanyi.youdao.com/openapi.do';
const doctype = 'json';


exports = module.exports = request;

/**
 * send request
 */
function request(q) {
  return new Promise((resolve, reject) => {
    q = encodeURIComponent(q);
    let request_url = `${API_addr}?keyfrom=${keyfrom}&key=${API_key}&type=data&doctype=${doctype}&version=1.1&q=${q}`;
    let req = http.request(request_url, function(res) {
      let data = [];

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(data));
      });
    });

    req.on('error', function(err) {
      reject(`problem with request ${err.message}`);
    });

    req.end();
  });
}
