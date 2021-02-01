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

type shopppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shopppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}