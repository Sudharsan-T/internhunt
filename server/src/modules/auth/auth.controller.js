import User from "./user.model.js";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../../utils/hash.js";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ msg: "Email already exists" });

  const hashed = hashPassword(password);
  await User.create({ name, email, password: hashed });

  res.json({ msg: "Registered" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Invalid credentials" });

  const match = comparePassword(password, user.password);
  if (!match) return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, JWT_SECRET);

  res.json({ token });
};
