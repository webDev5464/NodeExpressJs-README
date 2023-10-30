const data = require("../models/dataModules")

const clientData = async (req, res) => {
  console.log(req.body);
  const postingData = data({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    pass: req.body.pass
  })

  await postingData.save()
}

module.exports = clientData