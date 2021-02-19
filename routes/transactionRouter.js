const router = require("express").Router();
const transactionCtrl = require("../controllers/transactionCtrl");

router
  .route("/transactions")
  .get(transactionCtrl.getAllTransaction)
  .post(transactionCtrl.createTransaction);

router
  .route("/transactions/:id")
  .delete(transactionCtrl.deleteTransaction)
  .put(transactionCtrl.updateTransaction);

module.exports = router;
