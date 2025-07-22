const firstName = "Sane"; // block scope
const lastName = "Aalam"; //block scope
let age = 22; // block scope
var userEmail = "sane@example.com"; // goblal scope

function updateUserProfile() {
  // update lastName name
  // update age
  // update userEmail

  userEmail = "xyz@gmail.com";

  // TypeError: Assignment to constant variable.
  lastName = "mostly";
  age = age + 1;

  console.log({
    firstName: firstName,
    lastName: lastName,
    age: age,
    userEmail: userEmail,
  });
}

updateUserProfile();
