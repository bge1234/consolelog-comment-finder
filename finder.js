function readFile (filename) {
  var fs = require('fs')

  fs.readFile(filename, 'utf8', function (err, fileData) {
    if (err) {
      return console.log(err)
    }
    findConsolelogs(fileData, filename)
  })
}

readFile('samplejavascript.js')

function findConsolelogs(fileData, filename) {
  console.log('Contents of ' + filename + ':')
  console.log(fileData)
}
