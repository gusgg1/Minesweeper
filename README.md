# Minesweeper

#### A minesweeper game in the terminal with Node

###### This is the first project for the *Build Front-End Web Applications from Scratch* intensive course.

* For this project I use Babel as a devDpendency for the transpilation of the ES6 JS.
  * `npm run build` will transpile the code from the `src` directory into the `lib` directory.
* To play Minesweeper, we will create instances of the minesweeper game in the command line:
  * In the command line, navigate to the lib directory and run `node`
  * Run `.load game.js` to load the contents of this file.
  * Then create a Game instance and run commands like so:
    * let game = new Game(3, 3, 3);
    * game.playMove(0, 1);
    * game.playMove(1, 2);
* When done run `.exit`

