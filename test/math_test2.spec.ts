import assert from "assert";

describe("Testing Math Functions", function () {
  describe("Testing the sqrt() function", function () {
    it("should return 10 when you compute the square root of 100", function () {
      assert.equal(Math.sqrt(100), 10);
    });
    it("should return 2 when you compute the square root of 4", function () {
      assert.equal(Math.sqrt(4), 2);
    });
  });
  describe("Testing the pow() function", function () {
    it("should return 8 when you compute 2 ^ 3", function () {
      assert.equal(Math.pow(2, 3), 8);
    });
  });
});
