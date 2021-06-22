import express, { Request, Response } from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs/promises'
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

    const { title, duration } = req.body

    track.title = title
    track.fileUrl = path.join(audioFilesDir, req.file.filename)
    track.duration = duration
    track.user = await userRepository.findOne(req['userId'])

    const trackInfo = await tracksRepository.save(track)

    return res.send({track: trackInfo})
})

myTracksController.delete('/:id', async (req: Request, res: Response) => {
  const trackId = req.params.id

  const tracksRepository = getRepository(Track)

  try {
    const track = await tracksRepository.createQueryBuilder('track').where({id: trackId}).leftJoinAndSelect('track.user', 'user').getOne()

    if (track.user.id !== req['userId']) {
      return res.status(400).send({ message: 'Unauthorized' })
    }
  
    await fs.unlink(path.join(process.cwd(), track.fileUrl))
  
    await tracksRepository.remove(track)
  
    return res.send({ trackId })
  } catch {
    return res.status(400).send({ status: 'error' })
  }
})

export { myTracksController }