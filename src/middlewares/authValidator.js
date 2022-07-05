import authRepository from '../repositories/authRepository.js';

export async function validateSignUp(req, res, next) {
    const {email} = req.body;

    const existingUsers = await authRepository.searchUserByEmail(email);

    if (existingUsers.rowCount > 0) {
        throw {
            type: 'conflict'
        }
    }

    next();
}

export async function validateSignIn(req, res, next) {
    const {email} = req.body;

    const existingUsers = await authRepository.searchUserByEmail(email);

    if (existingUsers.rowCount === 0) {
        throw {
            type: 'not found'
        }
    }

    const [user] = existingUsers.rows;

    res.locals.user = user;

    next();
}