function funcTest(str, int) {
    console.log(`文字は${str}、値は${int}です`);
}
// 今回はリターン（戻り値）がないのでvoidで指定する
funcTest('あああ', 123);
// アロー関数
const arrowFuncTest = (str, int) => {
    console.log(`文字は${str}、値は${int}です`);
};
arrowFuncTest('アロー関数', 567);
// 引数があるかどうかわからない
const funcTestQ = (str, int) => {
    console.log(str, int);
};
funcTestQ('Qマーク');
// デフォルト値を設定しておくパターン
const funcTestD = (int, str = "aaa") => {
    console.log(str, int);
};
funcTestD(678);
// 可変長
const eachNumber = (...items) => {
    for (const item of items) {
        console.log(item);
    }
};
eachNumber(1, 2, 3);
//# sourceMappingURL=function.js.map