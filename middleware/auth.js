const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = {
  isAuthenticated: async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (!token) {
      return res.status(500).json({ message: "Unauthorized" });
    }
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
    } catch (error) {
      return res.status(500).json({ message: "Unauthorized" });
    }
    next();
  }
};
module.exports = auth;
