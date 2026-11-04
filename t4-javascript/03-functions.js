// 関数の定義
function greet() {
  console.log("こんにちは！");
}

// 関数の呼び出し
greet(); // "こんにちは！"
greet(); // "こんにちは！"（何度でも呼び出せる）

// 引数を1つ受け取る関数
function greet(name) {
  console.log(`こんにちは、${name}さん！`);
}

greet("太郎"); // "こんにちは、太郎さん！"
greet("花子"); // "こんにちは、花子さん！"

// 複数の引数を受け取る関数
function add(a, b) {
  console.log(a + b);
}

add(3, 5); // 8
add(10, 20); // 30


// 戻り値を返す関数
function add(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result); // 8

// 戻り値を直接使う
console.log(add(10, 20)); // 30

// 計算結果を別の計算に使う
const total = add(100, 200) + add(50, 50);
console.log(total); // 400

// アロー関数
const add = (a, b) => {
  return a + b;
};

// 処理が1行の場合は、さらに短く書ける
const add = (a, b) => a + b;

// 引数が1つの場合は、括弧も省略できる
const double = x => x * 2;

console.log(add(3, 5)); // 8
console.log(double(4)); // 8

// デフォルト引数
function greet(name = "ゲスト") {
  console.log(`こんにちは、${name}さん！`);
}

greet("太郎"); // "こんにちは、太郎さん！"
greet();       // "こんにちは、ゲストさん！"

// アロー関数でも同様
const multiply = (a, b = 1) => a * b;

console.log(multiply(5, 3)); // 15
console.log(multiply(5));    // 5

// スコープの基本
function example() {
  const message = "関数内の変数";
  console.log(message); // OK
}

example();
// console.log(message); // エラー！関数外からはアクセスできない

// グローバル変数は関数内からアクセスできる
const globalMessage = "グローバル変数";

function showMessage() {
  console.log(globalMessage); // OK
}

showMessage(); // "グローバル変数"
