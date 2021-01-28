/**
* @param {number[]} arr
* @param {number} a
* @param {number} b
* @returns {number[]}
*/
function filterRange(arr, a, b) {
  let filterredArr = arr.filter((item) => {
    return a <= item && item <= b;
  });
  return filterredArr;
}
