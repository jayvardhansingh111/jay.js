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

for (let i = 1; i <=5; i++) {
    const element = i;
    console.log(i);
    // break                                     we use break at if statement
    if (i==4) {
        console.log("break at :",4);
        // break
        continue;
    }
    
}