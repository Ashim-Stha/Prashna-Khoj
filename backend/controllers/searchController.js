const { queryData } = require("../config/connectDB");

const search = async (req, res) => {
  const { keyword } = req.body;
  try {
    const result = await queryData(keyword);
    const descriptions = result.map((row) => row.desc);
    res.status(200).json({ desc: descriptions });
  } catch (e) {
    console.error(e);
    res.status(401).send(e);
  }
};

module.exports = { search };
