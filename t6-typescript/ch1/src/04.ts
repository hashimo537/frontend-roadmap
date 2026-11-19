// 型推論
// 変数 `name` は初期値 'Taro' から string 型だと推論される
let name = 'Taro';

// name = 123; // エラー: Type 'number' is not assignable to type 'string'.

// 変数 `age` は初期値 30 から number 型だと推論される
let age = 30;

// 変数 `isAdult` は初期値 true から boolean 型だと推論される
let isAdult = true;

// 型注釈
// 変数 `username` は string 型であることを明示的に注釈
let username: string;

username = 'Jiro'; // OK
// username = false; // エラー: Type 'boolean' is not assignable to type 'string'.

// 関数の引数と戻り値の型を注釈
function greet(name: string): string {
  return `Hello, ${name}`;
}

