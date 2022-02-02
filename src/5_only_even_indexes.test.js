const evenIndexes = require("./5_only_even_indexes");

test("Even Indexes (1)", () => {
  expect(evenIndexes("lol")).toStrictEqual(["l", "l"]);
});

test("Even Indexes (2)", () => {
  expect(evenIndexes("You're weird")).toStrictEqual(["Y", "u", "r", " ", "e", "r"]);
});

test("Even Indexes (3)", () => {
  expect(evenIndexes("")).toStrictEqual([]);
});
