//함수의 파라미터에 타입을 정의하는 방식
// function sum(a:number,b:number) {
//     return a+b;
// }
//sum(10,20);

//함수의 반환 값에 타입을 정의하는 방식
function add():number {
    return 10;
}

//함수에 타입을 정의하는 방식
function sum(a:number, b:number):number {
    return a+b;
}

// 함수의 옵셔널 파라미터 : 필요에 따라 인자를 2개 넘길 수도 있고 하나만 넘길 수도 있다
function log(a:string, b?:string) {

}
log('hello world');
log('하이', '하하하이');
