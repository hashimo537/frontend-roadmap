//1.async関数の基本
// async関数は常にPromiseを返す
async function greet() {
  return "こんにちは";
}

// 以下と同じ意味
function greet() {
  return Promise.resolve("こんにちは");
}

// 使い方
greet().then((message) => {
  console.log(message); // "こんにちは"
});


//2.await演算子
// Promiseを返す関数
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "太郎", age: 25 });
    }, 1000);
  });
}

// then を使った書き方
fetchData().then((data) => {
  console.log(data);
});

// async/await を使った書き方
async function getData() {
  const data = await fetchData(); // Promiseが解決されるまで待つ
  console.log(data);
}

getData();


//3.Promiseチェーンとの比較
// Promiseチェーン版
getUser(1)
  .then((user) => {
    console.log("ユーザー:", user.name);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("投稿数:", posts.length);
    return getComments(posts[0].id);
  })
  .then((comments) => {
    console.log("コメント数:", comments.length);
  })
  .catch((error) => {
    console.error("エラー:", error);
  });

// async/await版（より直感的！）
async function fetchAllData() {
  try {
    const user = await getUser(1);
    console.log("ユーザー:", user.name);

    const posts = await getPosts(user.id);
    console.log("投稿数:", posts.length);

    const comments = await getComments(posts[0].id);
    console.log("コメント数:", comments.length);
  } catch (error) {
    console.error("エラー:", error);
  }
}

fetchAllData();

//4.エラーハンドリング
async function fetchUser(id) {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);

    if (!response.ok) {
      throw new Error("ユーザーが見つかりません");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("エラー:", error.message);
    return null;
  }
}

//5.並列実行
// 順次実行（遅い）
async function sequential() {
  const user1 = await getUser(1); // 1秒待つ
  const user2 = await getUser(2); // さらに1秒待つ
  const user3 = await getUser(3); // さらに1秒待つ
  // 合計3秒
}

// 並列実行（速い）
async function parallel() {
  const [user1, user2, user3] = await Promise.all([
    getUser(1),
    getUser(2),
    getUser(3)
  ]);
  // 合計1秒（最も遅い処理の時間）
}
