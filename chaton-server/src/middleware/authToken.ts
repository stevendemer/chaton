import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../models/User";

interface IGetUserInfo extends Request {
  user: IUser;
}

export default function authenticateToken(
  req: IGetUserInfo,
  res: Response,
  next: any
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(
    token as string,
    process.env.JWT_SECRET as string,
    (err: any, user: any) => {
      console.log(err);
      if (err) return res.sendStatus(403);

      req.user = user;
    }
  );

  next();
}
