// const pressGrindBeans = ()=> {
//     console.log("grinding for 20 seconds.")
// };
// pressGrindBeans();



// const favColour = ()=> {
//     console.log("my favourite colour is blue")
// };
// favColour();


// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {

//     if (coffeeIsGrinding){
//         console.log("stopping the grind")
//         coffeeIsGrinding = false;
//     } else {
//         console.log("grinding is about to begin")
//         coffeeIsGrinding = true
//     }
// };

// pressGrindBeans();

// const cashWithdrawal = (amount, accnum) => {
//     console.log('withdrawing ${amount} from account ${accnum}');
// }

// cashWithdrawal(300, 12345678)
// cashWithdrawal(90, 22222222)
// cashWithdrawal(20, 33333333)
// cashWithdrawal(3000, 44444444);

// const favColour = (colour) => {
//     console.log("my favourite colour is ${colour}")
// };

// favColour(blue);

//activity 1- turn into arrow function
const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
};
console.log(factorial(33));

//activity 2- two parameters and a running order count updated when the function is called
let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`order number: ${orderCount} - pizza with ${topping1} and ${topping2}}`)
    orderCount++;
    return orderCount;
};
takeOrder("pineapple", "ham");
takeOrder("chicken", "sweetcorn")
