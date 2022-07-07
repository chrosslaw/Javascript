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
