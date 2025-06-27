const sortingByAge = require("./app");

test("Testing if the first user is Esha after sorting", () => {
  const sortedData = sortingByAge();

  expect(sortedData[0].name).toBe("Esha");
});

test("Testing if the last user is Priya after sorting", () => {
  const sortedData = sortingByAge();

  expect(sortedData[sortedData.length - 1].name).toBe("Priya");
});

test("Testing if the sorted data has length of 3", () => {
  const sortedData = sortingByAge();

  expect(sortedData.length).toBe(3);
});

test("Testing if the sorted data has length of 3", () => {
  const sortedData = sortingByAge();

  expect(sortedData.length).not.toBe(undefined);
});
