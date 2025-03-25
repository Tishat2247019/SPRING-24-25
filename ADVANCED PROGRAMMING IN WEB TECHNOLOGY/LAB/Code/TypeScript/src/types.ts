let value: any = "string";
value = 220;
console.log(value);

//enum (define role)

enum Role {
  Admin = 5,
  User = 10,
  Guest = 15,
}

let user: Role = Role.Guest;
console.log(user);
