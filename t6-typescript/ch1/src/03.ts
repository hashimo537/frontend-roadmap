//string型
const name: string = "Taro";
const greeting: string = `Hello, ${name}!`;

//number型
const age: number = 25;
const price: number = 1980.5;
const hex: number = 0xff; // 16進数


//boolean型
const isActive: boolean = true;
const hasPermission: boolean = false;

//配列の型
// 書き方1: 型名[]
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Taro", "Hanako", "Jiro"];

// 書き方2: Array<型名>（ジェネリクス構文）
const scores: Array<number> = [80, 90, 75];


//オブジェクトの型
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Taro",
  age: 25,
  email: "taro@example.com"
};


//typeを使う方法
type Product = {
  id: number;
  name: string;
  price: number;
};

const product: Product = {
  id: 1,
  name: "TypeScript入門",
  price: 2980
};

