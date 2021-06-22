import express, { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Track } from "../entity/Track";
import { User } from "../entity/User";

const searchController = express.Router();

searchController.get("/", async (req: Request, res: Response) => {
  const searchQuery = req.query.searchQuery;
  const userId = req['userId'];

  const tracksRepository = getRepository(Track);
  const userRepository = getRepository(User);

  const tracks = await tracksRepository
    .createQueryBuilder("track")
    .leftJoinAndSelect("track.user", "user")
    .where(`track.title ILIKE '%${searchQuery}%'`)
    .select([
      "track",
      "user.id",
      "user.email",
      "user.nickname",
      "user.avatarUri",
    ])
    .leftJoinAndMapOne(
      "track.isFavorite",
      "track.isFavorite",
      "favorite",
      "favorite.userId = :id",
      { id: userId }
    )
    .orderBy("track.created_at")
    .getMany();

  const formattedTracks = tracks.map((track) => ({
    ...track,
    isFavorite: !!track.isFavorite,
  }));

  const singers = await userRepository.find({
    where: `nickname ILIKE '%${searchQuery}%'`,
  });

  const formattedSingers = singers.map((singer) => ({
    id: singer.id,
    avatarUri: singer.avatarUri,
    nickname: singer.nickname,
  }));

  res.send({ tracks: formattedTracks, singers: formattedSingers });
});

export { searchController };
