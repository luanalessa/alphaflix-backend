import startDatabase from "../config/database.js";
import { sign, verify } from '../config/jwt.js'

export const selectUser =  (req, res, table) => {
    const { username, password } = req.body
    const query = `Select * from public.user WHERE deleted_date IS NULL`
                + ` AND email = '${username}'`
    
    startDatabase(query)
        .then(result => {
                if (result[0].password === req.body.password) {
                    sign({ 'username': req.body.username })
                        .then(token => {
                            res.cookie('token',token)
                            res.send(token)})
                        .catch(err => res.sendStatus(err));
                }
                else res.sendStatus(401);
        })
}


export const selectMovies =  (req, res, table) => {
    const { title } = req.body
    const query = 'SELECT G.title as genre, M.title, runtime, description, director, poster  FROM movie as M'
            + ' LEFT JOIN genre as G'
            + ' ON M.genre_id = G.id'
     
    startDatabase(query)
        .then(result => res.send(result))

}

export const selectGenre = (req, res, table) => {
    const query = `Select * from genre WHERE deleted_date IS NULL`
    
    startDatabase(query)
        .then(result => res.send(result))

}

export const selectCart = async (req, res, table) => {
    const cookie = (req.cookies).token;
    await verify(cookie)
    .then(response => {
        const query  = "SELECT U.email, M.title as name, M.director, M.runtime, M.poster from public.user as U"
        + " INNER JOIN cart as C"
        + " ON C.user_id = U.id"
        + " INNER JOIN movie as M"
        + " ON C.movie_id = M.id"
        + ` WHERE email = '${response.username}' AND C.deleted_date is NULL AND C.status = false`  
        
        startDatabase(query)
        .then(result => res.send(result))
    }) 
}
