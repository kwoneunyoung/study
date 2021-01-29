//타입 추론 기본1

var aa = 'abv'; //변수선언

function getB(b=10) {
    var c = 'hi';
    return b + c;
}

// 타입 추론 기본2
// interface Dropping<T> {
//     value : T;
//     title : string;
// }
// var shoppingItems: Dropping<string> = {
//     value : 'sbv',
//     title:'helo'
// }

//타입추론 기본3
interface Dropping<T> {
    value : T;
    title : string;
}

interface DetailedDropping<K> extends Dropping<K>{
    description : string;
    tag : K;
    
}

var detailedItem : DetailedDropping<string> = {
    title: 'abcv',
    description : 'ab',
    value : 'a',
    tag : 'a'
}

// Best Common Type  
var aarr = [1,3,4];