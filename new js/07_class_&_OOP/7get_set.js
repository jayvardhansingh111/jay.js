class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
}

const user1 = new user("jay12@gmail.com", "123acd");
// console.log(user1.password);
// console.log(user1.email);
// console.log(typeof user1.email);

// (((((((((((  define properties of get and set  )))))))))))

// old way to define the get and set

function User(username, email) {
  this.username = username;
  this.email = email;

  Object.defineProperty(this, email, {
    get function() {
      return this._email.toUpperCase;
    },
    set function(value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, username, {
    get function() {
      return this.username.toUpperCase;
    },
    set function(value) {
      this.username = value;
    },
  });
}
const Newuser = new User("jay", "jay@12.com");
// console.log(Newuser.email);
// console.log(Newuser.username);

// ((((((((((     object in get and set   ))))))))))

const jack = {
  _email: "jack12@gmail.com",
  _password: "jac123",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },

  get password() {
    return this._password.toUpperCase();
  },
  set password(value) {
    this._password = value;
  },
};
const jay = Object.create(jack);
console.log(jay.email);
console.log(jay._email);
s;

console.log(jay.password);
console.log(jay._password);
