const router = require("express").Router();
const userCtrl = require("../controllers/customerCtrl");

router.post("/register", userCtrl.register);
router.get("/infor", userCtrl.getAllCustomer);

router.route("/:id").get(userCtrl.getCustomer).put(userCtrl.updateBalance);

module.exports = router;
