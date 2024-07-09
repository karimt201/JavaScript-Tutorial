// logical operators - OR || and AND &&

const password = 'p@ssw';

if(password.length >= 12 && password.includes('@')){
    console.log("that's password is might strong");
} else if(password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log("that's password is long enough!");
}else {
    console.log("that's password is not long enough");
}

