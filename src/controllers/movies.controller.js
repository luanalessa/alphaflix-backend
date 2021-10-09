import { select } from '../config/query.js'

export const getMovies = (req, res) => {
    select(req, res, 'movie')
}

export const getMovie= (req, res) => {
    select(req, res, 'movie')
}

export const getGenres = (req, res) => {
    select(req, res, 'genre')
}
