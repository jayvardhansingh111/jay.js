// there are some oveview of loops

// $$$$$$$$$  for loop  --> repeats the condition until it false  ((((((((((()))))))))))

// for (let i = 0; i < 10; i++) {
//     const element =i;
//     console.log(i);
    
// }

// //    for printing a table

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(2*element);
    
// }

// if statement in loop

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if (i==6) {
//         console.log("6 is breaking point");
    
//     }
//     console.log(element);
    
// }


// //  Inner loop

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     console.log(`its outer element  ${element}`);
//     for (let j = 0; j <=5; j++) {
//         const element = j;
//         console.log(j,"its ineer");    
        
//     }
    
// }



//   **********  table

// for (let i = 0; i <= 5; i++) {
//     const element = i;
//     console.log(`The table number is ${element}`);
//     for (let k = 0; k <=10; k++) {
//         const element = k;
//         // console.log(i*k);
//         console.log(i,'*',k,"=",i*k);
        
//     }
// }



// *****************         Array by the loop

// let con=["jack","jay","jammy","jenifer"]
// for (let i = 0; i < con.length; i++) {
//     const element = con[i];
//     console.log(element);
    
// }


// break and continiue ststement

// for (let i = 1; i <=5; i++) {
//     const element = i;
//     console.log(i);
//     // break                                     we use break at if statement
//     if (i==4) {
//         console.log("break at :",4);
//         // break
//         continue;
//     }
    
// }






// while loop((((((((((((((((()))))))))))))))))

/* */
// let i=0
// while (i<=10) {
//     console.log("value of i is",i);
//     i=i+2
    
// }

// const myarr=["jack","jay","jackey"]
// let arr=2
// while (arr<=myarr.length) {
//     // console.log(arr);
//     console.log(`value of array is : ${myarr[arr]}`);
//     break
    
// }

// // ((((()))))   do-while loop   (((((())))))
// let score=1
// do {
//     console.log(`the score is ; ${score}`);
//     score++
// } while (score<10);


// ((((((((((((((((     for of loop         ))))))))))))))))

/* for of loop is array specific loop */
// const Arr=[1,2,3,4,5]
// for (const itm of Arr) {
//     // console.log(`value of array is ${Arr}`);  
//     console.log(`new value of array ${Arr[3]}`);
    
// }

// // for of loop in string
// const name="jay"
// for (const nam of name) {
//     console.log(`each latter of word :${name}`);
    
// }


// for of loop in map   // map for second time study
// const map = new map()
// map.set('IN',"India")
// map.set('USA',"United State America")
// map.set('jp',"japan")
// map.set('rs',"russia")

// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

// for (const keyvalue of map)  {
//     console.log(key,value)
// }

// for of loop doesnt work on object

// // ((((((((((((((((    for in loop                ))))))))))))))))
// const myobject={
//     js:"javascript",
//     py:"python",
//     cpp:"c++",
//     rb:"ruby"
// }
// for (const key in myobject) {
//     console.log(key,myobject);
//     console.log(`${key} shortcut name of lang ${myobject[key]}`);
     

// }

// //  for in loop in arrays
// const progralang=["js","py","cpp","rb"]
// for (const key in progralang) {
//    console.log(key);
// //    console.log(progralang[key]);
   
// }

// (((((((((((((((   forEach loop              )))))))))))))))
// it is moistly use in array

// const coding=["c","js","py","cpp","rb"]
// // in simple fun
// coding.forEach(function (val) {
//     console.log(val);
    
// })

// /***************** Arrow function ****************** */
// coding.forEach ((item) => {
//     console.log(item);
    
// })


// function jack(item) {
//     console.log(item);
    
// }
// coding.forEach(jack)


// coding.forEach((item,index,arr) =>{
//     console.log(item,index,arr);
    
// })

// store obj inside the array
// const mycoding = [
//     {
//         filename:"js",
//         language:"javascript"
//     },
//     {
//         filename:"py",
//         language:"python"
//     },
//     {
//         filename:"rb",
//         language:"ruby"
//     }
// ]

// mycoding.forEach((item) =>{
//     console.log(item);
    
// })


// const Coding=["c","js","py","cpp","rb"]
// Coding.forEach((item) =>{
//     console.log(item);
    
// })
// console.log(Coding);


// ((((((((((((((  filter method ))))))))))))))
// const mynum=[1,2,3,4,5,6,7,8,9,10]
// const newnum = mynum.filter((num) =>num>4)

// // const newnums=mynum.filter((num)=>{
// //     return num>4                         // in object we have to return the value
// // })

// console.log(newnum);




























































































































