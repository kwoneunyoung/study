let arr = [
    { gender : 'male', name : 'nom'},
    { gender : 'female', name : 'nom2'},
    { gender : 'male', name : 'nom3'}
]

const filtered = arr.filter(function(item){
    if(item.gender == 'female') {
        return item;
    }
});
console.log(filtered);