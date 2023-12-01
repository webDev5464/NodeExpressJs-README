const dataModel = require("../Models/data.model")

const getData = async (req, res) => {
  let data = await dataModel.find({})
  console.log(data);

  if (data) {
    res.send({ success: true, message: "Get all data", data })
  } else {
    res.send({ success: false, message: "Soothing Wrong" })
  }
}

module.exports = getData