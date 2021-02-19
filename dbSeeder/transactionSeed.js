const Transactions = require("../models/transactionModel.js");

const transactionData = [
  {
    from: 1,
    to: 2,
    amount: 500
  }
];

const transactionSeed = async () => {
  //This line will erase pre-existing data
  await Transactions.sync({ force: true });

  transactionData.forEach(async (transaction) => {
    try {
      const result = await Transactions.create(transaction);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

transactionSeed();
