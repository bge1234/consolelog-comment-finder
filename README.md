This function searches a specified file or folder for any tokens passed to it as an array of strings (even for just one token) and prints out the number found to the console.

To use, run `node finder.js (number of tokens to find) (tokens to find) (filenames)`
For example `node finder.js 1 [console.log] samplejavascript.js`
For example `node finder.js 1 [console.log] folder/*`
For example `node finder.js 3 ['console.log', '//', '/*'] samplejavascript.js`
For example `node finder.js 3 ['console.log', '//', '/*'] folder/*`
