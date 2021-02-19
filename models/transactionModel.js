const { DataTypes } = require("sequelize");
const bankApp = require("../config/bankApp");
const Customer = require("./customerModel.js");

const Transactions = bankApp.define("transactions", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  from: {
    type: DataTypes.INTEGER,
    field: "from",
    allowNull: false,
    references: {
      model: Customer,
      key: "id"
    }
  },
  to: {
    type: DataTypes.INTEGER,
    field: "to",
    allowNull: false,
    references: {
      model: Customer,
      key: "id"
    }
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  created_at: {
    type: "TIMESTAMP",
    defaultValue: bankApp.literal("CURRENT_TIMESTAMP"),
    allowNull: false
  },
  updated_at: {
    type: "TIMESTAMP",
    defaultValue: bankApp.literal("CURRENT_TIMESTAMP"),
    allowNull: false
  }
});

module.exports = Transactions;

// -----Quick Referrence ----//

/*
status-codes
0- pending
1- accepted
2- declined
3- Blocked

actionUser- The person who recently updates the 
status code
*/
