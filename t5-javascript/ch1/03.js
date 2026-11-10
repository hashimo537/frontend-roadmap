const promise = new Promise((resolve, reject) => {
  // 非同期処理
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("成功しました！"); // 成功時
    } else {
      reject("エラーが発生しました"); // 失敗時
    }
  }, 1000);
});

// 実践的な例：データ取得

// データを取得する関数（Promiseを返す）
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    console.log(`ユーザー ${userId} のデータを取得中...`);

    setTimeout(() => {
      // 成功をシミュレート
      if (userId > 0) {
        resolve({
          id: userId,
          name: "山田太郎",
          email: "yamada@example.com"
        });
      } else {
        reject("無効なユーザーIDです");
      }
    }, 1500);
  });
}

// 使用例
fetchUser(1)
  .then((user) => {
    console.log("ユーザー情報:", user);
  })
  .catch((error) => {
    console.error("エラー:", error);
  });

// 出力:
// ユーザー 1 のデータを取得中...
// （1.5秒後）
// ユーザー情報: { id: 1, name: "山田太郎", email: "yamada@example.com" }


// Promiseチェーン
// 複数の関数を定義
function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "山田太郎" });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "最初の投稿" },
        { id: 2, title: "2番目の投稿" }
      ]);
    }, 1000);
  });
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "素晴らしい！" },
        { id: 2, text: "参考になりました" }
      ]);
    }, 1000);
  });
}

// Promiseチェーンで連結
fetchUser(1)
  .then((user) => {
    console.log("ユーザー:", user.name);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log("投稿数:", posts.length);
    return fetchComments(posts[0].id);
  })
  .then((comments) => {
    console.log("コメント数:", comments.length);
  })
  .catch((error) => {
    console.error("エラー:", error);
  });

// 出力（各1秒間隔）:
// ユーザー: 山田太郎
// 投稿数: 2
// コメント数: 2


// Promise.all
const promise1 = fetchUser(1);
const promise2 = fetchUser(2);
const promise3 = fetchUser(3);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("全ユーザー:", results);
    // [{ id: 1, ... }, { id: 2, ... }, { id: 3, ... }]
  })
  .catch((error) => {
    // いずれかが失敗した場合
    console.error("エラー:", error);
  });


// Promise.race
  const slow = new Promise((resolve) => {
  setTimeout(() => resolve("遅い処理"), 3000);
});

const fast = new Promise((resolve) => {
  setTimeout(() => resolve("速い処理"), 1000);
});

Promise.race([slow, fast])
  .then((result) => {
    console.log("勝者:", result); // "速い処理"
  });


// コールバックとPromiseの比較
  
// コールバック版（読みにくい）
fetchUser(1, (user) => {
  fetchPosts(user.id, (posts) => {
    fetchComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});

// Promise版（読みやすい）
fetchUser(1)
  .then((user) => fetchPosts(user.id))
  .then((posts) => fetchComments(posts[0].id))
  .then((comments) => console.log(comments))
  .catch((error) => console.error(error));
