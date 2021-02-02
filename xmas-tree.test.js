const {
  xmasTree,
  findLineWidth,
  makeFoliageSegment,
  makeTreeFoliage,
  makeTreeTrunk,
} = require("./xmas-tree");

test("findLineWidth finds the line width from a foliage height", () => {
  expect(findLineWidth(5)).toBe(9);
  expect(findLineWidth(3)).toBe(5);
  expect(findLineWidth(4)).toBe(7)
});

test("makeTreeTrunk returns the tree trunk part of the Christmas tree with given foliage height", () => {
  expect(makeTreeTrunk(5)).toStrictEqual(["____#____", "____#____"]);
  expect(makeTreeTrunk(3)).toStrictEqual(["__#__", "__#__"]);
  expect(makeTreeTrunk(4)).toStrictEqual(["___#___", "___#___"]);
});

test("makeFoliageSegment returns the foliage segment for a given level of a tree of given foliage height", () => {
  expect(makeFoliageSegment(5, 1)).toBe("____#____");
  expect(makeFoliageSegment(5, 4)).toBe("_#######_");
  expect(makeFoliageSegment(3, 1)).toBe("__#__");
  expect(makeFoliageSegment(3, 2)).toBe("_###_");
});

test("makeTreeFoliage returns the foliage for a tree of given foliage height", () => {
  expect(makeTreeFoliage(5)).toStrictEqual([
    "____#____",
    "___###___",
    "__#####__",
    "_#######_",
    "#########",
  ]);
  expect(makeTreeFoliage(3)).toStrictEqual(["__#__", "_###_", "#####"]);
  expect(makeTreeFoliage(4)).toStrictEqual(["___#___", "__###__", "_#####_","#######"]);
});

test("xmasTree returns an array modelling a Christmas tree of given foliage height", () => {
  expect(xmasTree(5)).toStrictEqual([
    "____#____",
    "___###___",
    "__#####__",
    "_#######_",
    "#########", 
    "____#____",
    "____#____",
  ]);
  expect(xmasTree(3)).toStrictEqual([
    "__#__",
    "_###_",
    "#####",
    "__#__",
    "__#__",
  ]);
  expect(xmasTree(4)).toStrictEqual([
    "___#___", 
    "__###__", 
    "_#####_",
    "#######",
    "___#___",
    "___#___",
  ]);
});

// let array = [1, 2, 3]

// test("toBe on arrays - experiment", () => {
//   expect(array).toBe(array);
//   expect(["a", "b", "c"]).toBe(["a", "b", "c"]);
// });

// test("toStrictEqual on arrays - experiment", () => {
//   expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
//   expect(["a", "b", "c"]).toStrictEqual(["a", "b", "c"]);
// });

// test("toBe on booleans - experiment", () => {
//   expect(true).toBe(true);
//   expect(false).toBe(false);
// });

// test("toStrictEqual on booleans - experiment", () => {
//   expect(true).toStrictEqual(true);
//   expect(false).toStrictEqual(false);
// });

// test("toBe on numbers - experiment", () => {
//   expect(1).toBe(1);
//   expect(100).toBe(100);
// });

// test("toStrictEqual on numbers - experiment", () => {
//   expect(1).toStrictEqual(1);
//   expect(100).toStrictEqual(100);
// });

// test("toBe on objects - experiment", () => {
//   expect({ firstName: "Richard", lastName: "Ng" }).toBe({
//     firstName: "Richard",
//     lastName: "Ng",
//   });
//   expect({ a: "A", b: "B", c: "C" }).toBe({ a: "A", b: "B", c: "C" });
// });

// test("toStrictEqual on objects - experiment", () => {
//   expect({ firstName: "Richard", lastName: "Ng" }).toStrictEqual({
//     firstName: "Richard",
//     lastName: "Ng",
//   });
//   expect({ a: "A", b: "B", c: "C" }).toStrictEqual({ a: "A", b: "B", c: "C" });
// });

// test("toBe on strings - experiment", () => {
//   expect("hello").toBe("hello");
//   expect("world").toBe("world");
// });

// test("toStrictEqual on strings - experiment", () => {
//   expect("hello").toStrictEqual("hello");
//   expect("world").toStrictEqual("world");
// });