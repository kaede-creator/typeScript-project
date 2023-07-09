const ArrayTest1 = ['あああ', 'いいい'];
// 値を追加してみる(push)
// 追加できる↓
ArrayTest1.push('ううう');
// エラーが出る↓
// ArrayTest1.push(123)
const ArrayTest2 = ['あああ', 123];
// 追加できる↓
ArrayTest2.push(456);
// エラーが出る↓
// ArrayTest2.push(true)
const ArrayTest3 = ['あああ', 123, false];
// こうするとエラーになる
// const ArrayTest3:[string,number,boolean] = [false, 'あああ', 123, ]
//# sourceMappingURL=array.js.map