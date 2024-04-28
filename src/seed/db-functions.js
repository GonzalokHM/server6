require('../config/db');
const { City, Monument } = require('../models/index');
const seed = require('./seedData');

const cleanCollections = async () => {
  await City.collection.drop();
  await Monument.collection.drop();

  console.log('>>> Colecciones limpias');
};

const saveDocuments = async () => {
  try {
    const cities = await City.insertMany(seed.cities);
    // Crear un map de ciudades para obtener fácilmente el ID de referencia
    const cityMap = cities.reduce((map, city) => {
      map[city.name] = city._id;
      return map;
    }, {});

    // Agregar la referencia de ciudad a cada monumento antes de insertar
    const monuments = await Monument.insertMany(
      seed.monuments.map((monument) => ({
        ...monument,
        city: cityMap[monument.city], // Asignar el ID de la ciudad basado en el nombre
      }))
    );

    // Actualizar las ciudades con los monumentos correspondientes
    await Promise.all(
      cities.map(async (city) => {
        const cityMonuments = monuments.filter(
          (monument) => monument.city.toString() === city._id.toString()
        );
        await City.updateOne(
          { _id: city._id },
          { $set: { monuments: cityMonuments.map((monument) => monument._id) } }
        );
      })
    );

    console.log('>>> Documentos guardados con éxito!');
    return { cities, monuments };
  } catch (error) {
    console.error('Error guardando documentos:', error);
  }
};

module.exports = {
  cleanCollections,
  saveDocuments,
};
