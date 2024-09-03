// Function and parameter

// function jackname() {
//     console.log("j")
//     console.log("a");
//     console.log("c")
//     console.log("k");
    
// }
//console.log(jackname())


// function addTwonum(number1,number2){
//        //console.log(number1+number2)
//        let result=number1+number2
//        return result                      // return method
// }
// // addTwonum(4,true)               // we can also give the num,string,null,or boolean num

// const result = addTwonum(4,true)
// console.log(result)

// function addTwonum(num1,num2) {
//         return num1+num2    
// }
// const resul=addTwonum(5,6)
//console.log("result:",resul);

// function loginUserMassage(username) {
//     if (username===undefined) {                              // if condition are when exicuted then we dont givethe argument value 
         
//        console.log("enter your username")        
//     }
//     return `${username} you are loggedin`
// }
// // console.log(loginUserMassage("jay"));
// console.log(loginUserMassage());


//  //function and object

function calculateCartPrice(...num1) {   // the triple dot are sepred/convert the argument in array
    return num1
}
// console.log(calculateCartPrice(100));
//console.log(calculateCartPrice(200,200,300,400));

  //  // how to pass object in function

const user={         
    dress:"tshirt",
    price:199,
    quant:2
}
// console.log(user);

function calculatePrice(now){
    console.log(`the dress name is ${now.dress},price is ${now.price},piece of tshirt ${now.quant}`);
    
}
// calculatePrice(user)
// calculatePrice({dress:"tshirt",price:250 ,quant:3})

//  // how to pass array in object

const myarray=[1000,200,3000,400]
function arraypass(getarray) {
    return getarray[2]
    
}

// console.log(arraypass(myarray));
console.log(arraypass([1000,200,3000,400]));
