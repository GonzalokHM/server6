require('../config/db')
const { cleanCollections, saveDocuments } = require("./db-functions");


const main = async () => {
  try {
    await cleanCollections();
    await saveDocuments();
    console.log('Script Terminado');
  } catch (err) {
    console.error('Error lanzando script:', err);
    process.exit(1);
  }
};

main().then(() => process.exit());
