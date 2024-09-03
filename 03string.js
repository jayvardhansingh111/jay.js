const name="jay"
const repocount=3

//console.log(name+repocount) // use this method less 

//console.log(`Hi my name is ${"jay"} and my repocount is ${3}`);             // node 03string.js

//const gameName=new String('candy')
// console.log(gameName[0]);                    // this is array how to know
// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());         // convert all spelling in captical alfanete
// console.log(gameName.toLowerCase());          // convert all spelling to small case
// console.log(typeof gameName.toString());
// console.log(typeof gameName);
// console.log(gameName.charAt(2));                   // for knowing the char at which position
// console.log(gameName.indexOf('d'));           // for knowing the num of position char is place

//const newString=gameName.substring(0,4)        // use for want to number of string
//console.log(newString)

// const anotherString=gameName.slice(-8,3)        // use for count number where it wii start
// console.log(anotherString);

// const newStringOne="    jay"
// console.log(newStringOne);
//console.log(newStringOne.trim());              // use for not count the space


// const url="https://jay@.com/jay%2vardhan"
// // console.log(url.replace('%2','_'));

// console.log(url.includes('jack'));   // use for asking that word presente in the string or not
// console.log(url.includes('jay'));

// const playerName=new String('jay-vardhan-singh-1')
// console.log(playerName.split('-'));                      // split use for string change into array


// const score=200
// console.log(score)

// const balance=new Number(300)
// console.log(balance)

// // for change num in string
// console.log(balance.toString());
// console.log(typeof balance);

// // toFix - tofix use for knowing the exject counting after the point
// console.log(balance.toFixed(2));

// const otherNumber=123.4   // also change this value
// console.log(otherNumber.toPrecision(3));   // for check 4,2


// // for counting the number
// const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));

// // ((((((((((   Math  ))))))))))

// console.log(Math);
// console.log(Math.abs(-8));   // for convert the neg value in positive value

// console.log(Math.round(4.2));    // the exject value without the point
// console.log(Math.ceil(4.2));     // if the point valu is something upper from the value then output is upper value
// console.log(Math.floor(4.9));     // for minimum value
// console.log(Math.min(3,6,8,9));
// console.log(Math.max(4,6,8,0));
// console.log(Math.sqrt(4));

// // use much in this field
// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

// const min=10
// const max=20
// Math.random()*(max-min+1)
// console.log(Math.random()*(max-min+1));
// console.log(Math.floor(Math.random()*(max-min+1))+min);


// (((((((((((((((((((((((        Date        )))))))))))))))))))))))

let myDate=new Date()
// console.log(myDate);

// console.log(myDate.toString());              // for GTM date
// console.log(myDate.toDateString());          // for month wise date
// console.log(myDate.toLocaleString());        // for exject date
// console.log(typeof myDate);

let myCreatedDate=new Date(2024,8,2,5,4)
let mycreatedDate=new Date("01-1-24")
console.log(myCreatedDate.toDateString());
console.log(mycreatedDate.toLocaleDateString());

let myTime= Date.now()
console.log(myTime);
console.log(myCreatedDate.getTime());

console.log(Math.round(Date.now()/1000));       // avoid it

let newDate=new Date()
console.log(newDate);

console.log(newDate.getMonth()+1);
console.log(newDate.getDay());









