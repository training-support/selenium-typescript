import assert from "assert";

describe("Testing Math Functions", function () {
  describe("Testing the sqrt() function", function () {
    it("should return 5 when you compute the square root of 25", function () {
      assert.equal(Math.sqrt(25), 5);
    });
    it("should return 7 when you compute the square root of 49", function () {
      assert.equal(Math.sqrt(49), 6);
    });
    it("should not do anything because it has no logic!");
  });
  describe("Testing the pow() function", function () {
    it("should return 100 when you compute 10 ^ 2", function () {
      assert.equal(Math.pow(10, 2), 100);
    });
  });
});
