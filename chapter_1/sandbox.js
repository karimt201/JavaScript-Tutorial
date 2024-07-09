// else if statemants

const password = 'password1232';

if(password.length >= 12){
    console.log("that's password is might strong");
} else if(password.length >= 8){
    console.log("that's password is long enough!");
}else {
    console.log("that's password is not long enough");
}