import jwt from "jsonwebtoken";

export default function generateToken(data: {
  username: string;
  email: string;
}) {
  return jwt.sign(data, process.env.JWT_SECRET as string, { expiresIn: "1h" });
}
