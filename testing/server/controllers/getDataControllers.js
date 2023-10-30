const data = require("../models/dataModules");


const getData = async (req, res) => {
  let result = await data.find({})
  console.log(result);

  res.send({ process: true, msg: result })
}

module.exports = getData