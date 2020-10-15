
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let newMatrix = [];
  let count = 1;
  if (!matrix) {
    return [];

  }
  else {
    for (let i = 0; i < matrix.length; i++) {
      count++;
      if (count % 2 === 0) {
        for (let k = 0; k < matrix[i].length; k++) {
          newMatrix.push(matrix[i][k])
        }
      }
      else if (count % 2 !== 0) {
        for (let k = matrix[i].length - 1; k >= 0; k--) {
          newMatrix.push(matrix[i][k])
        }
      }
    }
    return newMatrix;


  }
}
