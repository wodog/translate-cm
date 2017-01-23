const fs = require('fs')
const path = require('path')

const logPath = path.join(__dirname, '_log.txt')
const comment = 'S&Y#GYBKVF&JDKJ'

exports.writeLog = function (data) {
  data += '\n\n'
  fs.appendFileSync(logPath, data)
}

exports.getLog = function () {
  return fs.readFileSync(logPath, 'utf8')
}

// exports.clean = function () {
//   fs.writeFileSync(logPath, '')
// }
