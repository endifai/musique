import express, { Request, Response } from "express";
import { getRepository, Not } from "typeorm";
import { Favorite } from "../entity/Favorite";
import { Track } from "../entity/Track";
import { User } from "../entity/User";

const tracksController = express.Router();

tracksController.get("/", async (req: Request, res: Response) => {
  const tracksRepository = getRepository(Track);

  const userId = req.userId;

  const tracks = await tracksRepository
    .createQueryBuilder("track")
    .leftJoinAndSelect("track.user", "user")
    .select([
      "track",
      "user.id",
      "user.email",
      "user.nickname",
      "user.avatarUri",
    ])
    .where({
      user: {
        id: Not(userId),
      },
    })
    .leftJoinAndMapOne(
      "track.isFavorite",
      "track.isFavorite",
      "favorite",
      "favorite.userId = :id",
      { id: userId }
    )
    .orderBy('RANDOM()')
    .getMany();

  const formattedTracks = tracks.map((track) => ({
    ...track,
    isFavorite: !!track.isFavorite,
  }));

  return res.send({ tracks: formattedTracks });
});

tracksController.get("/recent", async (req: Request, res: Response) => {
  const tracksRepository = getRepository(Track);

  const userId = req.userId;

  const tracks = await tracksRepository
    .createQueryBuilder("track")
    .leftJoinAndSelect("track.user", "user")
    .select([
      "track",
      "user.id",
      "user.email",
      "user.nickname",
      "user.avatarUri",
    ])
    .where({
      user: {
        id: Not(userId),
      },
    })
    .leftJoinAndMapOne(
      "track.isFavorite",
      "track.isFavorite",
      "favorite",
      "favorite.userId = :id",
      { id: userId }
    )
    .orderBy('track.created_at')
    .getMany();

  const formattedTracks = tracks.map((track) => ({
    ...track,
    isFavorite: !!track.isFavorite,
  }));

  return res.send({ tracks: formattedTracks });
})

tracksController.get("/favorites", async (req: Request, res: Response) => {
  const trackRepository = getRepository(Track);

  const userId = req.userId;

  const tracks = await trackRepository
    .createQueryBuilder("track")
    .leftJoinAndSelect("track.user", "user")
    .select([
      "track",
      "user.id",
      "user.email",
      "user.nickname",
      "user.avatarUri",
    ])
    .where({
      user: {
        id: Not(userId),
      },
    })
    .leftJoinAndMapOne(
      "track.isFavorite",
      "track.isFavorite",
      "favorite",
      "favorite.userId = :id",
      { id: userId }
    )
    .orderBy('favorite.created_at', 'DESC')
    .getMany();

  const filteredTracks = tracks.filter(track => track.isFavorite)

  res.send({ favorites: filteredTracks })
});

tracksController.post("/favorite", async (req: Request, res: Response) => {
  const favoritesRepository = getRepository(Favorite);
  const userRepository = getRepository(User);
  const trackRepository = getRepository(Track);

  const { trackId } = req.body;
  const userId = req.userId;

  const favoriteEntity = await favoritesRepository.findOne(undefined, {
    where: {
      user: {
        id: userId,
      },
      track: {
        id: trackId,
      },
    },
  });

  if (favoriteEntity) {
    await favoritesRepository.remove(favoriteEntity);

    return res.send({ trackId, isFavorite: false });
  }

  const item = new Favorite();

  const track = await trackRepository.findOne(trackId);
  const user = await userRepository.findOne(userId);

  item.user = user;
  item.track = track;

  favoritesRepository.save(item);

  return res.send({ trackId, isFavorite: true });
});

export { tracksController };
