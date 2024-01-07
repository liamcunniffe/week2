
//activity 1- name, age and favourite colour program
let myName = "Liam";
let age = 19;
let myFavCol = "Red";

console.log(`Hi my name is ${myName} and I am ${age} years old. My favourite colour is ${myFavCol}.`)


//activity 2- what i have eaten today (breakfast, lunch and dinner)
let breakfast = "Cereal";
let lunch = "Sandwich";
let dinner = "Pizza";

console.log(`Today I had ${breakfast} for breakfast. Later in the day I ate a ${lunch} for lunch. Finally, I ate ${dinner} for dinner.`)

//activity 3- number of days between today (3rd Jan) and my birthday (11th April)
let date1 = new Date("01/03/2024");
let date2 = new Date("04/11/2024");

//time difference
let timeDiff = date2.getTime() - date1.getTime();

//calculate no. of days between
let amountOfDays = Math.round(timeDiff / (1000 * 3600 * 24));

//display the no. of days (the result)
console.log("Total number of days between today and birthday:\n" +
date1.toDateString() + "and" + date2.toDateString() +
"is:" + amountOfDays + "days");
