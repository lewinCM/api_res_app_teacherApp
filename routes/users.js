
const express = require("express");
const router = express.Router();
const { AllUsers, ByIdUser, DeleteUser, UpdateUser } = require('../controllers/users');
const authMiddleware = require("../middlewares/session");
const checkRol = require("../middlewares/rol");

router.get('/', authMiddleware, AllUsers);
router.get('/:id', authMiddleware, ByIdUser);
router.put('/:id', authMiddleware,checkRol(['admin']), UpdateUser);
router.delete('/:id', authMiddleware, checkRol(['admin']), DeleteUser);

module.exports = router;
