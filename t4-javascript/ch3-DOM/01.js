// 要素の取得と変更

// IDで要素を取得
const mainTitle = document.querySelector("#main-title");

// クラスで最初の要素を取得
const firstItem = document.querySelector(".list-item");

// クラスで全ての要素を取得
const allItems = document.querySelectorAll(".list-item");

// allItemsはNodeListなので、forEachでループ処理できる
allItems.forEach(item => {
  console.log(item.textContent);
});

const content = document.querySelector("#content");

// 内容を書き換える
content.innerHTML = "<h2>新しいタイトル</h2><p>これは新しい段落です。</p>";

// テキストだけを取得
console.log(content.textContent);
// "新しいタイトルこれは新しい段落です。"

