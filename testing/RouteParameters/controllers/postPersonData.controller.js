const personModel = require("../models/personData.model")

const personController = async (req, res) => {
  const data = personModel({
    fullname: req.body.fullname,
    email: req.body.email,
    address: {
      street: req.body.street,
      city: req.body.city,
      zip: req.body.zip
    }
  })

  const result = await data.save()

  result ? res.send({
    success: true, message: "Data Save", data: result
  }) : res.send({
    success: false, message: "Error"
  })
}

module.exports = personController

/*
{
    "fullname": "John Doe",
    "email": "john@example.com",
    "address": {
        "street": "Dariyapur",
        "city": "Ahmedabad",
        "zip": 380001
    }
}
 */