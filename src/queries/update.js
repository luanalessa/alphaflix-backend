import startDatabase from "../config/database.js";
import { verify } from '../config/jwt.js'

export const updateCart=  (req, res) => {
    const movies  = req.body
    console.log(movies)

    try{ 
        movies.map( m => {
        const query = `UPDATE cart SET`
            + ' status = true '
            + ` WHERE cart.movie_id = (SELECT id FROM movie WHERE movie.title = '${m.name}')`
            + ` AND cart.user_id = (SELECT id FROM public.user WHERE public.user.email = '${m.email}')`
            
            console.log(query)
            startDatabase(query)
        })
        res.send(200)
    }catch(err){
        res.send(500)
    }
}

