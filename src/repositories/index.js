const findAllDB = (model) => async () => {
  const items = await model.find({
    name: { $regex: new RegExp(query.name,'i') },
  });
  return items;
};

const findByIdDB = (model) => async (id) => {
  const item = await model.findById(id);
  return item;
};

const createInDB = (model) => async (payload) => {
  const newItem = new model(payload);
  await newItem.save();

  return newItem;
};

const updatedByIdInDB = (model) => async (id, payload) => {
  const item = await model.findByIdAndUpdate(id, payload, { new: true });
  return item;
};

const deleteFromDB = (model) => async (id) => {
  await model.deleteOne({ _id: id });
};
module.exports = {
  findAllDB,
  findByIdDB,
  createInDB,
  updatedByIdInDB,
  deleteFromDB,
};
