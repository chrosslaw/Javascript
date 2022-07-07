// A video game consists of two players floating using
// 100 helium balloons. The players shoot pellets at each
// other’s balloons and after 10 minutes the player with the
// most balloons left wins.

// Write a game function balloonAttack that takes two Player
// instances, calculates the balloons left for each player after
// 10 minutes (using the hitsPerMinute property) and returns the
// name of the winner. If the result is a tie, return the string
// 'Tie'.

// You can test your balloonAttack function by creating two instances
// of the Player class to use as arguments for your function like
// below:

class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }
  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
  }
}
balloonAttack = (p1, p2) => {
  const p1bc = (p1.balloonCount -= p2.hitsPerMinute * 10);
  const p2bc = (p2.balloonCount -= p1.hitsPerMinute * 10);
  p1.status();
  p2.status();
  console.log(`Winner:`);
  return p1bc == p2bc
    ? "Tie"
    : p1.balloonCount > p2.balloonCount
    ? p1.name
    : p2.name;
};

const p1 = new Player("Balloon Destroyer", 5);
const p2 = new Player("Eagle Eye", 8);
console.log(balloonAttack(p1, p2));
