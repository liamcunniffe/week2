// activity 1- array that lists 5 favourite movies, two more added using .push method
let favFilms = [
    "Pulp Fiction",
    "Interstellar",
    "Goodfellas",
    "The Dark Knight",
    "Whiplash"

];

favFilms.push("Raging Bull");
favFilms.push("Snatch");

console.log(favFilms)

// activity 2- generate six random numbers between 1-50
let generate = Math.floor((Math.random() * 50) * 6)
console.log(generate)

//activity 3- countdown from 9-0
function countdown(n){
    console.log(n);

    return n ? countdown(n - 1) : 0;
}
countdown(9);

//activity 4

let movies = [
    "movie 1",
    "movie 2",
    "movie 3",
    "movie 4"
];
if(movies[3] == "ghostbusters"){
    console.log("yay its ghostbusters")
} else {
    console.log("boo! we want ghostbusters")
}