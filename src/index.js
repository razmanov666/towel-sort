
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  let switcher = 1;
  console.log(typeof(matrix));
  if (matrix === undefined) return arr = [];
    for (let i=0;i<matrix.length;i++){
      if (switcher == 1)
        for (let j=0;j<matrix[i].length;j++){
          arr.push(matrix[i][j]);
        }
      else {
        for (let j=matrix[i].length-1;j>=0;j--){
          arr.push(matrix[i][j]);
          console.log(matrix[i][j]);
        }
      }
      switcher*=-1;
    }
    return arr;
}
/*
const matrix = [];

console.log(towelSort ());*/