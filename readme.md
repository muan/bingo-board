# Pull request bingo game [![Build Status](https://travis-ci.org/muan/bingo-board.svg?branch=gh-pages)](https://travis-ci.org/muan/bingo-board) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

This is a game where people use Pull Request to submit numbers for [bingo](https://en.wikipedia.org/wiki/Bingo_(U.S.)). A Gamemaster will merge Pull Requests, and upon merge, the numbered file added to the repository becomes the next number called. 

## How it works

### As a Gamemaster

1. Fork the repository
2. Make on one commit to trigger a pages build (add the first number for example)
3. Share this URL with all the players: http://your_username.github.io/bingo-board
4. Decide the range of numbers for a board (1~50 or 1~100)
5. Every player should go to http://your_username.github.io/bingo-board/board.html to create a bingo board based on the range
6. You merge Pull Request as they come in, ideally in the order they come in
  * Verify that the file is a JSON file that lives in `_data/numbers`.
  * Verify that there is no more than one file.

### As a player

1. Fork the game repository (not this one, but the one from the Gamemaster)
2. Add an empty JSON file with your preferred number as the file name to your fork in `_data/numbers`, like `47.json`
3. Submit a Pull Request to the game repository
4. Wait for your number to be merged by the Gamemaster
5. Click on a number to mark it as called
6. Go back to 2!

## Development

This is a Jekyll site, numbers are from the [data files](http://jekyllrb.com/docs/datafiles/).

### Running the app

```shell
# Install Jekyll from the github-pages gem
$ gem install github-pages
# Serve the website, which will live on localhost:4000 by default
$ jekyll server -w
```

### Playing alone

1. Set up your bingo board at `/board.html`

2. Open `/` for numbers

3. Use `fun-script.js` and pass in a maximum number (50 or 100) to generate random numbered files every 5 seconds. For example:

  ```shell
  $ node fun-script.js 50
  ```

4. Mark numbers as they are called until bingo

### Restart

1. Delete all the files in `_data/numbers`

2. Clear `localStorage` by doing

  ```javascript
  localStorage.removeItem('numbers')
  ```

  in the console

## License

MIT

## Maintainers

[@muan](/muan) & [@jlord](/jlord)
