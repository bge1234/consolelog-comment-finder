function findTokens (filename, tokenToFind) {
  var fs = require('fs')

  fs.readFile(filename, 'utf8', function (err, fileContents) {
    if (err) {
      return console.log(err)
    }

    var tokenizedFile = fileContents.split(/[\s,()]+/)
    var numFound = 0

    for (var j = 0; j < tokenizedFile.length; j++) {
      if (tokenizedFile[j].toLowerCase() === tokenToFind) {
        numFound++
      }
    }

    console.log('\'' + tokenToFind + '\'' + ' found ' + numFound + ' times in ' + filename)
  })
}

findTokens(process.argv[2], process.argv[3])
