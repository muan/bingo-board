// Listen for clicks on squares
var squares = document.querySelectorAll('.square')
Array.prototype.forEach.call(squares, function (square) {
  square.addEventListener('click', function clickedSquare (event) {
    if (square.classList.contains('selected')) {
      square.classList.remove('selected')
    } else {
      square.classList.add('selected')
    }
  })
})

// Populate buttons
var oneHundredBtn = document.getElementById('one-hundred-btn')
var fiftyBtn = document.getElementById('fifty-btn')

oneHundredBtn.addEventListener('click', function clickedOneHundred (event) {
  populateBoard(100)
})

fiftyBtn.addEventListener('click', function clickedOneFifty (event) {
  populateBoard(50)
})

// Populate squares
function populateBoard (max) {
  // Clear any previously selected squares
  clearSelections(squares)
  var usedNumbers = []
  Array.prototype.forEach.call(squares, function (square) {
    var number = getRandomNumber(max)

    while (!isNewNumber(usedNumbers, number)) {
      number = getRandomNumber(max)
    }

    usedNumbers.push(number)
    square.textContent = number
  })
}

function isNewNumber (usedNumbers, number) {
  if (usedNumbers.indexOf(number) === -1 && number !== 0) {
    return true
  }
}

function getRandomNumber (max) {
  return Math.round(Math.random() * max)
}

function clearSelections (squares) {
  Array.prototype.forEach.call(squares, function (square) {
    if (square.classList.contains('selected')) {
      square.classList.remove('selected')
    }
  })
}
