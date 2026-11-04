//　条件分岐

// １、if文：もし〜なら
const score = 80;

if (score >= 60) {
  console.log("合格です！"); // "合格です！" と表示される
}

const age = 18;
if (age < 20) {
  console.log("未成年です。"); // 表示されない
}

// else文：そうでなければ

if (age < 20) {
  console.log("未成年です。入場できません。");
} else {
  console.log("成人です。どうぞお入りください。"); // "成人です。どうぞお入りください。" と表示される
}

// else if:さらに別の条件の場合

if (score >= 90) {
  console.log("優");
} else if (score >= 70) {
  console.log("良"); // "良" と表示される
} else if (score >= 50) {
  console.log("可");
} else {
  console.log("不可");
}

// 三項演算子：シンプルなif-elseのショートカット

const message = age >= 20 ? "成人" : "未成年";

console.log(message); // "成人"
