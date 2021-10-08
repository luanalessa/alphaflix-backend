import { getMovies, getGenres } from '../controllers/movies.controller.js'
import express from 'express';

const router = express.Router();

router.get('/home', getMovies);
router.get('/home/genres', getGenres);


export default router;