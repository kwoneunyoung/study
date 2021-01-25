//타입단언
// var a;
// a = 20;
// a = 'a';
// var b = a as string;

//DOP API 조작 : 웹페이지에 태그로 접근 할 수 있음

var div = document.querySelector('div');
if(div) {
    div.innerText
}