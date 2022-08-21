var assert = require("assert");
var Rooster = require("./index.js");

describe("Rooster", () => {
  describe(".announce dawn", () => {
    it("returns a rooster call", () => {
      // Define expected output
      const expected = "cock-a-doodle-doo!";
      // Call Rooster.announceDawn and store result in variable
      const actual = Rooster.announceDawn();
      // Use an assert method to compare actual and expected result
      assert.equal(actual, expected);
    });
  });
  describe(".timeAtDawn", () => {
    let hour = -1;
    let test = Rooster.timeAtDawn(hour);
    it("returns its argument as a string", () => {
      const expected = typeof "string";
      const actual = 5;
      const result = typeof Rooster.timeAtDawn(actual);
      assert.strictEqual(result, expected);
    });
    it("throws an error if passed a number less than 0", () => {
      const expected = RangeError;
      const actual = -1;
      const result = Rooster.timeAtDawn(actual);
      assert.throws(() => {
        result;
      }, expected);
    });
  });
});
// it('throws an error if passed a number greater than 23', ()=> {
//  aassert.throws(() => {
//    Rooster.timeAtDawn(hour) > 23;
//  },
//  RangeError);
// });
