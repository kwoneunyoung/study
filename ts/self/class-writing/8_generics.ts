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

function logText(text : string | number) {
    console.log(text);
    return text;
}

const a = logText('a');
logText(10);
