import { sign } from '../config/jwt.js'
import startDatabase from '../config/database.js'

const login = (req, res) => 
{
    const { username, password } = req.body;

    const query = "Select email, password from public.user"
                + ` where email = '${username}'`

    startDatabase(query)
        .then(result => {
            console.log(result[0].email)
            if(result[0].password === password)
            {
                sign({'username' : username})
                    .then( token => res.send(token))
                    .catch(err => res.sendStatus(err));
            }
            else res.sendStatus(401);
        })

    
}

export default login;