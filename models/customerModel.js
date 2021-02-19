const { DataTypes } = require("sequelize");
const bankApp = require("../config/bankApp");

const Customer = bankApp.define("customers", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  accountNumber: {
    type: DataTypes.BIGINT,
    field: "account_number",
    allowNull: false,
    unique: true,
    validate: {
      len: [11, 11]
    }
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name"
  },
  lastName: {
    type: DataTypes.STRING,
    field: "last_name"
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 3
    }
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["Male", "Female"],
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  address: {
    type: DataTypes.STRING
  },
  ifsc: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
      len: [11, 11]
    }
  },
  currentBalance: {
    type: DataTypes.INTEGER,
    field: "current_balance",
    allowNull: false,
    defaultValue: 0
  }
});
module.exports = Customer;
