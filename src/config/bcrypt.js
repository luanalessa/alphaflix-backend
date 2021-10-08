import {bcrypt} from 'bcrypt'

export const hash = ( password ) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, result) => {
            if(err) reject(err)
            if(result) resolve(result)
        })
    })
}

