let coffeeOrder = [
   "Alex - Cortado",
   "Ben - Cortado",
   "Charlie - Whatevers new"
];

coffeeOrder.push("Donna - Espresso");

console.log(coffeeOrder);

coffeeOrder.pop();

console.log(coffeeOrder);







// activity 1- array of three favourite songs, with two more added and then the last removed
let favSongs = [
   "Nas - NY State of Mind",
   "Kanye West - Can't Tell Me Nothing",
   "Eminem - Sing For The Moment"
];

favSongs.push("J Cole - 03 Adolesense");

favSongs.push("Kanye West - Touch The Sky");

console.log(favSongs);

favSongs.pop();

console.log(favSongs);


//activity 2- program to demonstrate the use of .splice

const months = ['jan', 'march', 'april', 'june'];
months.splice(1, 0, 'feb');
inserts at index 1
console.log(months);
expected output; array ["jan", "feb", "march", "april", "june"]

months.splice(4, 1, 'may');
replaces 1 element at index 4
console.log(months);
expected output; array ["jan", "feb", "march", "april", "may"]

let coffeeOrder = [
   "Coffee",
    "Cortado",
    "Tea",
   "hot choc",
   "water"
    
];
for (let i = 0; i < coffeeOrder.length; i++){
    console.log(coffeeOrder[i]);
}

console.log(coffeeOrder[0])
console.log(coffeeOrder[1])
console.log(coffeeOrder[2])

let multiplesTwo = [];

for (i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i)
    };
};

console.log(multiplesTwo);

let cards = ["clubs", "diamonds", "hearts", "spades"];
let currentCard = "clubs";

while (currentCard != "spades"){
    console.log(currentCard);
    currentCard = cards[ Math.floor(math.random()*4)];

};

console.log(currentCard)






