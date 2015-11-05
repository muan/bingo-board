#!/usr/bin/env node

var fs = require('fs')
var max = process.argv[2]

playGame()

function playGame() {
  var usedNumbers = []
  var number = getRandomNumber(max)

  while (!isNewNumber(usedNumbers, number)) {
    number = getRandomNumber(max)
  }

  fs.writeFile(process.cwd() + '/_data/numbers/' + number + '.json', '', function done (err) {
    if (err) return
    console.log(number)
    setTimeout(playGame, 5000)
  })

  function isNewNumber (usedNumbers, number) {
    if (usedNumbers.indexOf(number) === -1 && number != 0) {
      return true
    }
  }

  function getRandomNumber(max) {
    return Math.round(Math.random() * max)
  }
}
