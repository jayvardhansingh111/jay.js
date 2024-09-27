// const id = symbol('123')
// const anotherId = symbol('123')

// console.log(id === anotherId);

// // 2.non primitive : array, object, function

const array=["first","second","third"]

const gnit =12345578n
console.log(typeof gnit)
// let obj={
//     Work:"annlyst",
//     workexperince:"4"
// }

// let myfunction=function(){
//     console.log("Hello world")
// }

// //  ((((((((  memory     )))))))))

// // there are two type of memory
// 1. stack
let myname="jay"
let anothername=myname
anothername="vardhan"

console.log(myname)
console.log(anothername)


// 2. heap
let userOne ={
       email:"User@google.com",
       upi :"user@ybl"
}
let userTwo = userOne
userTwo.email="jay@google.com";
userTwo.upi="jack@ybl"

console.log(userOne.email)
console.log(userTwo.email)
console.log(userOne.upi)
console.log(userTwo.upi)

