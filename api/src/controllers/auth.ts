import express from "express";
import { getRepository } from "typeorm";
import { body } from "express-validator";
import bcrypt from 'bcrypt'

import { User } from "../entity/User";
import { generateJWTToken } from "../utils/jwt";
import { validate } from "../middlewares/validate";

const authController = express.Router();

authController.post(
  "/sign-in",
  validate([
    body("email").isEmail().normalizeEmail(),
    body("password").isString().isLength({ min: 8 }),
  ]),
  async (req, res) => {

    try {
        const { email, password } = req.body;

        const userRepository = getRepository(User);
        const user = await userRepository.findOne({email})
  
        if (!user) {
          return res.status(400).send({ message: 'Invalid credentials' })
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if (!isValidPassword) return res.status(400).send({ message: 'Invalid credentials' })
  
        const jwt = generateJWTToken(user.id);
  
        return res.send({ jwt });
    } catch (e) {
        return res.status(400).send({ message: e.message });
    }
  }
);

authController.post(
  "/sign-up",
  validate([
    body("email").isEmail().normalizeEmail(),
    body("password").isString().isLength({ min: 8 }),
    body("nickname").isString().exists(),
  ]),
  async (req, res) => {
    try {
      const { email, nickname, password } = req.body;

      const userRepository = getRepository(User);
      const alreadyExist = await userRepository.findOne({
        where: [{ email }, { nickname }],
      });

      if (alreadyExist) {
        return res.status(400).send({ message: 'User already exists' })
      }

      const user = new User();

      const salt = await bcrypt.genSalt()

      user.email = email;
      user.nickname = nickname;
      user.password = await bcrypt.hash(password, salt);

      const createdUser = await userRepository.save(user);

      const jwt = generateJWTToken(createdUser.id);

      return res.send({ jwt });
    } catch (e) {
      return res.status(400).send({ message: e.message });
    }
  }
);

export { authController };
