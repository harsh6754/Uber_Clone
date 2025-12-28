const userModel = require("../models/user.model");
const captainModel = require("../models/captain.model");
const blacklistTokenModel = require("../models/blacklistToken.model");
const jwt = require("jsonwebtoken");

async function isTokenBlacklisted(token) {
  if (!token) return false;
  const found = await blacklistTokenModel.findOne({ token });
  return !!found;
}

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied. User is not authorized.' });

  if (await isTokenBlacklisted(token)) return res.status(401).json({ error: 'User Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await userModel.findById(decoded._id);
    if (!user) return res.status(401).json({ error: 'User Unauthorized' });
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'User Unauthorized' });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied. Captain is not authorized.' });

  if (await isTokenBlacklisted(token)) return res.status(401).json({ error: 'Captain Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const captain = await captainModel.findById(decoded._id);
    if (!captain) return res.status(401).json({ error: 'Captain Unauthorized' });
    req.captain = captain;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Captain Unauthorized' });
  }
};
