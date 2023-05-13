const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties = require("../utils/handlePropertiesEngine")
const propertiesKey = getProperties()

const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      // _id: user._id,
      [propertiesKey.id]: user[propertiesKey.id],
      rol: user.rol,
    },
    JWT_SECRET,
    {
      expiresIn: "12h",
    }
  );

  return sign
};


const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET)
  } catch (e) {
    return null
  }
};

module.exports = { tokenSign, verifyToken };