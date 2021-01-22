// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자 10
// logText('하이'); //문자열 하이
// logText(true); //진위값 true

// function logText<T>(text:T):T {
//     console.log(text);
//     return text;
    
// }
// logText<string>('하이');

// function logText(text:string) {
//     console.log(text);
//     return text;
// }

// function logNum(num:number) {
//     console.log(num);
//     return num;
// }


// function logText(text:string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('a');
// logText(10);

function logText<T>(text:T):T {
    console.log(text);
    return text;
}

const strr = logText<string>('abc');
strr.split('')
const login = logText<boolean>(true);
// logText('a');
// logText(10); 

//인터페이스에 제니릭을 선언하는 방법
// interface Dropdown {
//     value : string;
//     selected : boolean;
// }

// const ob : Dropdown = {
//     value : 'abc',
//     selected : false
// };

interface Dropdown<T> {
    value : T;
    selected : boolean;
    } 
const ob:Dropdown<string> = {value : 'abc', selected : false};

//제네릭의 타입 제한
function logTextLength<T>(text: T[]):T[] {
    console.log(text.length);
    text.forEach(function(text){
        console.log(text);
        
    })
    return text;
}

logTextLength<string>(['hi','fufu']);