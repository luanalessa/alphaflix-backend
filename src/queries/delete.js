import startDatabase from "../config/database.js";
import { verify } from '../config/jwt.js'

export const deleteCart=  (req, res) => {
    const { title }  = req.params
    console.log(title)

    const query = `UPDATE cart SET`
    + ' deleted_date = NOW()'
    + ` WHERE cart.movie_id = (SELECT id FROM movie WHERE movie.title = '${title}') RETURNING *`
    
    console.log(query)
    startDatabase(query)
        .then(result => res.send(result))

    }

