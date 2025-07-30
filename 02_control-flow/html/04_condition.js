const allowedEditFields = [
  "firstName",
  "lastName",
  "emailId",
  "photoUrl",
  "gender",
  "age",
  "about",
  "skills",
];

const user = allowedEditFields.includes("firstName", "lastName");
console.log(user);
