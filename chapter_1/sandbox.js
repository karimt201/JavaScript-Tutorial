// object literals

let user = {
    name : 'crystal',
    age : 30,
    email : 'crystal@ninja.com',
    location : 'berlin',
    Blog : ['why mac and cheese rules','10 things to make with marmite'] 
};

console.log(user);
console.log(user.name);

// user.age= 40
console.log(user.age);

console.log(user['email']);

user['location']= 'london';
console.log(user['location']);

console.log(typeof user);
