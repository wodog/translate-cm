#! /usr/bin/env node

'use strict'

const request = require('../');


/**
 * on linux
 */

if('linux' === process.platform) {

	let q = process.argv.slice(2, 3)[0];

	if (!q) {
		console.log('请输入要翻译的内容');
		return;
	}

	request(q).then((data) => {
		console.log(data.translation.toString());
	});
} else {
	console.log('不支持的平台');
}
