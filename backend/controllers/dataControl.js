const dataCreated = require("../model/createData.js");

const dataControl = async (req, res) => {
  console.log(req.body);
  const data = dataCreated({
    title: req.body.title,
  });

  await data.save();
};

module.exports = dataControl;
