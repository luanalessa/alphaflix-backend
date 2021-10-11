import { selectMovies, selectGenre } from '../queries/select.js'
import {select} from '../config/query.js'

export const getMovies = (req, res) => {
    selectMovies(req, res, 'movie')
}

// export const getMovie= (req, res) => {
//     select(req, res, 'movie')
// }

export const getGenres = (req, res) => {
    selectGenre(req, res, 'genre')
}
