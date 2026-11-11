async function displayUsers() {
  // ユーザーリストを表示するul要素を取得
  const userList = document.querySelector("#user-list");

  // 1. データを取得する
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  // 2. 取得したユーザーデータの配列をループ処理
  users.forEach(user => {
    // 3. 各ユーザーごとにli要素を生成
    const listItem = document.createElement("li");
    listItem.textContent = user.name;

    // 4. ul要素にli要素を追加
    userList.appendChild(listItem);
  });
}

displayUsers();
