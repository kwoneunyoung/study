//타입 추론 기본
var a = 10;

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}
10 + '10' //1010

//타입 추론 기본2
interface Dropdownn<T> {
    value : T;
    title : string;
}
var shoppingItem: Dropdownn<string> = {
    value : 'abc',
    title : 'hello'
}