import express, { Request, Response } from "express";
import { getRepository, Not } from "typeorm";
import { User } from "../entity/User";

const singersController = express.Router();

singersController.get("/", async (req, res) => {
  const userRepository = getRepository(User);
  const userId = req.userId;

  const singers = await userRepository
    .createQueryBuilder("user")
    .where({ id: Not(userId) })
    .select(["user.id", "user.nickname", "user.avatarUri"])
    .getMany();

  res.send({ singers });
});

singersController.get("/:id", async (req: Request, res: Response) => {
  const userId = req.userId;
  const id = req.params.id;
  const userRepository = getRepository(User);

  const user = await userRepository
    .createQueryBuilder("user")
    .where({ id })
    .select(["user.id", "user.nickname", "user.avatarUri"])
    .leftJoinAndSelect("user.tracks", "track")
    .leftJoinAndMapOne(
      "track.isFavorite",
      "track.isFavorite",
      "favorite",
      "favorite.userId = :id",
      { id: userId }
    )
    .orderBy("track.created_at")
    .getOne();

  user.tracks = user.tracks.map((track) => ({
    ...track,
    isFavorite: !!track.isFavorite,
    user: {
        id: user.id,
        avatarUri: user.avatarUri,
        nickname: user.nickname
    }
  }));

  res.send({ user });
});

export { singersController };
