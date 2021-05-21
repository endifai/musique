import "reflect-metadata"
import express, { Request, Response } from 'express'
import bodyParser from "body-parser"
import { createConnection } from "typeorm"
import { authController } from "./controllers/auth"
import { authentication } from "./middlewares/authentication"

createConnection().then(async (connection) => {
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    
    app.get('/', authentication, (_: Request, res: Response) => {
        res.send('hey')
    })

    app.use('/auth', authController)
    
    app.listen(3000, () => console.log('server is listening'))
}).catch((e) => {
    console.log(e)
})

