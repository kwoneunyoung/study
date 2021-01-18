let studentID:number= 12345;
let studentName:string = 'nomi';
let age:number = 29;
let gender:string= 'female';
let subject:string = 'javaScript';
let courseCompleted:boolean= false;

let student1 = {
    studentID:1111,
    studentName:'eunsu',
    age:3,
    gender:'male',
    subject:'cute',
    courseCompleted:false
}

interface Student {
    readyonly:studentID: number;
    studentName : string;
    age?: number;
    gender:string;
    subject:string;
    courseCompleted:boolean;
    //addComment(comment:string):string;
    addComment?:(comment:string)=>string;
}

function getStudentDetails(studentID:number):Student 
 {
    return {
        studentID:12345,
        studentName:'fufu',
        gender:'female',
        subject:'cat',
        courseCompleted:true
    };
}

function saveStudentDetails(student:Student):void {
    
}

saveStudentDetails(student1);