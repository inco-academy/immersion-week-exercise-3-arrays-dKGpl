const concatArray = require("./2_concat_array");

test("Concat dog text", () => {
  expect(concatArray(["Hello", "this", "is", "dog"])).toBe(
    "Hello this is dog."
  );
});

test("Concat christmas text", () => {
  expect(
    concatArray(["All", "I", "want", "for", "christmas", "is", "you"])
  ).toBe("All I want for christmas is you.");
});

test("Concat empty array.", () => {
  expect(concatArray([])).toBe(".");
});
