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

// const user={         
//     dress:"tshirt",
//     price:199,
//     quant:2
// }
// console.log(user);

// function calculatePrice(now){
//     console.log(`the dress name is ${now.dress},price is ${now.price},piece of tshirt ${now.quant}`);
    
// }
// // calculatePrice(user)
// // calculatePrice({dress:"tshirt",price:250 ,quant:3})

// //  // how to pass array in object

// const myarray=[1000,200,3000,400]
// function arraypass(getarray) {
//     return getarray[2]
    
// }

// // console.log(arraypass(myarray));
// console.log(arraypass([1000,200,3000,400]));


//      #############      scope       #############

// // let a=5
// // const b=6
// // var c=7
// if (true) {                  // {} are the part of block scope and outer part is global scope
//     let a=5
//     const b=6
//     var c=7

//     console.log(a);
//     console.log(b);
//     console.log(c);
    
// }
// // console.log(a);
// // console.log(b);
// console.log(c);



// const core="sample"
// function one() {
//     username="jack"
//     function two() {               
//         const website="youtube"
//         console.log(username);
//         console.log(core);   
//     }
//     // console.log(username);        /* the child function can access the property of perent function but perent function cant access the property of child function */
//     // console.log(website); 
//        console.log(core);
       
//     two()
// }
// // console.log(username);
// // console.log(website); 
// console.log(core);

// one()


// if (true) {
//     username="jay."
//     if (username==="jay.") {
//         const website=" google"
//         //console.log(username+website);
        
//     }   
// }
// console.log(addone(5))       // we can access value upper the function
// function addone(value){
//     return value+1
// }
// // console.log(addone(5))

// // console.log(addtwo(2))      // in this type we cant access value upper the function/variable
// const addtwo=function (value) {
//     return value+2
// }
// // console.log(addtwo(2))

// //+++++++++++++++++++   this keyword         +++++++++++++++++++++++

// const getuser={
//       username:"jack",
//       price:999,
//       welcomeMassage:function(){
//         version:6.12
//         console.log(`${this.username}, welcome to website`);
        // console.log(this);

//         // console.log(this.price);
        
//       }
   
// }
// console.log(getuser)
// // getuser.username="sam"
// // getuser.welcomeMassage()
// // console.log(this)



// // function -> this doesnt work ok function
// function jay(){
//   let username="harry"
//    console.log(this)
//   email:"jay@123.com" 
//   return 
//                                            //  unable to understande this part
// }
// console.log(jay);

// const chai=function(){
//   username:"jay"
//   console.log(this);
//   return
// }
// console.log(chai);



// Arrow function

// const Addtwo=(num1,num2) => {
//   return num1+num2
// }
// console.log(Addtwo(5,6));

// const addTwo=(num1,num2)=>(num1+num2)
// console.log(addTwo(3,4));



//************************     IIFE              **************************************
//use for call the function immediately

 ( function tom() {
  username="jack"

   email="jack@12gmail.com"
   contact="by mail"
  console.log(username,email);
  
})();














