const Calculate = {
  factorial(num) {
    let count = num;
    let total = 1;
    while (count > 1) {
      total *= count;
      count--;
    }
    return total;
  },
};
module.exports = Calculate;
