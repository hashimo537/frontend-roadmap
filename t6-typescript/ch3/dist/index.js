"use strict";
// 1. 型の定義
// 3. レスポンスを処理するジェネリック関数の実装
function handleResponse(response) {
    // `status`プロパティの値に基づいて型を絞り込む (Discriminated Unions)
    if (response.status === 'success') {
        // このブロック内では、responseは `ApiSuccessResponse<T>` 型として扱われる
        console.log('Success! Data:', response.data);
    }
    else {
        // このブロック内では、responseは `ApiErrorResponse` 型として扱われる
        console.log('Error! Message:', response.message);
    }
}
// --- 成功ケースのシミュレーション ---
const userResponse = {
    status: 'success',
    data: { id: 1, name: 'Taro Yamada' },
};
const productResponse = {
    status: 'success',
    data: { id: 'abc-123', name: 'Laptop', price: 150000 },
};
// --- 失敗ケースのシミュレーション ---
const errorResponse = {
    // データがないのでneverを指定
    status: 'error',
    message: 'Could not fetch data from the server.',
};
console.log('--- Handling User Response ---');
handleResponse(userResponse);
console.log('\n--- Handling Product Response ---');
handleResponse(productResponse);
console.log('\n--- Handling Error Response ---');
handleResponse(errorResponse);
/*
--- 期待される出力 ---

--- Handling User Response ---
Success! Data: { id: 1, name: 'Taro Yamada' }

--- Handling Product Response ---
Success! Data: { id: 'abc-123', name: 'Laptop', price: 150000 }

--- Handling Error Response ---
Error! Message: Could not fetch data from the server.

*/
