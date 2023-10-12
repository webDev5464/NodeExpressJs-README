const createData = require("../controllers/createData");

const getData = async (req, res) => {
  let data = await createData.find({});
  console.log(data);
  res.send({ process: true, data });
};

module.exports = getData;
