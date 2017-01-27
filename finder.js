function findTokens (argValues) {
  var numTokensToFind = argValues[2]

  var tokensToFind = []
  for (var i = 3; i <= (2 + parseInt(numTokensToFind)); i++) {
    var tokenToPush = ''
    var j = 0
    if (argValues[i][0] === '[') {
      j = 1
    }

    for (j; j < argValues[i].length - 1; j++) {
      tokenToPush += argValues[i][j]
    }

    tokensToFind.push(tokenToPush)
  }

  var filenames = []
  for (i; i < argValues.length; i++) { // Be careful not to reset i here
    filenames.push(argValues[i])
  }

  for (i = 0; i < tokensToFind.length; i++) {
    for (j = 0; j < filenames.length; j++) {
      var tokenizedFile = readTheFile(filenames[j])
      var numFound = count(tokensToFind[i], tokenizedFile)

      output(tokensToFind[i], filenames[j], tokenizedFile, numFound)
    }
  }
}

function readTheFile (filename) {
  var fs = require('fs')
  return fs.readFileSync(filename, 'utf8').split(/[\s,()]+/)
}

function count (tokenToFind, tokenizedFile) {
  var numFound = 0

  for (var i = 0; i < tokenizedFile.length; i++) {
    if (tokenizedFile[i].toLowerCase() === tokenToFind) {
      numFound++
    }
  }

  return numFound
}

function output (tokenToFind, filename, tokenizedFile, numFound) {
  console.log('\'' + tokenToFind + '\'' + ' found ' + numFound + ' times in ' + filename)
}

findTokens(process.argv)
