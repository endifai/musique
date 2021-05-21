import express from 'express'
import multer from 'multer'
import { getRepository } from 'typeorm'
import { User } from '../entity/User'

const userController = express.Router()
const upload = multer({dest: 'avatars/'})

userController.put('/', upload.single('avatar'), async (req, res) => {
    const userId = req.userId

    const userRepository = getRepository(User)

    const user = userRepository.findOne({id: userId})

    res.send({ user })
})

export { userController }