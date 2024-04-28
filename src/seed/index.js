require('../config/db')
const { cleanCollections, saveDocuments } = require("./db-functions");


const main = async () => {
  await cleanCollections();
  const { cities, monuments} = await saveDocuments();
};

main()
  .then(() => {
    console.log('Script Terminado');
    process.exit();
  })
  .catch((err) => {
    console.log('Error Lanzando Script', err);
    process.exit(1);
  });
