import assert from "assert";

describe("Activity 20", function () {
  const tests = [
    { earned: 30, spent: 10, expected: 20 },
    { earned: 20, spent: 2, expected: 18 },
  ];

  tests.forEach(({ earned, spent, expected }) => {
    it(`should have ${expected} after I add ${earned} and spend ${spent}`, function () {
      let wallet = 0;
      wallet += earned;
      wallet -= spent;
      assert.equal(wallet, expected);
    });
  });
});
