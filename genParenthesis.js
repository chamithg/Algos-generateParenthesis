/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  let res = [];

  function generate(openCount, closeCount, stack) {
    if (openCount === n && closeCount === n) {
      res.push(stack);
      return;
    }

    if (openCount < n) {
      generate(openCount + 1, closeCount, stack + "(");
    }

    if (closeCount < openCount) {
      generate(openCount, closeCount + 1, stack + ")");
    }
  }

  generate(0, 0, "");
  return res;
}

let n = 3;

console.log(generateParenthesis(n));
