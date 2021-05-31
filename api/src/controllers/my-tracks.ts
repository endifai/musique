import express, { Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import { getRepository } from 'typeorm'
import { Track } from '../entity/Track'
import { User } from '../entity/User'

const audioFilesDir = "audio"

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, path.join(audioFilesDir));
    },
    filename: function (_req, file, cb) {
      cb(null, new Date().getTime() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({
    storage,
  });

const myTracksController = express.Router()

myTracksController.post('/', upload.single('file'),async (req: Request, res: Response) => {
    const tracksRepository = getRepository(Track)
    const userRepository = getRepository(User)

    const track = new Track()

    track.title = req.body.title
    track.fileUrl = path.join(audioFilesDir, req.file.filename)
    track.duration = 600
    track.user = await userRepository.findOne(req.userId)

    const trackInfo = await tracksRepository.save(track)

    return res.send({track: trackInfo})
})

export { myTracksController }