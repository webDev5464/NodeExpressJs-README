const dataModel = require("../Models/data.model")

const postData = async (req, res) => {
  const data = dataModel({
    fullName: req.body.fullName,
    contactNumber: req.body.contactNumber,
    email: req.body.email
  })

  const result = await data.save()

  if (result) {
    res.send({
      success: true, message: "Data Add successfully", data: result
    })
    console.log("Data Add successfully");
  } else {
    res.send({
      success: false, message: "Data not add! Soothing Wrong"
    })
    console.log("Data not add! Soothing Wrong");
  }
}

module.exports = postData