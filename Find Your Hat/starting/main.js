const e = require("express");
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => res.send("Welcome To Nodejs!"));
app.listen(3000);
const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field) {
    this.field = field;
  }
  print() {
    let tf = this.field;
    for (let i in tf) {
      console.log(tf[i].join(""));
    }
  }

  static generateField(rows, columns) {
    console.log(board);
  }
}

const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);
let gameContinue = true;
let row = 0;
let column = 0;

while (gameContinue) {
  myField.print();
  let direction = prompt("Which Way?");
  if (direction == "r" && myField.field[row][column + 1] != pathCharacter) {
    column++;
  }
  if (direction == "l" && myField.field[row][column - 1] != pathCharacter) {
    column--;
  }
  if (direction == "u" && myField.field[row - 1][column] != pathCharacter) {
    row--;
  }
  if (direction == "d" && myField.field[row + 1][column] != pathCharacter) {
    row++;
  }
  if (column < 0 || row < 0) {
    console.log("You fell off the map.");
    gameContinue = false;
  }
  let currentPosition = myField.field[row][column];
  switch (currentPosition) {
    case hat:
      gameContinue = false;
      console.log("Congrats. You found your hat!");
      break;
    case hole:
      console.log("Sorry, you fell down a hole.");
      gameContinue = false;
    case pathCharacter:
      console.log("You cannot go back");
    case fieldCharacter:
      myField.field[row][column] = pathCharacter;
  }
}
