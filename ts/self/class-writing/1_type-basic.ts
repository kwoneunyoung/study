//js 문자열 선언방식
//var str = 'hello';

//ts 문자열 선언
let str: string = 'hello';

//ts 숫자 선언
let num : number = 10;

//ts 배열
let arr: Array<number> = [1,2,3];
let herose : Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1,2,3];

//TS 튜플 : 순서의 타입까지 정하는 것
let address: [string, number] = ['hadan',10];

//TS 객체
let obj: object = {};
// let person: object = {
//     name : 'capt',
//     age : 100
// };

let person: {
    name : string,
    age: number;
} = {
   name : 'thor',
   age:1000 
}

//TS 진위값
let show:boolean = true;