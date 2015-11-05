/* global localStorage */

var list = document.querySelector('.js-numbers')
// Get existing numbers from _data
var numbers = list.dataset.numbers
// Make array of number, remove NULL (from the last comma)
var currentNumbers = numbers.split(',').filter(function (number) { return !!number })
// Find list of numbers in localStorage, if none found, start from empty array
var memorizedList = localStorage.getItem('numbers') ? localStorage.getItem('numbers').split(',') : []
// Numbers that hasn't yet been saved to localStorage
var newNumbers = []

// Find new numbers (ones that are not in localStorage) and add them to localStorage
currentNumbers.filter(function (number) {
  return memorizedList.indexOf(number) < 0
}).forEach(function (number) {
  newNumbers.push(number)
  memorizedList.push(number)
})

localStorage.setItem('numbers', memorizedList)

// Render the numbers on the page in the order they were saved in
memorizedList.reverse().forEach(function (number) {
  var li = document.createElement('li')
  li.innerText = number
  if (newNumbers.indexOf(number) >= 0) {
    li.classList.add('is-new')
  }
  list.appendChild(li)
})

// Refresh to see if new numbers have been added to _data
setTimeout(function () {
  window.location.reload()
}, 5000)
