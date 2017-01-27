function sampleJs (arg) {
  console.log('here is a console log')

  var inBetweenCode = 0

  // This is a comment

  inBetweenCode++

  console.log('arg: ', arg)
  console.log('arg: ', arg)
  console.log('arg: ', arg)
  console.log('arg: ', arg)

  // Another comment
  // Another comment
  // Another comment

  /*
    Here is a multi-line comment.
    Another line.
    And another line.
  */

  return inBetweenCode
}

sampleJs('hi')
