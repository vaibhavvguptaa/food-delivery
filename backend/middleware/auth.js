import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
export default authMiddleware;