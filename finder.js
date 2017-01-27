function readFile (filename) {
  var fs = require('fs')

  fs.readFile(filename, 'utf8', function (err, fileData) {
    if (err) {
      return console.log(err)
    }
    findToken('console.log', fileData, filename)
    findToken('//', fileData, filename)
    findToken('/*', fileData, filename)
  })
}

function findToken(token, input, filename) {
  var arrTokens = input.split(/[\s,()]+/)
  var numFound = 0

  for (var i = 0; i < arrTokens.length; i++) {
    if (arrTokens[i].toLowerCase() === token) {
      numFound++
    }
  }

  console.log('\'' + token + '\'' + ' found ' + numFound + ' times in ' + filename)
}

readFile('samplejavascript.js')
