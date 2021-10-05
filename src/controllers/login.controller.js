import { sign } from '../config/jwt.js'

const login = (req, res) => 
{
    const { username, password } = req.body;
    
    if(username === "lessa@gmail.com" && password === "123")
    {
        sign({'username' : username})
            .then( token => res.send(token))
            .catch(err => res.sendStatus(err));
    }
    else res.sendStatus(401);
}

export default login;