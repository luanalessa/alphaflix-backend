import startDatabase from "../config/database.js";
import { verify } from '../config/jwt.js'

export const insertCart =  async(req, res) => {
    let { title } = req.body
    
    const cookie = (req.cookies).token;
    await verify(cookie)
    .then(response => {
        const query = `INSERT INTO cart`
             + ` (user_id, movie_id, status, created_date)`
             + ` VALUES`
             + ` ((SELECT public.user.id from public.user`
             + ` WHERE public.user.email = '${response.username}'),`
             + `(SELECT movie.id from movie WHERE title = '${title}'), false, now())`
        startDatabase(query)
        .then(result => res.send(result))
    }) 

}

