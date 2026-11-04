// 算術演算子
// 文字列の連結にも＋演算子を使用
const lastName = '山田';
const firstName = '太郎';
const fullName = lastName + ' ' + firstName; // "山田 太郎"

// 比較演算子trueまたはfalseで返す
5 > 3 // 3より大きい　true
5 < 3 // 3より小さい false
5 >= 5 // 5以上 true
5 <= 3 // 3以下false
5 == "5"; // 等価（値が等しい）　true
5 != "5"; // 不等価（値が等しくない） false
5 === "5"; // 厳密等価（値と型が等しい）false
5 !== "5"; // 厳密不等価（値または型が等しくない）true


// 論理演算子
(5 > 3) && (1 < 2) // ANDかつ　true
    (5 < 3) || (1 < 2) // ORまたは　true
!(5 > 3) // NOTではない　false



// ショートサーキット評価
const user = null;
// userがnullなので、user.isAdminの評価は実行されず、エラーにならない
if (user && user.isAdmin) {
  console.log('管理者です');
}
