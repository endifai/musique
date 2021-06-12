import express, { Request, Response } from 'express'
import { createQueryBuilder, getRepository, Not } from 'typeorm'
import { User } from '../entity/User'

const singersController = express.Router()

singersController.get('/', async (req, res) => {
    const userRepository = getRepository(User)
    const userId = req.userId

    const singers = await userRepository.createQueryBuilder('user').where({id: Not(userId)}).select(['user.id', 'user.nickname', 'user.avatarUri']).getMany()

    res.send({ singers })
})

export { singersController }