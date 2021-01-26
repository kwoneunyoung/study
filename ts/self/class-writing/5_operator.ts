// function logMessage(value:any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);
// logMessage(false);

var sehoo : string | number | boolean;
function logMessage(value:string | number) {
    if(typeof value == 'number') {
        value.toLocaleString();     
    }
    if(typeof value == 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number'); 
}
logMessage('hello');
logMessage(100);


interface Deverloper {
    name : string;
}

interface Person {
    name : string;
    age:number;
}

function askSomeone(someone:Developer | Person) {

}