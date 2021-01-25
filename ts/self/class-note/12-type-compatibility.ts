//인터페이스
interface Developers {
    name: string;
    skill: string;
}

interface Jobs {
    name : string;
    //skill : string;
}

// class Jobs {
//     name : string;
//     skill : string;
// }


var developers : Developers;
var jobs : Jobs;
//developers = jobs;
//developers = jobs;

//함수
var plus = function(a:number) {
}
var som = function(a:number, b:number ) {
    
}
som = plus;
//plus = som;


//제네릭
interface Empty<T> {

}
var empty1:Empty<string>;
var empty2:Empty<number>;
//empty1 = empty2;
//empty2 = empty1

interface NotEmpty<T> {
    data : T;

}

var notempty1 : NotEmpty<string>;
var notempty2 : NotEmpty<number>;













