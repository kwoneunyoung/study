interface Deve {
    name : string;
    skill : string;
}

interface Pe {
    name : string;
    age : number;

}

function introduce():Deve | Pe {
    return {name : 'npm', age : 29, skill: 'cute'}
}
var ton = introduce();
console.log(ton.skill);

if((ton as Deve).skill) {
    var skilll = (ton as Deve).skill
    console.log(skilll);
} else if((ton as Pe).age) {
    var pp = (ton as Pe).age;
    console.log(pp);
}

//타입 가드 정의
function isDev(target:Deve | Pe):target is Deve {
    return (target as Deve).skill !== undefined;
}

if(isDev(ton)) {
    ton.skill
} else {
    ton.age
}