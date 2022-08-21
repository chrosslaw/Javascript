// Define a rooster
Rooster = {
  // Return a morning rooster call
  announceDawn() {
    return "cock-a-doodle-doo!";
  },

  // Return hour as string
  // Throws Error if hour is not between 0 and 23 inclusive
  timeAtDawn(hour) {
    if (hour < 0 || hour > 23) {
      throw RangeError();
    } else {
      return hour.toString();
    }
  },
};

module.exports = Rooster;
