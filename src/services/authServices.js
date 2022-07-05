import bcrypt from "bcrypt";
import connection from "../database.js";
import jwt from 'jsonwebtoken';
import authRepository from "../repositories/authRepository.js";
import '../setup.js';

function hashPassword(password) {
    return bcrypt.hashSync(password, 12);
}

async function signUpUser(name, email, password) {
    await authRepository.signUpUser(name, email, password);
}

async function signIn(user, password) {
    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw {
            type: 'unauthorized'
        }
    }

    const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET
      );

      return token;
}

const authServices = {
    hashPassword,
    signUpUser,
    signIn
}

export default authServices;