/**
 * This file doesn't actually get run, just linted.
 */
import path from "path";

const testNonDanglingComma = [
  "val 1",
  "val 2"
];

let testEqeqOnNull = null;

const pathJoined = function() {
  return path.join(__dirname, "some/sub-path/");
};

function funcWithName() {
  if (testEqeqOnNull == null) {
    console.log("Testing console log only warns", testNonDanglingComma, pathJoined());
  }

  testEqeqOnNull = "agustin";

  return testEqeqOnNull;
}

funcWithName();
