// You are a college student and you want to stream a movie
// over one of the campuses Wi-Fi networks.
// Based on the number of users, some networks won’t have
// the data to stream a movie.

// Use the following Network class to track how
// much total data and how many users each network has:

// class Network {
//     constructor(data, users) {
//       this.data = data;
//       this.users = users;
//     }
//   }

// Each user on average deducts 5 units from the network’s total data.
// To watch a movie you must connect to a network that has at least
// 10 remaining units of data.

// Add a method movieTime() to the Network class that returns
// true if there is enough data available to watch a movie,
// false if there isn’t.
class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }
    // Insert code below
    movieTime(){
      return !(this.data/this.users < 10 || this.data == 0);
    }
  }
  //Test Cases
  const nw1 = new Network(0,0);
  console.log(nw1.movieTime()); //false
  const nw2 = new Network(100,5);
  console.log(nw2.movieTime());  //true
  const nw3 = new Network(100,10);
  console.log(nw3.movieTime());  //true
  const nw4 = new Network(100,11);
  console.log(nw4.movieTime()); //false