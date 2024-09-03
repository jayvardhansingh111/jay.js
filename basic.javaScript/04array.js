// Array

const myArr=[1,2,3,4,5,"jay"]
const myHeros=["shaktiman","nagraj","jugnu"]

const myArr2=new Array(1,2,3,4,5)
// console.log(myArr2[2]);

// metod of array

const myArray=[1,2,3,4,5,]
myArray.push(6)                      // push use for add a value
// console.log(myArray)

myArray.pop()                       // use for remove a valu 
// console.log(myArray);

myArray.shift ()               // use for add a value in the first of array
// console.log(myArray);

myArray.unshift(1)              // use for remove the value from first of array
// console.log(myArray);


// console.log(myArray.includes(4));   //for asking ques value present or not
// console.log(myArray.indexOf(3));     //know the num of which position

// const newarr=myArray.join()          // use fo change the array into string
// console.log(myArray);
// console.log(newarr);
// console.log(typeof newarr);

// slice and splice
// console.log("A",myArray);

// const mya1=myArray.slice(1,3)        //give the value without any change in original array
// console.log(mya1);
// console.log("B",myArray);

// const mya2=myArray.splice(1,3)       //give the value with change in original value
// console.log(mya2);




const marvelHeros=["thor","ironman","panther"]
const dcHeros=["flash","superman"]
// console.log(marvelHeros);

// marvelHeros.push(dcHeros)               // array shift array into array
// console.log(marvelHeros);
// console.log(marvelHeros.push(dcHeros));     // conuting the element present in the array

// console.log(marvelHeros[3][0]);

// concat or sepred method
// const allHeros=marvelHeros.concat(dcHeros)   // concat use for combine the array
// console.log(allHeros);

// const allNewHeros=[...marvelHeros,...dcHeros,]     // sepred 
// console.log(allNewHeros);

 const anotherArray=[1,2,3,[4,5,[6,7],8],9]
// const realAnotherArray=anotherArray.flat(1)  //flat solve all the mix array
// console.log(realAnotherArray);

// console.log(Array.isArray("jay"));
console.log(marvelHeros.includes("thor"));


// from -> give a combine word/element it will convert into part of array
// console.log(Array.from("jayvardhan"));


let score=100
let length=50
let contract=200
console.log(Array.of(score,length,contract));  //convert element into array
















