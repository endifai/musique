import express, { Request, Response } from "express";
import multer from "multer";
import { getRepository } from "typeorm";
import path from "path";

import { User } from "../entity/User";

const userController = express.Router();

const avatarsDir = "avatars";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(avatarsDir));
  },
  filename: function (_req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
});

userController.put("/", upload.single("avatar"), async (req, res) => {
  const userId = req.userId;

  const userRepository = getRepository(User);

  const { password: _, ...user } = await userRepository.findOne({ id: userId });
  user.avatarUri = path.join(avatarsDir, req.file.filename);

  userRepository.save(user);

  res.send({ user });
});

userController.get("/me", async (req: Request, res: Response) => {
  const userId = req.userId

  const userRepository = getRepository(User);

  const { password: _, ...user } = await userRepository.findOne({ id: userId });

  res.send({ user })
});

export { userController };
