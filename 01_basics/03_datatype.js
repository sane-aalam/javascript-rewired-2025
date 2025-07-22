// treat all javascript code as newer version
"use strict";

// alert(3 + 3);

// 🚀 Steps to Become a Good JavaScript Developer

// Know Your "Why"
// Before jumping into JavaScript, ask yourself:
// Why do I want to learn this language?
//    - To build websites?
//    - To become a front-end or full-stack developer?
//    - For game dev, automation, or just curiosity?
// Your motivation will keep you consistent.

// Prioritize Code Readability
// Write code that is clean and understandable, even for your future self.
// Avoid overcomplicating with fancy one-liners.

console.log("let'start");
// datatypes all
// 1.Primitive datatypes
// 2.Non-Primitive datatypes

// Primitive examples(depth)
let userName = "@sane-aalam";
let age = 22;
// let totalCashMoneyBank = 123456789n;
let totalCashMoneyBank = 123456789;
let isBankOfficeOpenClose = true;
let securityPresent;
let formFillforPaymentProcssing = null;

// Symbol
// Unique and immutable identifier
let sym = Symbol("unique");

// print all datatypes in console
// skill improve
console.log(userName);
console.log(age);
console.log(totalCashMoneyBank);
console.log(isBankOfficeOpenClose);
console.log(securityPresent);
console.log(formFillforPaymentProcssing);
console.log(sym);

// Types checker all Primitive datatypes
console.log(typeof userName);
console.log(typeof age);
console.log(typeof totalCashMoneyBank);
console.log(isBankOfficeOpenClose);
console.log(securityPresent);
console.log(formFillforPaymentProcssing);

// object(why)
// in case of undefined - undefined
// in case of null - null
console.log(typeof undefined);
console.log(typeof null);

// suppose,user wants to get cash
// 1.type-conversion
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
