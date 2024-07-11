// primitive values

let scoreOne = 70;
let scoreTwo = scoreOne;

console.log(`score one : ${scoreOne} score two : ${scoreTwo}`);

scoreOne = 50;

console.log(`score one : ${scoreOne} score two : ${scoreTwo}`);

// reference values

const userOne = {name : 'ryu', age : 30};
const userTwo = userOne;

console.log(userOne,userTwo);

userOne.age = 20;

console.log(userOne,userTwo);