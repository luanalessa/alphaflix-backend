import startDatabase from "./database.js";
import { sign } from '../config/jwt.js'
import bcrypt from 'bcrypt'


export const select = async (req, res, table) => {

    const { username, password } = req.body
    let query = `Select * from ${table} WHERE deleted_date IS NULL`

    if (table === 'public.user') {
        query += ` AND email = '${username}'`
    }
    else if (table === 'movie') {
        if(req.params.movie){
            const movie = (req.params.movie).replace(/\+/g, " ")
            query += ` AND title = '${movie}'`
        }
        else{
        query = 'SELECT G.title as genre, M.title, runtime, description, director, poster  FROM movie as M'
            + ' LEFT JOIN genre as G'
            + ' ON M.genre_id = G.id'}
    }

    console.log(query)
    startDatabase(query)
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