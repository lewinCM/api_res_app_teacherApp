const { handleHttpError } = require("../utils/handleError");

const checkRol = (rol) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesByUser = user.rol; //TODO ["student"]
    console.log(user);
    //TODO: ["admin","tutor"]
    const checkValueRol = rol.some((rolSingle) =>
      rolesByUser.includes(rolSingle)
    ); //TODO: true, false
    if (!checkValueRol) {
      res.status(403).send('USER_NOT_PERMISSIONS');
      return;
    }

    next();
  } catch (e) {
    console.log(e);
    res.status(403).send('ERROR_PERMISSIONS');
  }
};

module.exports = checkRol;