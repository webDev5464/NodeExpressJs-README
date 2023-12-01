const personModel = require("../models/personData.model")

const getAllPersonData = async (req, res) => {
  const getAllData = await personModel.find({})

  getAllData ? res.send({
    success: true, message: "getAll Data Successfully", getAllData
  }) : res.send({
    success: false, message: "Error"
  })
}

module.exports = getAllPersonData