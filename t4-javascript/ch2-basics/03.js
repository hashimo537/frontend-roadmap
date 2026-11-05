// 配列の結合
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

// オブジェクトのマージ
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }


// 配列の分割代入
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first);  // 1
console.log(second); // 2

// オブジェクトの分割代入
const user = { name: "John Doe", age: 30 };
const { name, age } = user;
console.log(name); // "John Doe"
console.log(age);  // 30
