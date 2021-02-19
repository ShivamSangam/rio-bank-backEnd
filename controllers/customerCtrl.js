const Customer = require("../models/customerModel");

const userCtrl = {
  register: async (req, res) => {
    try {
      if (req.body.email) {
        const result = await Customer.create(req.body);
        res.status(200).json(result);
      } else {
        res.status(400).send("Invalid User");
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getCustomer: async (req, res) => {
    try {
      //console.log(req)
      const user = await Customer.findAll({
        where: {
          id: req.params.id
        }
      });
      if (!user) return res.status(400).json({ msg: "User does not exist." });
      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllCustomer: async (req, res) => {
    try {
      const customers = await Customer.findAll();
      if (!customers)
        return res.status(400).json({ msg: "User does not exist." });
      res.json(customers);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateBalance: async (req, res) => {
    try {
      const { from, to, amount } = req.body;
      const cust1_balance = getCurrentBalance(from) - amount;
      const cust2_balance = getCurrentBalance(from) + amount;
      const debiter = await Customer.update(
        { currentBalance: cust1_balance },
        {
          where: {
            id: from
          }
        }
      );
      const crediter = await Customer.update(
        { currentBalance: cust2_balance },
        {
          where: {
            id: to
          }
        }
      );
      res.status(200).json({ crediter, debiter });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

const getCurrentBalance = async (id) => {
  const result = await Customer.findAll({
    attributes: ["currentBalance"],
    where: {
      id: id
    }
  });
  return JSON.parse(JSON.stringify(result));
};

module.exports = userCtrl;
