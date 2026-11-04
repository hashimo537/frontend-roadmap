// 繰り返し処理（for,for...of）

// 基本構文
// for (初期化式; 条件式; 増減式) {繰り返したい処理}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// 出力:
// 1
// 2
// 3
// 4
// 5



const fruits = ["りんご", "バナナ", "みかん"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// 出力:
// "りんご"
// "バナナ"
// "みかん"


// for (const 要素 of イテラブルオブジェクト) {各要素に対して行いたい処理}
// イテラブルオブジェクト：配列や文字列など反復可能なオブジェクト
// 要素：ループの各反復で、オブジェクトから取り出された要素が格納される変数

for (const fruit of fruits) {
  console.log(fruit);
}
// 出力:
// "りんご"
// "バナナ"
// "みかん"



// ループの制御：breakとcontinue
const numbers = [1, 5, 10, 15, 20];

for (const num of numbers) {
  if (num === 10) {
    console.log("10を見つけました！");
    break; // ループを終了
  }
  console.log(num); // 10に到達するまで実行される
}
// 出力:
// 1
// 5
// "10を見つけました！"


// 偶数だけをスキップ
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // 偶数の場合は、この後のconsole.logをスキップして次のループへ
  }
  console.log(i);
}
// 出力:
// 1
// 3
// 5
// 7
// 9