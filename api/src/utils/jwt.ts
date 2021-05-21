import jwt from 'jsonwebtoken'

export const generateJWTToken = (userId: string) =>  jwt.sign(userId, process.env.SECRET)
