enum Shoes {//별도로 값을 정해주지않으면 숫자로 취급하는 이넘
    Nike = '나이키',
    Adidas = '아디다스'
}
var myShoes = Shoes.Nike;
console.log(myShoes); 


//예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer:Answer) {
    if(answer == Answer.Yes) {
        console.log('정답입니다');
    }
    if(answer == Answer.No) {
        console.log('오답입니다.');
        
    }
}
askQuestion(Answer.Yes);
