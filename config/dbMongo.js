
const mongoose = require("mongoose");

const dbConnectNoSql = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/db_app_teacherApp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    })
    console.log('base de dato conectada');


  } catch (error) {
    console.log(error);
    throw new Error('algo salio mal,ponerse en contacto con soporte');
  }
}

module.exports = {
  dbConnectNoSql
}