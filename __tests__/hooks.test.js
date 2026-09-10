/* setup and cleaning methods

2 -> before each and after each
2 -> before all and other all

*/
/*
before each and after each

jo har chote chote test k pahle 
like app .use 

before all

jo har suite m sirf 1 baar suru m


Setup & Cleanup Methods

beforeAll  → test suite ke start mein → 1 baar
beforeEach → har test ke start se pehle
afterEach  → har test ke end ke baad
afterAll   → test suite ke end mein → 1 baar

*/

const mathOperations = require("../calculator");

describe("Calculator tests", () => {
  var input1 = 0;
  var input2 = 0;
  // local scope only for this suite because its inside this suite
  beforeAll(() => {
    console.log("before all called inside calculator tests scope");
  });

  afterAll(() => {
    console.log("After all called inside calculator tests scope");
  });

  beforeEach(() => {
    console.log("Before each called");
    inp1 = 1;
    inp2 = 2;
  });
  afterEach(() => {
    console.log("After Each is called");
  });
  test("add", () => {
    var res = mathOperations.sum(inp1, inp2);
    expect(res).toBe(3);
  });
  test("diff", () => {
    var res = mathOperations.diff(inp1, inp2);
    expect(res).toBe(-1);
  });
});
