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