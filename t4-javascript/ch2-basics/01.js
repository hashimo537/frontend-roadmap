// 配列の作成
const fruits = ["Apple", "Banana", "Cherry"];

// インデックスを使ったアクセス
console.log(fruits[0]); // "Apple"
console.log(fruits.length); // 3

const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

const lastNumber = numbers.pop();
console.log(lastNumber); // 4
console.log(numbers); // [1, 2, 3]

// 各要素を2倍にした新しい配列を作成
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 偶数だけを集めた新しい配列を作成
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
