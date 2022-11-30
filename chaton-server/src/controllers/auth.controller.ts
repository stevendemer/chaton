import { Request, Response } from "express";
import User from "../models/User";
import { IUser } from "../models/User";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";

export const signOut = async (req: Request, res: Response) => {
  return res.send({
    message: "Sign out function",
  });
};

export const signUp = async (req: Request, res: Response) => {
  const { password, email, confirmPassword, username } = req.body;
  const newUser = new User({
    email,
    username,
    password,
  });

  if (newUser) {
    newUser.save((err, user) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      } else {
        return res
          .status(201)
          .send({ message: "User registered successfully" });
      }
    });
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // compare passwords
    const passwordIsValid = argon2.verify(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Token" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    return res.status(200).send({
      user: { id: user._id, email: user.email, username: user.username },
      message: "Login successful",
      accessToken: token,
    });
  });
};
