interface ApiSuccessResponse<T> {
    status: 'success';
    data: T;
}
interface ApiErrorResponse {
    status: 'error';
    message: string;
}
type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
declare function handleResponse<T>(response: ApiResponse<T>): void;
interface User {
    id: number;
    name: string;
}
interface Product {
    id: string;
    name: string;
    price: number;
}
declare const userResponse: ApiResponse<User>;
declare const productResponse: ApiResponse<Product>;
declare const errorResponse: ApiResponse<never>;
