import authServices from "../services/authServices.js";

export async function signUp(req, res) {
    const {name, email, password} = req.body;

    const hashedPassword = authServices.hashPassword(password);

    await authServices.signUpUser(name, email, hashedPassword);

    res.sendStatus(201);
}

export async function signIn(req, res) {
    const { email, password } = req.body;
    const {user} = res.locals;

    const token = await authServices.signIn(user, password);

    res.status(200).send(token);
}

