import jwt from 'jsonwebtoken';

const secret = "teste";

export const sign =  ( username ) => {
    return new Promise((resolve, reject) => {
        jwt.sign(username, secret, (err, token) => {
            if(err) reject(err)
            if(token) resolve(token)
        });
    })
}

export const verify =  ( token ) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, token) => {
            if(err) reject(err)
            if(token) resolve(token)
        });
    })
}
