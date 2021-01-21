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



