// obj is two types
//1.obj literals , 2.obj constructor
// 1. obj literals

const mySym = Symbol("key1")
const jsuser={
    name:"jayvardhan",
    "fullname":"jayvardhansingh",
    age:"18",
    email:"jay@google.com",
    isLoggedIn:false,
    LastLogginDays:["monday","friday","sunday"],
    [mySym]:"key1"

}
console.log(jsuser);

console.log(jsuser.name);          // first method to access the obj
console.log(jsuser.fullname);

 //second method to access the obj
console.log(jsuser["fullname"]);
console.log(jsuser.email);
console.log(jsuser[mySym]);

jsuser.email="jay@gmail.com"          // for change the value
Object.freeze(jsuser)              // use for lock value
jsuser.email="jack@gmail.com"
console.log(jsuser);

  

  
  
  // making a function
  jsuser.greeting=function(){
      console.log("hello js user");  
    }
     console.log(jsuser.greeting);  //use this after release freez
     
  
  jsuser.greetingTwo=function(){
      console.log(`hello js user -${this.fullname}`);  
  }
  console.log(jsuser.greeting());
  console.log(jsuser.greetingTwo());
                                                                 
                                                                 

// singleton

const tinderuser=new Object()       // singleton objconst tinderUser={}                 // non-singleton
console.log(tinderUser);

const tinderUser={}     // non-singleton
tinderUser.id="123asd"
tinderUser.name="jack"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularuser={
    email:"jack@gmail.com",
    fullname:{
        username:{
              firstname:"jayvardhan",                      // node 04obj.js
              lastname:"singh"
        }
    }
 }
console.log(regularuser);
console.log(regularuser.fullname);
console.log(regularuser.fullname.username);
console.log(regularuser.fullname.username.firstname);

// method of combine the objects
const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
// const obj3={obj1,obj2}              // comment this line
const obj3=Object.assign({},obj1,obj2)  // assign method
console.log(obj3);

//spread method
const obj5={5:"a",6:"b"}
const obj4={...obj1,...obj2,...obj5}
console.log(obj4);



// when user take value from database then it will found in array
const user=[
    {
        id:1,
        email:"jack@linux.com"
    },
    {
        id:1,
        email:"jck@linux.com"
    },
    {
        id:1,
        email:"jak@linux.com"
    }
]
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('islogged'));


// De-structure==>sign=>({})

    const course={
        coursename:"js hindi",
        price:"free",
        courseInstructure:"hitesh"
    }
    console.log(course.courseInstructure);
    
    const{courseInstructure}=course
    console.log(courseInstructure);
    
    const{courseInstructure:Instructure}=course  // this is de-structure form
    console.log(Instructure)
    












