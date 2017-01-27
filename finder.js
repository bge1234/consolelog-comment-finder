function findTokens (tokensToFind, filename) {
  var fs = require('fs')

  fs.readFile(filename, 'utf8', function (err, fileContents) {
    if (err) {
      return console.log(err)
    }

    var tokenizedFile = fileContents.split(/[\s,()]+/)

    for (var i = 0; i < tokensToFind.length; i++) {
      var numFound = 0

      for (var j = 0; j < tokenizedFile.length; j++) {
        if (tokenizedFile[j].toLowerCase() === tokensToFind[i]) {
          numFound++
        }
      }

      console.log('\'' + tokensToFind[i] + '\'' + ' found ' + numFound + ' times in ' + filename)
    }
  })
}

findTokens(['console.log', '//', '/*'], 'samplejavascript.js')
