interface User {
    age:number;
    name:string;
}

//변수에 활용한 인터페이스
var eun:User = {
    age:29,
    name:'eunyoung'
}

//함수에 인터페이스 활용
function getUser(user:User) {
    console.log(user);
    
}
const capt = {
    name : '캡틴',
    age:100
}
getUser(capt); //인터페이스 형식을 따르는 데이터만 받겠다


//함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a:number, b:number):number
}

var sm : SumFunction;
sm = function(a:number, b:number):number {
    return a+b;
}


//인덱싱
interface StringArray {
    [index:number]:string;
}
var arrr:StringArray = ['a','b','c'];
//arrr[0]='안뇽';

//딕서녀리 패턴
interface StringRegexDictionary {
    [key:string]:RegExp;
}

var objj:StringRegexDictionary = {
    //sth : /abc/,
    cssFile: /\.css$/,
    jsFile : /\.js$/,
}

Object.keys(objj).forEach(function(value) {

})

//인터페이스 확장
interface Person {
    name : string;
    age : number;
}

interface Developer extends Person{
    language : string;
}

var captain:Developer = {
    language : 'ts',
    age:100,
    name : '캡틴'

}

