// let time = 7000

// const alarm = {
//     weekendAlarm: "no alarm needed"
// }


//activity 1- adding a function called sayHi
const person = {
    name: "Liam",
    age: 19,
    favouriteSongs: [
        "Sing For The Moment",
        "Levels",
        "Juicy",
        "NY State of Mind"

    ],
    sayHi(){
        console.log(`Hello my name is ${this.name}`)
    }
}
person.sayHi()


//activity 2- object called pet with eating and drinking methods
const pet = {
    petName: "Trevor",
    typeOfPet: "Dog",
    age: "1 year old",
    colour: "black and brown fur",
    eat() {
        console.log(`My pet ${this.petName} is eating.`)
    },
    drink() {
        console.log(`My pet ${this.petName} is drinking.`)
    }
     
}
pet.eat(),
pet.drink();

//activity 3
const coffeeShop = {
    branch: "Manchester",
    drinksWithPrices: [
        "Cappucino - £.20" == 120,
        "Latte- £1.20" == 120,
        "Filter coffee- £1.00" == 100,
        "Tea- £1.00" == 100,
        "Hot chocolate- £1.00" == 100
    ],
    foodWithPrices: [
        let croissant("Croissant is £1.20") == 1.20,
        "Baguette- £1.50" == 150,
        "Chocolate cake- £1.50" == 150,
        "Pie- £1.20" == 120,
        "Ham sandwich- £1.00" == 100,
        "Cheese sandwich- £1.00" == 100,
        

    ],

    drinksOrdered: `Your ${croissant}`
    
}
console.log(drinksOrdered)