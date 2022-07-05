import connection from "../database.js";

async function searchUserByEmail(email) {
    return connection.query(`SELECT * FROM "users" WHERE "email"=$1`,
    [email])
}

async function signUpUser(name, email, password) {
    return connection.query(`INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, password])
}


const authRepository = {
    searchUserByEmail,
    signUpUser
}

export default authRepository;