#!/usr/bin/env node

var fs = require('fs')
var max = process.argv[2]
var usedNumbers = []

playGame()

function playGame() {
  var number = getRandomNumber(max)

  while (!isNewNumber(number)) {
    number = getRandomNumber(max)
  }

  fs.writeFile(process.cwd() + '/_data/numbers/' + number + '.json', '', function done (err) {
    if (err) return
    console.log(number)
    usedNumbers.push(number)
    setTimeout(playGame, 5000)
  })

  function isNewNumber (number) {
    if (usedNumbers.indexOf(number) === -1 && number != 0) {
      return true
    }
  }

  function getRandomNumber(max) {
    return Math.round(Math.random() * max)
  }
}
