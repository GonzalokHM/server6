const mongoose = require('mongoose');


mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

// mongoose.connect('mongodb://127.0.0.1:27017/museum');
mongoose
  .connect('mongodb://localhost:27017/museum')
  .then(() => {
    console.log('conectando a la base de datos museum');
  })
  .catch((err) => {
    console.log('error al conectar a la DB', err);
    //cerramos el servidor si no conecta con una DB
    process.exit(1)
  });