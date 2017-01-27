function readFile (filename) {
  var fs = require('fs')

  fs.readFile(filename, 'utf8', function (err, fileData) {
    if (err) {
      return console.log(err)
    }
    findConsolelogs(fileData, filename)
    findComments(fileData, filename)
  })
}

function findConsolelogs (input, filename) {
  var arrTokens = input.split(/[\s,()]+/)
  var numLogs = 0

  for (var i = 0; i < arrTokens.length; i++) {
    if (arrTokens[i].toLowerCase() === 'console.log') {
      numLogs++
    }
  }

  console.log(numLogs + ' console.logs found in ' + filename)
}

function findComments (input, filename) {
  var arrTokens = input.split(/[\s,()]+/)
  var numComments = 0

  for (var i = 0; i < arrTokens.length; i++) {
    if (arrTokens[i].toLowerCase() === '//') {
      numComments++
    }
  }

  console.log(numComments + ' comments found in ' + filename)
}

readFile('samplejavascript.js')
