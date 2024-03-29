import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import index from './routes/index.js'
import login from './routes/login.route.js';
import movies from './routes/movies.route.js';
import cart from './routes/cart.route.js';



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

app.use(cors(corsOptions))
app.use(cookieParser());

app.use(index)
app.use(login)
app.use(movies)
app.use(cart)



export default app;