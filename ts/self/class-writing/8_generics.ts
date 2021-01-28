// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10);
// logText('하잉');

// function logText<T>(text:T):T {
//     console.log(text);
//     return text;
// }
// logText<string>('10');

// function logText(text:string) {
//     console.log(text);
//     return text;
// }
// function logNumber(num : number) {
//     console.log(num);
//     return num;
    
// }

// function logText(text : string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('a');
// a.split('')
// logText(10);


function logText<T>(text:T):T {
    console.log(text);
    return text;
}

const st = logText<string>('abc');
st.split('');
const login = logText<boolean>(true);

// logText('a');
// logText(10);

//인터페이스에 제네릭 선언하는 방법
// interface dropdown {
//     value : string;
//     selected : boolean;
// }

// const ob: dropdown =  {value : 'abc', selected : false

// }

interface dropdown<T> {
    value : T;
    selected : boolean;

}
const ob: dropdown<string>  = {value : 'abc', selected : false}