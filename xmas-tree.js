function xmasTree(foliageHeight) {
  /**
   * We've broken down this function into three sub-problems.
   * You can solve the overall kata by solving the sub-problems - you shouldn't need to make changes to this function.
   * (Although, if you wish to, you could.)
   */

  // 1. make the tree foliage
  const foliage = makeTreeFoliage(foliageHeight);
  // 2. make the tree trunk
  const trunk = makeTreeTrunk(foliageHeight);
  // 3. group them together
  return foliage.concat(trunk);
}

function findLineWidth(foliageHeight) {
  return (2 * foliageHeight) - 1
}

function makeFoliageSegment(foliageHeight, segmentLevel) {
  let underscore = "_".repeat((findLineWidth(foliageHeight) - findLineWidth(segmentLevel))/2);
  let hashtag = "#".repeat(findLineWidth(segmentLevel));
  return underscore + hashtag + underscore
}

function makeTreeFoliage(foliageHeight) {
  // your code here
}

function makeTreeTrunk(foliageHeight) {
  return ["____#____", "____#____"];
}

// exports the functions so that ./xmas-tree.test.js can import them
module.exports = {
  xmasTree,
  findLineWidth,
  makeFoliageSegment,
  makeTreeFoliage,
  makeTreeTrunk,
};
