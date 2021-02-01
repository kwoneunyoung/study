type Heros = 'Hulk' | 'Capt' | 'Thor'
type HeroAge = { [K in Heros]:number }
const age : HeroAge = {
    Hulk : 33,
    Capt : 18,
    Thor : 1000
}

//for in 반복문코드
// var ary = ['a','b','c'];
// for(var key in ary) {
//     console.log(arr[key]);
    
// }