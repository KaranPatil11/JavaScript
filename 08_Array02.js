
const marvelHero = ["Thor", "Ironman", "Spiderman"]
const dcHero = ["Batman", "Superman", "Flash"]


// marvelHero.push(dcHero)

// console.log(marvelHero);
// console.log(marvelHero[3][0]);

// const allHero = marvelHero.concat(dcHero)
// console.log(allHero);

// const allNewHero = [...marvelHero, ...dcHero]   //Spread operator
// console.log(allNewHero);


// const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5] ]]

// const realanotherArr = anotherArr.flat(Infinity)
// console.log(realanotherArr);

console.log((Array.isArray("Karan")));
console.log((Array.from("Karan")));
console.log(Array.from({name: "Karan"}));   // Empty array  console.log(Array.from(Object.values({ name: "Karan" })));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));