const mathOperations = require("../calculator");

//suits to make math operations

//describe -> collection of similar tests
describe("Calculator Tests", () => {
  //add
  test("adding 1 + 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
    expect(1 + 2).toBe(3);

    /*
    tobe --->expected output

    expect() =>actual output

    test sweet --> collection of similar test
    expect ->assertion

    
    */
  });

  test("subtracting 5 and 3 should return 2", () => {
    var diff_op = mathOperations.diff(5, 3);
    expect(diff_op).toBe(2);
    expect(mathOperations.diff(4, 5)).not.toBe(1);
    expect(mathOperations.diff(4, 5)).toBe(-1);
  });

  test("multiplying 10 * 3 should return 30", () => {
    expect(mathOperations.mul(10, 3)).toBe(30);
  });

  test("dividing 10 * 4 should return 40", () => {
    expect(mathOperations.div(25, 5)).toBe(5);
  });
});
