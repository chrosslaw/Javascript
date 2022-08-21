var assert = require("assert");
var Calculate = require("./index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("will test if the output of 5! is equal to 120", () => {
      const expected = 120;
      const actual = 5;
      const result = Calculate.factorial(actual);
      assert.equal(result, expected);
    });
    it("will test if the output of 3! is equal to 6", () => {
      const expected = 6;
      const actual = 3;
      const result = Calculate.factorial(actual);
      assert.equal(result, expected);
    });
  });
});