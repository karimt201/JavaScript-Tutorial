// object literals

// const blogs = [
//     {title : 'why mac and cheese rules', likes : 30},
//     {title : '10 things to make with marmite', likes : 50}
// ];

// console.log(blogs);

let user = {
    name : 'crystal',
    age : 30,
    email : 'crystal@ninja.com',
    location : 'berlin',
    Blog : [
        {title : 'why mac and cheese rules', likes : 30},
        {title : '10 things to make with marmite', likes : 50}
    ],
    login() {
        console.log('the user logged in ');
    },
    logout() {
        console.log('the user logged out');
    },
    logblog(){
        console.log('this user has written this following blog :');
        this.Blog.forEach(h => {
            console.log(h.title,h.likes);
        })
    }
};

user.login();
user.logout();
user.logblog();

a = ['a','b','c','d'];
a.forEach(function (person,index) {
    console.log(person,index);
});