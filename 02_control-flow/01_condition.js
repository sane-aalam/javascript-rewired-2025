// treat all javascript code as newer version

// Primitive examples(depth)
let userName = "@sane-aalam";
let age = 22;
// let totalCashMoneyBank = 123456789n;
let totalCashMoneyBank = 123456789;
let isBankOfficeOpenClose = true;
let securityPresent;
let formFillforPaymentProcssing = null;

// Bank is open
// Then only you can get the received money
if (isBankOfficeOpenClose) {
  console.log("current_balance_user", totalCashMoneyBank);
  const userInputAmonunt = Number(prompt("Enter the amount"));
  if (userInputAmonunt < totalCashMoneyBank) {
    totalCashMoneyBank = totalCashMoneyBank - userInputAmonunt;
  }

  // convert into boolean
  isBankOfficeOpenClose = true;

  // print as json data as output
  console.log({
    massage: "user received money successfully!",
    userName: userName,
    received: userInputAmonunt,
    currentAmount: totalCashMoneyBank,
    formfilldone: isBankOfficeOpenClose,
  });
}
