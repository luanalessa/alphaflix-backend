import pkg from 'pg';


const { Pool } = pkg ;

const pool = new Pool({
    user: 'postgres',
    password: '88eb9394',
    host: '/var/run/postgresql',
    port: 5432,
    database: 'alphaflix'
  });

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
          .then((client) => client.query(query)
            .then(result => resolve(result.rows))
            .catch((err) => reject(err))
            .finally(() => client.release()))
          .catch((err) => reject(err));
      })
}

export default startDatabase;