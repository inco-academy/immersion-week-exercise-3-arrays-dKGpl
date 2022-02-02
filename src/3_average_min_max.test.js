const averageMinMax = require("./3_average_min_max");

let consoleSpy;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, "log");
});

afterEach(() => {
  consoleSpy.mockClear();
});

test("1", () => {
  averageMinMax([-42, 0, 42]);

  expect(consoleSpy).toHaveBeenCalledTimes(1);
  expect(consoleSpy).toHaveBeenCalledWith("Min: -42 Max: 42 Average: 0");
});

test("2", () => {
  averageMinMax([30, 20, 100]);

  expect(consoleSpy).toHaveBeenCalledTimes(1);
  expect(consoleSpy).toHaveBeenCalledWith("Min: 20 Max: 100 Average: 50");
});

test("3", () => {
  averageMinMax([-23, -4, -12]);

  expect(consoleSpy).toHaveBeenCalledTimes(1);
  expect(consoleSpy).toHaveBeenCalledWith("Min: -23 Max: -4 Average: -13");
});
