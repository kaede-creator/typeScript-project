const number1 = 123;
const inputValue = '123';
// const sum = number1 + inputValue
//　この時点では実行結果は '123123'になる
const changeValue = Number(inputValue);
// ↑　型の変更をしたいときは大文字で変更したい型名(変数名)という形になる
const sum = number1 + changeValue;
console.log(sum);
//# sourceMappingURL=cast.js.map