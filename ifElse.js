// if(2 == "2"){
//     console.log("this is true")
// }
// else{
//     console.log("this is false"

//activity 1
let age = 19;

if (age > 17) {
    console.log("Yes I can serve you")
    
}

else {
    console.log("You aren't old enough")
};

//activity 2
let topping = "pepperoni";

switch(topping) {
    case "pepperoni":
        console.log("This is an important ingredient for my pizza");
        break;

};

//activity 3- checking how many letters are in a password
let password = "randompassword";

if (password.length < 8) {
    console.log("Password is too short")
    
}

else {
    console.log(password)
};

//activity 5
let num = "12344321";
let stringStatus = "is";

for ( let i = 0; i < num.length / 2; i++){
    if ( num[i] != num[num.length - 1 - i]){
        console.log("not a palindrome");
        stringStatus = "not";
        break;
    };
};

if (stringStatus == "is"){
    console.log("it is a palindrome")
    
} else {
    console.log("not a palindrome")

};



