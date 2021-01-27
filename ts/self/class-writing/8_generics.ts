// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10);
// logText('하잉');

function logText<T>(text:T):T {
    console.log(text);
    return text;
}
logText<string>('10');