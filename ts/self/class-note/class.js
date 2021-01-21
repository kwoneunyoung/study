function People(name, age) {
    this.name = name;
    this.age = age;
}
var capt = new People('캡틴',100);


class People {
    //클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}
var cat = new People('푸푸','6'); //생성 되었습니다라고 출력 된다.
console.log(cat);