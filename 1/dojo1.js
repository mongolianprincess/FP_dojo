const organicRawChicken = `
 _     _  _     _  _  _  _  _
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|

`;

const { compose, map, split, tail, splitEvery, transpose, join, reduce, findIndex, equals} = require('ramda');

//const chickenBible = {
//    '     |  |': 1,
//    ' _  _||_ ': 2,
//};


const KFC = (acc, val, index) => {
    { acc[val] = index };
    return acc;
}

const cook = compose(map(join('')), transpose, map(splitEvery(3)), tail, split('\n'));

var cooked = cook(organicRawChicken);
var chickenBible = cooked.reduce(KFC, []);

var chickenConverter = (chickenBible, input) => {
  findIndex(equal(input)(chickenBible))
}

console.log(chickenBible);

//console.log('\n', cooked[0][5], '\n', cooked[1][5], '\n', cooked[2][5]);
