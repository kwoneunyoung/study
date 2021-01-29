//인터페이스
interface Dd {
    name : string;
    skill : string;
}
interface Pp {
    name : string;
}
var dd : Dd;
var ppt : Pp;

//함수
var plus = function(a:number) {
    console.log(a);
}
var ss = function(a:number, b:number) {
    
}

//제네릭
interface Empty<T> {

}
var empty1:Empty<string>;
var empty2:Empty<number>;
//empty1 = empty2;

interface NotEmpty<T> {

}