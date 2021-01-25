//타입 추론 기본
var a = 10;

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}
10 + '10' //1010

//타입 추론 기본2
// interface Dropdownn<T> {
//     value : T;
//     title : string;
// }
// var shoppingItem: Dropdownn<string> = {
//     value : 'abc',
//     title : 'hello'
// }

//타입 추론 기본3
interface Drop<T>{
    value :T;
    title : string;
}
interface DetailDrop<K> extends Drop<K>{
    description : string;
    tag : K;
}

var detaildItem : DetailDrop<string> = {
    title : 'abv',
    description : 'ab',
    value : 'a',
    tag : 'a'
}

//Best Common Type
var numm = [1,2,true,true,'a'];
 









