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

//타입 가드 정의
function isDeveloper(target: Developer | job):target is Developer {
    return (target as Developer).skill !== undefined;
}
if(isDeveloper(nom)) {
    console.log(nom.skill);
} else {
    console.log(nom.age);
    
}