async function fetchPosts() {
    // ユーザーリストを表示するul要素を取得
  const postsContainer = document.querySelector("#posts-container");

    try {
        // 1. データを取得する
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
    
        // 2. 取得したユーザーデータの配列をループ処理
        posts.forEach(post => {
        // 3. 各ユーザーごとにli要素を生成
        //カード要素を作成
        const card = document.createElement("div");
        card.classList.add("post.-card");
      
        // タイトル要素を作成
        const title = document.createElement("h2");
        title.textContent = post.title;

        // 本文要素を作成
        const body = document.createElement("p");
        body.textContent = post.body;

        // カードにタイトルと本文を追加
        card.appendChild(title);
        card.appendChild(body);


        // 4. コンテナにカードを追加
        postsContainer.appendChild(card);
        });
    }

    catch (error) {
    console.error("投稿の取得に失敗しました:", error);
    postsContainer.textContent = "投稿の取得に失敗しました。";
  }
}

fetchPosts();
