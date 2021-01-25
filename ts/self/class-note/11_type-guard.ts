interface Developer {
    name : string;
    skill : string;
}

interface job {
    name : string;
    age : number;

}

function introduce(): Developer | job {
    return {name : 'Tony' , age: 33, skill : 'Making' }
}
var nom = introduce();
console.log(nom.name);


if ((nom as Developer).skill) {
    var skill = (nom as Developer).skill;
    console.log(skill);
} else if((nom as job).age) {
    var age = (nom as job).age;
    console.log(age);
    
}