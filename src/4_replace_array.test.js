const replaceArray = require("./4_replace_array");

test("Replace Array (1)", () => {
  expect(replaceArray(["banana", "suit", "hammer"])).toStrictEqual([
    "banana",
    "suit",
    "HAMMER",
  ]);
});

test("Replace Array (2)", () => {
  expect(replaceArray(["Hello", "there"])).toStrictEqual(["HELLO", "there"]);
});

test("Replace Array (3)", () => {
  expect(replaceArray(["Hey!", "hey..."])).toStrictEqual(["HEY!", "HEY..."]);
});
