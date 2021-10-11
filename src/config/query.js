import startDatabase from "./database.js";
import { sign, verify } from '../config/jwt.js'
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
    else if (table === 'cart') {
        const cookie = (req.cookies).token;
        await verify(cookie)
        .then(response => {
            query  = "SELECT U.email, M.title as name from public.user as U"
            + " INNER JOIN cart as C"
            + " ON C.user_id = U.id"
            + " INNER JOIN movie as M"
            + " ON C.movie_id = M.id"
            + ` WHERE email = '${response.username}'`    
        })
        



        
    }

    startDatabase(query)
        .then(result => {
            if (table === 'public.user') {
                if (result[0].password === req.body.password) {
                    sign({ 'username': req.body.username })
                        .then(token => {
                            res.cookie('token',token)
                            res.send(token)})
                        .catch(err => res.sendStatus(err));
                }
                else res.sendStatus(401);
            }
            else res.send(result)
        })

}

export const insert = async (req, res, table) => {
    const keys = Object.keys(req.body)
    const values = (Object.values(req.body)).map(v => v = `'${v}'`)

    let query = `INSERT INTO ${table}`
             + ` (${keys}, created_date)`
             + ` VALUES`
             + ` (${values}, now())`

    // if (table === 'public.user') {
    //     query += ` AND email = '${username}'`
    // }
    // else if (table === 'movie') {
    //     if(req.params.movie){
    //         const movie = (req.params.movie).replace(/\+/g, " ")
    //         query += ` AND title = '${movie}'`
    //     }
    //     else{
    //     query = 'SELECT G.title as genre, M.title, runtime, description, director, poster  FROM movie as M'
    //         + ' LEFT JOIN genre as G'
    //         + ' ON M.genre_id = G.id'}
    // }
    // else if (table === 'cart') {
    //     query += ` AND user_id = ( SELECT email from public.user)`
    //             + ` WHERE email = ${usermail}`
                
    //     console.log(req.cookies)
        
    // }

    // console.log(query)
    // startDatabase(query)
    //     .then(result => {
    //         if (table === 'public.user') {
    //             if (result[0].password === req.body.password) {
    //                 sign({ 'username': req.body.username })
    //                     .then(token => {
    //                         console.log(token)
    //                         res.cookie('token',token)
    //                         res.send(token)})
    //                     .catch(err => res.sendStatus(err));
    //             }
    //             else res.sendStatus(401);
    //         }
    //         else res.send(result)
    //     })

}