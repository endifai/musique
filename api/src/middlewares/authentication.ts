import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET, (error: any, userId: any) => {
    if (error) {
      return res.sendStatus(403);
    }

    req['userId'] = userId;

    next();
  });
};
