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
    skill:string;
}

interface Person {
    name : string;
    age:number;
}

// function askSomeone(someone: Deverloper | Person) {
//     someone.name; 
    
// }

// askSomeone({ name : '디벨로퍼', skill:'웹 개발' });
// askSomeone({name:'캡친', age : 100});


function askSomeone(someone: Deverloper & Person) {
    someone.name;
    someone.skill;
    someone.age;
}

askSomeone({ name : '디벨로퍼', skill:'웹 개발', age:100 });
//askSomeone({name:'캡친', age : 100});



// var sseho : string | number | boolean;
// var ccapt : string & number & boolean;