import "reflect-metadata"
import express, { Request, Response } from 'express'
import bodyParser from "body-parser"
import { createConnection } from "typeorm"
import path from 'path'

import { authController } from "./controllers/auth"
import { authentication } from "./middlewares/authentication"
import { userController } from "./controllers/user"

createConnection().then(async () => {
    const app = express()

    app.use('/avatars', express.static(path.join(process.cwd(), 'avatars')))

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    
    app.get('/', authentication, (_: Request, res: Response) => {
        res.send('hey')
    })

    app.use('/auth', authController)
    app.use('/user', authentication, userController)
    
    app.listen(3000, () => console.log('server is listening'))
}).catch((e) => {
    console.log(e)
})

