const createData = require("../controllers/createData.js");

const postData = async (req, res) => {
  console.log(req.body);
  const data = createData({
    title: req.body.title,
  });

  await data.save();
};

module.exports = postData;
