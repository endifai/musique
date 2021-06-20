import "reflect-metadata"
import express, { Request, Response } from 'express'
import bodyParser from "body-parser"
import { createConnection } from "typeorm"
import path from 'path'
import cors from 'cors'

import { authController } from "./controllers/auth"
import { authentication } from "./middlewares/authentication"
import { userController } from "./controllers/user"
import { myTracksController } from "./controllers/my-tracks"
import { singersController } from "./controllers/singers"
import { tracksController } from "./controllers/tracks"
import { searchController } from "./controllers/search"

createConnection().then(async () => {
    const app = express()

    app.use(cors())

    app.use('/avatars', express.static(path.join(process.cwd(), 'avatars')))
    app.use('/audio', express.static(path.join(process.cwd(), 'audio')))

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    
    app.get('/', authentication, (_: Request, res: Response) => {
        res.send('hey')
    })

    app.use('/auth', authController)

    app.use(authentication)

    app.use('/my-tracks', myTracksController)
    app.use('/singers', singersController)
    app.use('/tracks', tracksController)
    app.use('/search', searchController)
    
    app.use('/user', userController)

    app.listen(5000, () => console.log('server is listening'))
}).catch((e) => {
    console.log(e)
})

