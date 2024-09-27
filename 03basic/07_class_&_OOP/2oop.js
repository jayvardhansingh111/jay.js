// object literal => use of this key word for corrent context

// const user = {
//   Name: "jay",
//   Mail: "jay@gmail .com",
//   isSignin: true,

//   getuserDetails: function () {
// console.log("get user detail");
// console.log(`username: ${this.Name}`);
// console.log(this);
//   },
// };
// console.log(user.Name);
// console.log(user.getuserDetails());

// (((((((((((((((  Constructor function / new key word   )))))))))))))))
// - used to create a object from a constructor function

function user(username, loginCount, isloggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isloggedIn = isloggedIn;

  this.greeting = function () {
    console.log(`welcome : ${this.user}`);
  };
  return this;
}
const userone = new user("jack", 4, true);
const userTwo = new user("jmky", 3, false);
console.log(userone);
console.log(userTwo);
