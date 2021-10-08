import startDatabase from "./database.js";
import { sign } from '../config/jwt.js'
import bcrypt from 'bcrypt'


export const select = async (req, res, table) => {

    let value = []
    let query = `Select * from ${table} WHERE deleted_date IS NULL`

    if (table === 'public.user') {
        value = [req.body.username]
        query += ` AND email = $1`
    }

    else if (table === 'movie') {
        query = 'SELECT G.title as genre, M.title, runtime, description, director, poster  FROM movie as M'
            + ' LEFT JOIN genre as G'
            + ' ON M.genre_id = G.id'
    }

    console.log(query)
    startDatabase(query, value)
        .then(result => {
            if (table === 'public.user') {
                if (result[0].password === req.body.password) {
                    sign({ 'username': req.body.username })
                        .then(token => res.send(token))
                        .catch(err => res.sendStatus(err));
                }
                else res.sendStatus(401);
            }
            else res.send(result)
        })

}