var fs = require('fs')
var test = require('tape')

fs.readdir('./_data/numbers', function (err, list) {
  if (err) return

  test('No extra files in _data/numbers', function (t) {
    t.equal(list.length, 1, '.gitkeep should be the only file in _data/numbers')
    t.end()
  })
})
