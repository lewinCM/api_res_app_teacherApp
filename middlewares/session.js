const { verifyToken } = require("../utils/handleJwt")
const { userModel } = require("../models")
const getProperties = require("../utils/handlePropertiesEngine")
const propertiesKey = getProperties()

const authMiddleware = async (req, res, next) => {
  try {

    if (!req.headers.authorization) {
      res.status(401).send("NO_HAY _TOKEN_DE_SESSION")
      return
    }

    const token = req.headers.authorization.split(' ').pop();
    const dataToken = await verifyToken(token);

    if (!dataToken) {
      res.status(401).send("No hay ID en el Token")
      return

    }

    const query = {
      [propertiesKey.id]: dataToken[propertiesKey.id]
    }

    const user = await userModel.findOne(query)
    req.user = user


    next()


  } catch (e) {
    res.status(401).send("THE TOKEN IS INVALIDE")
    return

  }
};

module.exports = authMiddleware;