const express = require('express');
require('./config/db');
const mainRouter = require('./routes');

const app = express();
app.use(express.json());

app.use('/api', mainRouter);

//controlador rutas no encontradas
app.use('*', (req, res, next) => {
  res.status(404).json({ data: 'Not Found' });
});

//controlador errores generales de servidor
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`aplicacion corriendo en: http://localhost: ${PORT}`);
});
