
const { matchedData } = require("express-validator");
const { userModel } = require("../models");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");

const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password)
    const body = { ...req, password }

    const dataUser = await userModel.create(body)

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser
    }
    res.send({ data });
  } catch (error) {
    res.send({ error, mgs: ' ERROR_REGISTER_USER ' })
  }
};






const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await userModel.findOne({ email: req.email })

    if (!user) {
      res.send({ mgs: 'El no existe' })
      return
    }

    const hashPassword = user.get('password');

    const check = await compare(req.password, hashPassword)

    if (!check) {
      res.status(402).send('Datos invalido');
      return
    }

    user.set('password', undefined, { strict: false })
    const data = {
      token: await tokenSign(user),
      user
    }

    res.send({ data })


  } catch (e) {
    console.log(e)
    res.send(res, "ERROR_LOGIN_USER")
  }
}

// docents
const loginTutor = async (req, res) => {
  try {

  } catch (error) {

  }
  res.send("loginTutor");
}
const RegisterTutor = async (req, res) => {
  res.send("RegisterTutor");
}

// admin

const loginAdmin = async (req, res) => {
  
res.send("loginAdmin");
}
const RegisterAdmin = async (req, res) => {
  res.send("RegisterAdmin");
}
module.exports = {
  registerCtrl,
  loginCtrl,
  loginTutor,
  RegisterAdmin,
  loginAdmin,
  RegisterTutor
};  