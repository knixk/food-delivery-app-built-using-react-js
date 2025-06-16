// const N = 10;

// function gamer() {
//     console.log("gamer")
// }

// for (let i = 1; i <= N; i++) {
//     gamer();
// }

// console.log(`gamer() fn was called, ${N} times!`)

// /*
// Works really well, screen recording is also really dope man,
// not sure how I got it so early,
// couldn't have imagined even slightly... but thank u /|\
// */

// arrow func
let myFunction = () => {
  // this should reference the global object, which is the file we're in
  console.log(this);
};

// normal fn
function myFunction2() {
  // this should reference the function's instance

  // console.log(`I am the context or the this keyword, ${myContext}`)
  console.log(this);
}

myFunction();

myFunction2();

let mytime = setTimeout(() => {}, 1000);
