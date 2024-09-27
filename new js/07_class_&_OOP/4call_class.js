// (((((((((((((   call method    )))))))))))))

function setusername(username) {
  this.username = username;
  //   console.log("hellow");
}
function creareusername(username, email, passsword) {
  setusername.call(this, username);
  this.email = email;
  this.passsword = passsword;
}
const chai = new creareusername("jay", "jay@!@.com", "123");
// console.log(chai);

//((((((((((((((((((    classes in js      ))))))))))))))))))

class user {
  constructor(username, email, passsword) {
    this.username = username;
    this.email = email;
    this.passsword = passsword;
  }

  encryptpassword() {
    return `${this.passsword}abc`;
  }
  encryptusername() {
    return `${this.username.toUpperCase()} happy`;
  }
  encryptemail() {
    return `${this.email}`;
  }
}
const jack = new user("jack", "jack12@.com", 123);

// console.log(jack);
// console.log(jack.encryptpassword());
// console.log(jack.encryptemail());
// console.log(jack.encryptusername());

//(((((((((((((((((   inheritance      )))))))))))))))))

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is ${this.username}`);
  }
}
class teacher extends User {
  constructor(username, mail, passsword) {
    super(mail); // super keyword call only one time
    super(passsword);
    this.mail = mail;
    this.passsword = passsword;
  }
  addCourse() {
    console.log(`new course ${this.username}`);
  }
}
const Jack = new teacher("jacky", "jacky12@gmail.com", 123);
const hom = new User("jabjdcub");
// console.log(Jack);
// Jack.addCourse();
// Jack.logMe();

// hom.logMe();
// // hom.addCourse();  // this is not possible

// console.log(Jack === hom);
// console.log(Jack === teacher);
// console.log(Jack instanceof teacher);
// console.log(Jack instanceof teacher instanceof User);
// console.log(Jack instanceof User);

//((((((((((((    static property     ))))))))))))

class Hello {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`usrname ${this.username}`);
  }
  createId() {
    return Math.floor(Math.random() * 100 + 1);
  }
}
const newId = new Hello("hiii");
newId.createId();
// console.log(newId.createId());
