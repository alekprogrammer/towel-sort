// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return [];
    }
    let newarr = [];
    for (let i = 0; i < matrix.length; i++) {
        if ((i + 1) % 2 == 0) {
            matrix[i].sort((a, b) => b - a)
        } else {
            matrix[i].sort((a, b) => a - b)
        }
        for (let j = 0; j < matrix[i].length; j++) {
            newarr.push(matrix[i][j]);
        }
    }
    return newarr;
}