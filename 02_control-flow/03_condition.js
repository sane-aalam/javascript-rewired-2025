// valid user input data

let req = {
  firstName: "Hitesh",
  lastName: "choudary",
  emailId: "hiteshchoudarysir@gmail.com",
  password: "hitesh@1234",
};

const ValidatorSignData = (req) => {
  const { firstname, lastname, emailId, password } = req;

  if (!firstname || !lastname) {
    throw new Error("name is not valid!");
  } else if (!emailId) {
    throw new Error("emailId is not Valid");
  } else if (!password) {
    throw new Error("please enter the right password!");
  }
};

ValidatorSignData(req);


