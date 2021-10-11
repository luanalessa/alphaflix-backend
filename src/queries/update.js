import startDatabase from "../config/database.js";
import { verify } from '../config/jwt.js'

export const updateCart=  (req, res) => {
    const movies  = req.body
    console.log(movies)

    // const query = `UPDATE cart SET`
    // + ' status = true '
    // + ` WHERE cart.movie_id = (SELECT id FROM movie WHERE movie.title = '${title}') RETURNING *`
    
    // console.log(query)
    // startDatabase(query)
    //     .then(result => res.send(result))

    }

