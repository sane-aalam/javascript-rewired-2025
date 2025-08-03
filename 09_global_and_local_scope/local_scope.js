function loginUser() {
  const username = "Sane"; // 📦 Local scope
  console.log("Logged in as", username);
}

loginUser();
// username is not define,because this have block scope
console.log(username);

// block scope
// { }
