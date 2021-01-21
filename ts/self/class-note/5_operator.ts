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

interface Developerr {
    name : string;
    skill : string;
}
 
interface PPerson {
    name : string;
    age : number;
}



// function askSomeone(someone:Developerr | PPerson) {
//     //someone.name;

// }

// askSomeone({name : '디벨로퍼', skill : '웹개발'});
// askSomeone({name : '캡틴', age : 100});

function askSomeone(someone: Developerr & PPerson) {
    someone.name;
    someone.skill;
    someone.age;
}
askSomeone({name : '디벨로퍼', skill : '웹개발', age : 200});
//askSomeone({name : '캡틴', age : 100});

// var nom : string | number | boolean;
// var noo : string & number & boolean;