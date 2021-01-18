"use strict";
var studentID = 12345;
var studentName = 'nomi';
var age = 29;
var gender = 'female';
var subject = 'javaScript';
var courseCompleted = false;
var student1 = {
    studentID: 1111,
    studentName: 'eunsu',
    age: 3,
    gender: 'male',
    subject: 'cute',
    courseCompleted: false
};
function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: 'fufu',
        gender: 'female',
        subject: 'cat',
        courseCompleted: true
    };
}
function saveStudentDetails(student) {
}
saveStudentDetails(student1);
