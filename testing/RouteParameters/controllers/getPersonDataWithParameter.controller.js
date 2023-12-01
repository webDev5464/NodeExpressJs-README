const personModel = require("../models/personData.model")

const getPersonDataWithParameter = async (req, res) => {
  const result = await personModel.find({ city: req.params.city })

  result ? res.send({
    success: true,
    message: "Parameter wise get data",
    data: result
  }) : res.send({
    success: false,
    message: "Error"
  })
}

module.exports = getPersonDataWithParameter