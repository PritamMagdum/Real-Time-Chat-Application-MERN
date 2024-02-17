const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "Pritam", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
