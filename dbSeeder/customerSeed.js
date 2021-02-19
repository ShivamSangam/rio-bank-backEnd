const Customer = require("../models/customerModel.js");

const customerData = [
  {
    accountNumber: 12345678901,
    firstName: "Harsh",
    lastName: "Gupta",
    age: 21,
    gender: "Male",
    email: "harshind58@gmail.com",
    address: "M-BLOCK SU",
    ifsc: "RION0012747",
    currentBalance: 5000
  }
];

const customerSeed = async () => {
  //This line will erase pre-existing data
  await Customer.sync({ force: true });

  customerData.forEach(async (user) => {
    try {
      const result = await Customer.create(user);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

customerSeed();
