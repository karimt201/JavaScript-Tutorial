// callbacks & foreach

// const myfunc = (callbackfunc) => {
//     //  do something
//     let value = 50;
//     callbackfunc(value);
// };

// myfunc(function (valu) {
//     // do something
//     console.log(valu);
// })

let people = ['mario' ,'luigi' ,'ryu' ,'shaun' ,'shun-li' ];

const logperson = ((person,index) => {
    console.log(`${index} - hello ${person}`);
});

people.forEach(logperson);

// people.forEach((person,index) => {
//     console.log(index,person);
// });