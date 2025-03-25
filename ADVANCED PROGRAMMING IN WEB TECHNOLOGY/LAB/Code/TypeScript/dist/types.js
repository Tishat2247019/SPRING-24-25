"use strict";
let value = "string";
value = 220;
console.log(value);
//enum (define role)
var Role;
(function (Role) {
    Role[Role["Admin"] = 5] = "Admin";
    Role[Role["User"] = 10] = "User";
    Role[Role["Guest"] = 15] = "Guest";
})(Role || (Role = {}));
let user = Role.Guest;
console.log(user);
