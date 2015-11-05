# Pull request bingo game

This is a game where people use Pull Request to submit numbers for Bingo! A Game Master is merging the Pull Requests, and upon merge, the number becomes the next number called. 

## How it works

### As a Game Maseter

1. Fork the repository 
2. Share this URL with all the players: http://username.github.io/bingo-board
3. Decide the range of numbers for a board (1~50 or 1~100)
4. Every player should go to http://username.github.io/bingo-board/board.html to create a Bingo board based on the range
5. You merge Pull Request as they come in, ideally in the order they come in
  * Verify that the file is a JSON file that lives in `_data/numbers`.
  * Verify that there is no more than one file.

### As a player

1. Fork the game repository (not this one, but the one from the Game Master)
2. Add an empty JSON file with your preferred number as the file name to your fork in `_data/numbers`, like `47.json`
3. Submit a Pull Request to the game repository
4. Wait for your number to be merged by the Game Master

## Development env fun

`fun-script.js` allows you to play a Bingo game without having to manually create files, it generates random numbered files so all you have to do is set up a Bingo board.

## License

MIT
