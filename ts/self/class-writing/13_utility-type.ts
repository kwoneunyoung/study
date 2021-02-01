interface Product {
    id:number;
    name : string;
    price : number;
    brand : string;
    stock : number;
    something : object;
}

//상품 목록을 받아오기위한 API 함수
function fetchProducts():Promise<Product[]> {
    //..
}

// interface ProductDetail {
//     id : number;
//     name : string;
//     price:number;
// }

//특정 상품의 상세 정보를 나타내기 위한 함수
type shopppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shopppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

// interface UpdateProduct {
//     id? : number;
//     name? : string;
//     price? : number;
//     brand? : string;
//     stock? : number;
// }

type UpdateProduct = Partial<Product>
// 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {

}

// 유탈리티 타입 구현하기 - Partial
interface UserProfile {
    username : string;
    email:string;
    profilePhotoUrl : string;
}

// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

//#1
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?:UserProfile['profilePhotoUrl'];
// }

// #2 
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?:UserProfile[p]
// }
// type UserProfilKeys = keyof UserProfile

//#3
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}

//#4
type set<T>= {
    [p in keyof T]?: T[p]
}

