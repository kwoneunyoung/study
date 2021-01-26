enum Shoes {
    Nike = '나이키',
    Adidas='아디다스'
    
}

var MyShoes = Shoes.Nike;
console.log(MyShoes); //'나이키'


//예제
enum Answer {
    Yes = 'y',
    No = 'n'
}

function askQuestion(answer: Answer) {
    if(answer == Answer.Yes) {
        console.log('정답입니다');
    }
    if(answer == Answer.No) {
        console.log('오답입니다');
        
    }
}
askQuestion(Answer.Yes);
//askQuestion('yes');