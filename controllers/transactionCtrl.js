const Transactions = require("../models/transactionModel");

const transactionCtrl = {
  getAllTransaction: async (req, res) => {
    try {
      const transactions = await Transactions.findAll();
      if (!transactions)
        return res.status(400).json({ msg: "Transacction does not exist." });
      return res.status(400).json(transactions);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createTransaction: async (req, res) => {
    try {
      const newTransaction = await Transactions.create(req.body);
      //const result = await res.redirect("/customer/updatebalance", {
      //...req.body
      //});
      return res.status(200).json(newTransaction);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteTransaction: async (req, res) => {
    try {
      //console.log(req.params);
      const response = await Transactions.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!response)
        return res.status(400).json({ msg: "Transaction does not exist." });
      return res.status(400).json(response);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateTransaction: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

module.exports = transactionCtrl;
