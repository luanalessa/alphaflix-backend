import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();


const { Pool } = pkg;

const pool = new Pool({
    user : process.env.USER_POSTGRES,
    password : process.env.PASSWORD_POSTGRES,
    host : process.env.HOST_POSTGRES,
    port : process.env.PORT_POSTGRES,
    database : process.env.DB_POSTGRES,
})

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

pool.on('connect', () => {
    console.log('Successfully connected!');
});

const startDatabase = (query) => {
    return new Promise((resolve, reject) => {
      pool.connect()
        .then(client => client.query(query)
          .then(result => resolve(result.rows))
          .catch((err) => reject(err)))
          .finally( () => client.release())
        .catch((err) => reject(err));
    })
}

export default startDatabase;