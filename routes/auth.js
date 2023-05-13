const express = require("express");
const { loginCtrl, registerCtrl, RegisterAdmin, RegisterTutor, loginAdmin, loginTutor } = require("../controllers/auth");
const { validatorRegister, validatorLogin } = require("../validators/auth");
const router = express.Router();

// users
router.post("/register", validatorRegister, registerCtrl);
router.post("/login", validatorLogin, loginCtrl);



// tutores
router.post("/registerTutor", RegisterTutor);
router.post("/loginTutor", loginTutor);


// admin
router.post("/registerAdmin", RegisterAdmin);
router.post("/loginAdmin", loginAdmin);

module.exports = router;