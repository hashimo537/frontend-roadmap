// 4-1-2 変数とデータ型

// ── 教材のコード ──
// 1. 変数を宣言
const userName = "田中太郎";
let userAge = 25;

// 2. 変数を使って表示
console.log(`名前: ${userName}`);
console.log(`年齢: ${userAge}歳`);

// 3. 再代入（letのみ可能）
userAge = 26;
console.log(`来年の年齢: ${userAge}歳`);

// 4. 配列とオブジェクト
const hobbies = ["読書", "映画鑑賞", "プログラミング"];
const profile = {
  name: userName,
  age: userAge,
  hobbies: hobbies
};

console.log(profile);

