import assert from "assert";

function add(arr: number[]) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

interface Test {
  arr: number[];
  expected: number;
}

describe("Testing the add function (alt)", function () {
  const testAdd = ({ arr, expected }: Test) =>
    function () {
      const res = add(arr);
      assert.equal(res, expected);
    };

  it("Correctly adds 2 args", testAdd({ arr: [1, 2], expected: 3 }));
  it("Correctly adds 3 args", testAdd({ arr: [1, 2, 3], expected: 6 }));
  it("Correctly adds 4 args", testAdd({ arr: [1, 2, 3, 4], expected: 10 }));
});

describe("Testing the add function", function () {
  const tests = [
    { arr: [1, 2], expected: 3 },
    { arr: [1, 2, 3], expected: 6 },
    { arr: [1, 2, 3, 4], expected: 10 },
  ];

  tests.forEach(({ arr, expected }) => {
    it(`correctly adds ${arr.length} numbers`, function () {
      const res = add(arr);
      assert.equal(res, expected);
    });
  });
});
