#! /usr/bin/env node

const program = require('commander')
const request = require('../request');
// const log = require('../log')

// program
//   .command('log')
//   .option('', '')
//   .action(function(cmd, options) {
//     console.log(log.getLog())
//   })

program
  .action(function(...cmd) {
    const options = cmd.pop()
    const q = cmd.join(' ')
    request(q)
      .then((data) => {
    	   const d = getOutput(data);
         console.log(d)
        //  log.writeLog(d)
       })
      .catch(err => {
        console.log(err)
      });
  })

program
  .parse(process.argv)

function getOutput(data) {
  let result
  if (data.basic) {
    result = data.basic.explains.join('\n');
  } else {
    result = data.translation[0];
  }
  return result
}
