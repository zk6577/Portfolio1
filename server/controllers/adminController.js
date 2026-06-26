import Admin from "../models/Admin.js";
import generateToken from "../middleware/generateToken.js";

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id)
    });
    return;
  }

  res.status(401);
  throw new Error("Invalid email or password");
};

export const getAdminProfile = async (req, res) => {
  res.json({
    _id: req.admin._id,
    name: req.admin.name,
    email: req.admin.email
  });
};
