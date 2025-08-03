const appName = "MyApp"; // 🌍 Global scope

function showAppName() {
  const appName = "MyAppnew";
  console.log("App name is:", appName);
}

showAppName();
console.log(appName); // accessible here too
