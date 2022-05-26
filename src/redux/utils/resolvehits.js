class CalculateGame {
  result;
  newLocal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
  ];

  constructor(param) {
    this.param = param;
  }
  control() {
    let sum = [];
    let param = this.param;

    for (let i = 0; i < this.newLocal.length; i++) {
      let p = this.newLocal[i]
        .map((e) =>
          e !== param[0] &&
          e !== param[1] &&
          e !== param[2] &&
          e !== param[3] &&
          e !== param[4]
            ? e
            : 0
        )
        .filter((e) => e !== 0 && !e.length)
        .sort();
      if (p.length) {
        sum.push(p);
      }
    }
    this.result = sum;
    return sum;
  }
}

export default CalculateGame;
