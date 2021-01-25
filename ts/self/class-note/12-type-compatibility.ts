//인터페이스
interface Developers {
    name: string;
    skill: string;
}

// interface Jobs {
//     name : string;
//}

class Jobs {
    name : string;
    skill : string;
}


var developers : Developers;
var jobs : Jobs;
//developers = jobs;
developers = new Jobs();